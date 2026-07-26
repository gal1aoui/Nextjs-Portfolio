"use client";

import { useRef } from "react";
import { Chip } from "@heroui/chip";

import { getExperiences } from "@/components/experience/experience-data";
import { useTranslation } from "@/i18n/client";
import type { AppLanguage } from "@/i18n/settings";

import {
  ANY_MOTION_MEDIA,
  DESKTOP_MOTION_MEDIA,
  gsap,
  useGSAP,
} from "../gsap/gsap-config";

/**
 * Journey timeline in the classic page's language: a centered gradient
 * progress line that draws with scroll, alternating milestone cards (lg+)
 * revealing from their side, and a springy dot + ping ring per milestone.
 */
export default function ExperienceTimeline({ lng }: { lng: AppLanguage }) {
  const { t } = useTranslation("experience");
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  const experiences = getExperiences(lng);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        // Scroll-scrubbed progress line, as on the classic timeline.
        if (lineRef.current && listRef.current) {
          gsap.fromTo(
            lineRef.current,
            { scaleY: 0, transformOrigin: "top" },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 75%",
                end: "bottom 60%",
                scrub: 1,
              },
            },
          );
        }

        const milestones =
          listRef.current?.querySelectorAll<HTMLElement>("[data-milestone]") ??
          [];

        milestones.forEach((milestone) => {
          const dot = milestone.querySelector<HTMLElement>("[data-dot]");
          const ping = milestone.querySelector<HTMLElement>("[data-ping]");
          const trigger = {
            trigger: milestone,
            start: "top 82%",
            once: true,
          };

          if (dot) {
            gsap.from(dot, {
              scale: 0,
              duration: 0.6,
              ease: "back.out(2.5)",
              scrollTrigger: trigger,
            });
          }

          if (ping) {
            gsap.fromTo(
              ping,
              { scale: 0.8, opacity: 0.6 },
              {
                scale: 2.4,
                opacity: 0,
                duration: 1.1,
                delay: 0.15,
                ease: "power2.out",
                scrollTrigger: trigger,
              },
            );
          }
        });
      });

      // Cards slide in from their own side on desktop…
      mm.add(DESKTOP_MOTION_MEDIA, () => {
        const cards =
          listRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? [];

        cards.forEach((card) => {
          gsap.from(card, {
            x: card.dataset.side === "left" ? -48 : 48,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              once: true,
            },
          });
        });
      });

      // …and rise up on smaller screens.
      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards =
            listRef.current?.querySelectorAll<HTMLElement>("[data-card]") ?? [];

          cards.forEach((card) => {
            gsap.from(card, {
              y: 40,
              opacity: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            });
          });
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-experience-title"
      className="px-6 py-24 sm:px-10 sm:py-32"
      id="experience"
    >
      <div className="mx-auto max-w-6xl">
        <p
          className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-default-500"
          id="modern-experience-title"
        >
          {tModern("experience.heading")}
        </p>
        <h2 className="mb-16 font-display text-3xl font-bold sm:text-5xl">
          {t("title")}
        </h2>

        <div className="relative">
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-0 w-[2px] -translate-x-1/2 bg-default-200/60 lg:left-1/2"
          />
          <div
            ref={lineRef}
            aria-hidden
            className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-primary to-secondary lg:left-1/2"
          />

          <ol ref={listRef} className="space-y-16 lg:space-y-20">
            {experiences.map((experience, index) => {
              const isEven = index % 2 === 0;

              return (
                <li
                  key={experience.id}
                  data-milestone
                  className="relative pl-12 lg:pl-0"
                >
                  <span
                    data-dot
                    className="absolute left-4 top-3 z-10 -translate-x-1/2 lg:left-1/2"
                  >
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-primary shadow-lg">
                      <span className="h-2.5 w-2.5 rounded-full bg-background" />
                      <span
                        aria-hidden
                        data-ping
                        className="absolute inset-0 rounded-full border-2 border-primary opacity-0"
                      />
                    </span>
                  </span>

                  <article
                    data-card
                    className={`lg:w-[45%] ${isEven ? "lg:mr-auto lg:pr-4 lg:text-right" : "lg:ml-auto lg:pl-4"}`}
                    data-side={isEven ? "left" : "right"}
                  >
                    <div
                      className={`flex flex-wrap items-baseline gap-x-4 gap-y-1 ${isEven ? "lg:justify-end" : ""}`}
                    >
                      <span className="font-display text-4xl font-bold text-default-300 sm:text-5xl">
                        {experience.year}
                      </span>
                      <Chip color="primary" size="sm" variant="flat">
                        {t(`types.${experience.type}`)}
                      </Chip>
                    </div>

                    <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                      {experience.title}
                    </h3>
                    <p className="mt-1 font-medium text-default-600">
                      {experience.company}
                    </p>
                    <p className="mt-0.5 text-sm text-default-500">
                      {experience.period} · {experience.location}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-default-500 sm:text-base">
                      {experience.story}
                    </p>

                    <div
                      className={`mt-4 flex flex-wrap gap-1.5 ${isEven ? "lg:justify-end" : ""}`}
                    >
                      {experience.techStack.map((tech) => (
                        <Chip key={tech} size="sm" variant="bordered">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
