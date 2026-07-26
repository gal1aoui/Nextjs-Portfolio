"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { Button } from "@heroui/button";

import ContactFormSkeleton from "@/components/contact/contact-form-skeleton";
import { useTranslation } from "@/i18n/client";
import { useModal } from "@/providers/modal-provider";
import {
  trackContactFormOpened,
  trackModernContactCtaClick,
} from "@/lib/analytics";

import {
  ANY_MOTION_MEDIA,
  gsap,
  SplitText,
  useGSAP,
} from "../gsap/gsap-config";
import Magnetic from "../chrome/magnetic";

const DynamicContactForm = dynamic(
  () => import("@/components/contact/contact-form"),
  {
    loading: () => <ContactFormSkeleton />,
    ssr: false,
  },
);

export default function ContactCta({ onAskAi }: { onAskAi: () => void }) {
  const { t } = useTranslation("home");
  const { t: tModern } = useTranslation("modern");
  const { openModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        if (!headingRef.current) return;

        SplitText.create(headingRef.current, {
          type: "chars,words,lines",
          linesClass: "overflow-hidden",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, {
              yPercent: 110,
              stagger: 0.025,
              duration: 0.8,
              ease: "power4.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 80%",
                once: true,
              },
            }),
        });
      });
    },
    { scope: sectionRef },
  );

  const handleContact = () => {
    trackModernContactCtaClick("cta");
    trackContactFormOpened();
    openModal({
      title: t("intro.contact"),
      render: () => <DynamicContactForm />,
    });
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-contact-title"
      className="px-6 py-24 sm:px-10 sm:py-40"
      id="contact"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2
          ref={headingRef}
          className="font-display text-[clamp(2.75rem,10vw,8rem)] font-bold leading-none tracking-tight"
          id="modern-contact-title"
        >
          {tModern("contact.heading")}
        </h2>
        <p className="mt-6 max-w-xl text-default-500 sm:text-lg">
          {tModern("contact.subheading")}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Magnetic>
            <Button
              className="bg-foreground px-8 text-background"
              radius="full"
              size="lg"
              onPress={handleContact}
            >
              {tModern("contact.cta")}
            </Button>
          </Magnetic>

          <span className="text-sm uppercase tracking-[0.3em] text-default-400">
            {tModern("contact.or")}
          </span>

          <Magnetic>
            <Button
              radius="full"
              size="lg"
              variant="bordered"
              onPress={onAskAi}
            >
              {tModern("contact.askAi")}
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
