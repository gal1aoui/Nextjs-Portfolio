"use client";

import { useRef } from "react";

import { getExperiences } from "@/components/experience/experience-data";
import { projectIds } from "@/components/projects/data";
import { getTotalSkillCount } from "@/components/skills/skills-data";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/i18n/client";
import type { AppLanguage } from "@/i18n/settings";

import {
  ANY_MOTION_MEDIA,
  gsap,
  SplitText,
  useGSAP,
} from "../gsap/gsap-config";

const BIO_KEYS = [
  "bio.highlightRole",
  "bio.beforeSpecialization",
  "bio.specialization",
  "bio.beforeExperience",
  "bio.experience",
  "bio.beforePerformance",
  "bio.performance",
  "bio.beforeMaintainable",
  "bio.maintainable",
  "bio.beforeBackend",
  "bio.backend",
  "bio.afterBackend",
] as const;

export default function AboutStats({ lng }: { lng: AppLanguage }) {
  const { t } = useTranslation("home");
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const bio = BIO_KEYS.map((key) => t(key))
    .join(" ")
    .replace(/\s+,/g, ",");

  const experiences = getExperiences(lng);
  const companies = new Set(experiences.map((item) => item.company)).size;

  const stats = [
    {
      key: "years",
      value: siteConfig.yearsOfExperience,
      label: tModern("about.stats.years"),
    },
    {
      key: "projects",
      value: projectIds.length,
      label: tModern("about.stats.projects"),
    },
    {
      key: "skills",
      value: getTotalSkillCount(),
      label: tModern("about.stats.skills"),
    },
    {
      key: "companies",
      value: companies,
      label: tModern("about.stats.companies"),
    },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        if (bioRef.current) {
          // autoSplit re-computes the line boxes on viewport resize so the
          // bio never keeps stale line breaks after rotation.
          SplitText.create(bioRef.current, {
            type: "lines",
            linesClass: "overflow-hidden",
            autoSplit: true,
            onSplit: (self) =>
              gsap.from(self.lines, {
                yPercent: 105,
                opacity: 0,
                stagger: 0.08,
                duration: 0.7,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: bioRef.current,
                  start: "top 80%",
                  once: true,
                },
              }),
          });
        }

        // Counters animate up to the value already present in the markup, so
        // no-JS and reduced-motion visitors always see the final numbers.
        const counters =
          statsRef.current?.querySelectorAll<HTMLElement>("[data-count]") ?? [];

        counters.forEach((counter) => {
          const target = Number(counter.dataset.count);
          const state = { value: 0 };

          gsap.to(state, {
            value: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: counter,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              counter.textContent = String(Math.round(state.value));
            },
          });
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-about-title"
      className="px-6 py-24 sm:px-10 sm:py-32"
      id="about"
    >
      <div className="mx-auto max-w-5xl">
        <p
          className="mb-10 text-sm font-medium uppercase tracking-[0.35em] text-default-500"
          id="modern-about-title"
        >
          {tModern("about.heading")}
        </p>

        <p
          ref={bioRef}
          className="font-display text-2xl font-medium leading-snug sm:text-4xl"
        >
          {bio}
        </p>

        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.key}>
              <p className="font-display text-5xl font-bold sm:text-6xl">
                <span data-count={stat.value}>{stat.value}</span>
                <span className="text-default-400">+</span>
              </p>
              <p className="mt-2 text-sm text-default-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
