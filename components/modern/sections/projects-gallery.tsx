"use client";

import NextLink from "next/link";
import { useMemo, useRef } from "react";
import { Chip } from "@heroui/chip";

import ProjectCover from "@/components/projects/project-cover";
import { getProjects, type Project } from "@/components/projects/data";
import { useTranslation } from "@/i18n/client";
import { localizePath } from "@/i18n/routing";
import type { AppLanguage } from "@/i18n/settings";

import { ANY_MOTION_MEDIA, gsap, useGSAP } from "../gsap/gsap-config";

const FEATURED_COUNT = 6;

interface ProjectsGalleryProps {
  lng: AppLanguage;
  onSelect: (project: Project) => void;
}

/**
 * Full-screen horizontal scroll on every device: a tall stage with a sticky
 * viewport whose track of 100vw slides translates left as the page scrolls
 * down (native scroll through Lenis + a scrubbed GSAP tween — no overflow
 * scroller). The translate is scroll-linked navigation, so it runs under
 * reduced motion too; only the decorative giant-title parallax is motion-gated.
 */
export default function ProjectsGallery({
  lng,
  onSelect,
}: ProjectsGalleryProps) {
  const { t } = useTranslation("projects");
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const featured = useMemo(
    () =>
      [...getProjects(lng)]
        .sort((a, b) => b.year - a.year)
        .slice(0, FEATURED_COUNT),
    [lng],
  );

  const slideCount = featured.length + 1;

  useGSAP(
    () => {
      const stage = stageRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;

      if (!stage || !viewport || !track) return;

      // Scrolling down moves the track left: one viewport-height of page
      // scroll per slide, while the viewport sticks to the top of the stage.
      // scrub: true tracks the Lenis-smoothed scroll 1:1 (a numeric scrub on
      // top of Lenis' own lerp reads as lag), and snap turns the traversal
      // into a swiping carousel that always settles on a full slide.
      const trackTween = gsap.to(track, {
        x: () => -(track.scrollWidth - viewport.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (slideCount - 1),
            duration: { min: 0.25, max: 0.55 },
            delay: 0.05,
            ease: "power2.out",
            directional: true,
          },
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        // Giant titles sweep across their slide while it traverses the
        // viewport — the GSAP equivalent of Motion's per-item scroll offsets.
        const slides = track.querySelectorAll<HTMLElement>("[data-slide]");

        slides.forEach((slide) => {
          const title = slide.querySelector<HTMLElement>("[data-slide-title]");

          if (!title) return;

          gsap.fromTo(
            title,
            { x: 360 },
            {
              x: -360,
              ease: "none",
              scrollTrigger: {
                trigger: slide,
                containerAnimation: trackTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        });
      });
    },
    { scope: sectionRef, dependencies: [slideCount] },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="modern-projects-title"
      className="relative pt-24 sm:pt-32"
      id="projects"
    >
      <div className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-4 px-6 sm:px-10">
        <div>
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-default-500"
            id="modern-projects-title"
          >
            {tModern("projects.heading")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            {t("title")}
          </h2>
        </div>
        <p className="hidden shrink-0 text-xs uppercase tracking-[0.3em] text-default-400 sm:block">
          {tModern("projects.dragHint")} →
        </p>
      </div>

      <div
        ref={stageRef}
        className="relative"
        style={{ height: `${slideCount * 100}svh` }}
      >
        <div ref={viewportRef} className="sticky top-0 h-svh overflow-hidden">
          <ul
            ref={trackRef}
            className="flex h-full w-max will-change-transform"
          >
            {featured.map((project) => (
              <li
                key={project.id}
                data-slide
                className="relative flex h-full w-screen shrink-0 flex-col items-center justify-center overflow-hidden px-6"
              >
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.13]`}
                />

                <span
                  aria-hidden
                  data-slide-title
                  className="pointer-events-none absolute top-6 whitespace-nowrap font-display text-[13vw] font-bold leading-none text-foreground/10 will-change-transform sm:top-10"
                >
                  {project.title}
                </span>

                <button
                  className="group relative z-10 mt-14 w-[min(88vw,640px)] text-left lg:w-[min(60vw,760px)]"
                  data-cursor="hover"
                  type="button"
                  onClick={() => onSelect(project)}
                >
                  <ProjectCover
                    className="rounded-3xl shadow-2xl transition-transform duration-300 group-hover:scale-[1.015] motion-reduce:transition-none"
                    project={project}
                    sizes="(max-width: 1023px) 88vw, 60vw"
                  />

                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold transition-colors group-hover:text-primary sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="font-display text-xl text-default-400">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-default-500">
                    {project.role}
                  </p>
                  {project.highlights[0] ? (
                    <p className="mt-2 text-sm font-medium text-default-600">
                      → {project.highlights[0]}
                    </p>
                  ) : null}
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Chip key={tech} size="sm" variant="bordered">
                        {tech}
                      </Chip>
                    ))}
                    <span className="ml-2 text-xs uppercase tracking-[0.25em] text-default-400 transition-colors group-hover:text-primary">
                      {tModern("projects.openProject")}
                    </span>
                  </div>
                </button>
              </li>
            ))}

            <li
              data-slide
              className="relative flex h-full w-screen shrink-0 items-center justify-center overflow-hidden px-6"
            >
              <span
                aria-hidden
                data-slide-title
                className="pointer-events-none absolute top-6 whitespace-nowrap font-display text-[13vw] font-bold leading-none text-foreground/10 will-change-transform sm:top-10"
              >
                {tModern("projects.viewAll")}
              </span>
              <NextLink
                className="group z-10 flex flex-col items-center gap-4 text-center"
                data-cursor="hover"
                href={localizePath(lng, "/projects")}
              >
                <span className="font-display text-4xl font-bold transition-colors group-hover:text-primary sm:text-6xl">
                  {tModern("projects.viewAll")}
                </span>
                <span
                  aria-hidden
                  className="text-5xl transition-transform duration-300 group-hover:translate-x-2 motion-reduce:transition-none"
                >
                  →
                </span>
              </NextLink>
            </li>
          </ul>

          <div className="pointer-events-none absolute bottom-6 left-1/2 h-0.5 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-default-200/70 sm:w-72">
            <div
              ref={progressRef}
              aria-hidden
              className="h-full w-full origin-left bg-gradient-to-r from-violet-500 to-cyan-500"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
