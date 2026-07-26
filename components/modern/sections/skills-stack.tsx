"use client";

import { FC, useRef } from "react";

import { GithubIcon } from "@/components/icons";
import {
  AngularIcon,
  CICDIcon,
  DockerIcon,
  DotNetIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  GitLabIcon,
  GraphqlIcon,
  JestIcon,
  JiraIcon,
  KanbanIcon,
  LaravelIcon,
  MaterialUiIcon,
  MochaIcon,
  MongoDBIcon,
  MySQLIcon,
  NestIcon,
  NextJsIcon,
  NodeIcon,
  PostgreIcon,
  PostmanIcon,
  ReactIcon,
  RestAPIIcon,
  RobotFrameworkIcon,
  ScrumIcon,
  ShadcnUiIcon,
  SpartanNgIcon,
  SQLiteIcon,
  SupabaseIcon,
  SymfonyIcon,
  TailwindCssIcon,
  TanStackIcon,
  TypeScriptIcon,
  UMLIcon,
  ZodIcon,
  ZustandIcon,
} from "@/components/skills/icons";
import { skillCategoryIds, skillsData } from "@/components/skills/skills-data";
import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import { ANY_MOTION_MEDIA, gsap, useGSAP } from "../gsap/gsap-config";

const iconById: Record<string, FC<IconSvgProps>> = {
  react: ReactIcon,
  nextjs: NextJsIcon,
  typescript: TypeScriptIcon,
  angular: AngularIcon,
  "spartan-ng": SpartanNgIcon,
  tailwind: TailwindCssIcon,
  shadcn: ShadcnUiIcon,
  "material-ui": MaterialUiIcon,
  tanstack: TanStackIcon,
  zod: ZodIcon,
  zustand: ZustandIcon,
  laravel: LaravelIcon,
  symfony: SymfonyIcon,
  supabase: SupabaseIcon,
  "node.js": NodeIcon,
  "express.js": ExpressIcon,
  "nest.js": NestIcon,
  ".net": DotNetIcon,
  mysql: MySQLIcon,
  mongodb: MongoDBIcon,
  postgresql: PostgreIcon,
  sqlite: SQLiteIcon,
  docker: DockerIcon,
  git: GitIcon,
  gitlab: GitLabIcon,
  github: GithubIcon,
  "ci/cd": CICDIcon,
  robot: RobotFrameworkIcon,
  postman: PostmanIcon,
  jest: JestIcon,
  mocha: MochaIcon,
  graphql: GraphqlIcon,
  restapi: RestAPIIcon,
  uml: UMLIcon,
  figma: FigmaIcon,
  jira: JiraIcon,
  scrum: ScrumIcon,
  kanban: KanbanIcon,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  frontend: "from-violet-500 to-fuchsia-500",
  backend: "from-emerald-500 to-teal-500",
  databases: "from-sky-500 to-blue-600",
  devops: "from-amber-500 to-orange-600",
  testing: "from-rose-500 to-red-600",
  api: "from-cyan-500 to-sky-600",
  collaboration: "from-indigo-500 to-violet-600",
};

/**
 * Sticky-scroll skills: one card per category (same categorization as the
 * classic skills page) that pins under the nav while the next card slides
 * over it, gently scaling the covered card away.
 */
export default function SkillsStack() {
  const { t } = useTranslation("skills");
  const { t: tModern } = useTranslation("modern");
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(ANY_MOTION_MEDIA, () => {
        const cards =
          sectionRef.current?.querySelectorAll<HTMLElement>(
            "[data-stack-card]",
          ) ?? [];

        cards.forEach((card, index) => {
          const next = cards[index + 1];

          if (!next) return;

          // Scale the covered card away while the next one slides over it.
          gsap.to(card, {
            scale: 0.94,
            opacity: 0.55,
            transformOrigin: "center top",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top top+=120",
              scrub: true,
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
      aria-labelledby="modern-skills-title"
      className="px-6 py-24 sm:px-10 sm:py-32"
      id="skills"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-14">
          <p
            className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-default-500"
            id="modern-skills-title"
          >
            {tModern("skills.heading")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            {tModern("skills.subheading")}
          </h2>
        </div>

        <div>
          {skillCategoryIds.map((categoryId, index) => (
            <div
              key={categoryId}
              data-stack-card
              className="sticky"
              style={{ top: `calc(5rem + ${index * 1.25}rem)` }}
            >
              <div className="mb-8 flex min-h-[55vh] flex-col rounded-3xl border border-default-200/70 bg-background p-7 sm:p-10">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 font-display text-sm text-default-400">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(skillCategoryIds.length).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-2xl font-bold sm:text-4xl">
                      {t(`categories.${categoryId}.title`)}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm text-default-500 sm:text-base">
                      {t(`categories.${categoryId}.summary`)}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className={`hidden h-2 w-24 shrink-0 rounded-full bg-gradient-to-r sm:block ${CATEGORY_GRADIENTS[categoryId] ?? "from-violet-500 to-cyan-500"}`}
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {skillsData[categoryId].map((entry) => {
                    const Icon = iconById[entry.id];

                    return (
                      <span
                        key={entry.id}
                        className="flex items-center gap-2 rounded-full border border-default-200/70 bg-default-50/60 px-4 py-2 text-sm font-medium"
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                        {entry.name}
                      </span>
                    );
                  })}
                </div>

                <p className="mt-auto pt-8 text-xs uppercase tracking-[0.3em] text-default-400">
                  {skillsData[categoryId].length}{" "}
                  {tModern("about.stats.skills")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
