"use client";

import NextImage from "next/image";
import { useRef } from "react";

import profile from "@/public/dark-profile.webp";
import { useTranslation } from "@/i18n/client";

import {
  ANY_MOTION_MEDIA,
  DESKTOP_MOTION_MEDIA,
  gsap,
  SplitText,
  useGSAP,
} from "../gsap/gsap-config";

export default function Hero({ introReady }: { introReady: boolean }) {
  const { t } = useTranslation("home");
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);

  const translatedRoles = t("roles", { returnObjects: true, defaultValue: [] });
  const roles = Array.isArray(translatedRoles) ? translatedRoles : [];

  // Name entrance waits for the preloader curtain to start lifting, and
  // autoSplit re-splits (and replays) cleanly on viewport resize. "words" is
  // included so lines never break mid-word.
  useGSAP(
    () => {
      if (!introReady || !nameRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        SplitText.create(nameRef.current, {
          type: "chars,words,lines",
          linesClass: "overflow-hidden",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, {
              yPercent: 115,
              stagger: 0.035,
              duration: 0.9,
              ease: "power4.out",
              delay: 0.15,
            }),
        });
      });
    },
    { scope: sectionRef, dependencies: [introReady] },
  );

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        // Vertical role ticker.
        if (rolesRef.current && roles.length > 1) {
          const timeline = gsap.timeline({ repeat: -1, delay: 1.2 });

          roles.forEach((_, index) => {
            if (index === 0) return;
            timeline.to(rolesRef.current, {
              yPercent: (-100 / roles.length) * index,
              duration: 0.6,
              ease: "power3.inOut",
              delay: 1.6,
            });
          });
          timeline.to(rolesRef.current, {
            yPercent: 0,
            duration: 0.6,
            ease: "power3.inOut",
            delay: 1.6,
          });
        }

        if (hintRef.current) {
          gsap.fromTo(
            hintRef.current,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              duration: 1.1,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true,
            },
          );
        }
      });

      mm.add(DESKTOP_MOTION_MEDIA, () => {
        if (portraitRef.current && sectionRef.current) {
          gsap.to(portraitRef.current, {
            yPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-hero-title"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 sm:px-10"
      id="hero"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-default-500">
            {tModern("hero.eyebrow")}
          </p>
          <h1
            ref={nameRef}
            className="font-display text-[clamp(3rem,11vw,9.5rem)] font-bold leading-[0.95] tracking-tight"
            id="modern-hero-title"
          >
            {t("intro.name")}
          </h1>

          <div
            aria-label={roles.join(", ")}
            className="mt-6 h-[2em] overflow-hidden text-xl text-default-500 sm:text-2xl"
          >
            <div ref={rolesRef}>
              {roles.map((role) => (
                <p key={role} className="flex h-[2em] items-center">
                  {role}
                </p>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-default-500 sm:text-lg">
            {tModern("hero.tagline")}
          </p>
        </div>

        <div ref={portraitRef} className="hidden justify-center lg:flex">
          <NextImage
            priority
            alt={t("intro.name")}
            className="animate-blob bg-default contrast-110 object-cover"
            height={480}
            sizes="(max-width: 1023px) 0px, 380px"
            src={profile}
            style={{
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            }}
            width={400}
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-default-400">
        {tModern("hero.scrollHint")}
        <span
          ref={hintRef}
          aria-hidden
          className="block h-10 w-px bg-default-400"
        />
      </div>
    </section>
  );
}
