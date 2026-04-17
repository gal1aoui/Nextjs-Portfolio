"use client";

import { useTranslation } from "@/i18n/client";

import SkillGrid from "../skill-card";
import {
  AngularIcon,
  MaterialUiIcon,
  NextJsIcon,
  ReactIcon,
  ShadcnUiIcon,
  SpartanNgIcon,
  TailwindCssIcon,
  TanStackIcon,
  TypeScriptIcon,
  ZodIcon,
  ZustandIcon,
} from "../icons";
import { Skill } from "../type";

export default function FrontendSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "react",
      name: "React",
      description: t("items.react"),
      icon: ReactIcon,
    },
    {
      id: "nextjs",
      name: "Next.js",
      description: t("items.nextjs"),
      icon: NextJsIcon,
    },
    {
      id: "typescript",
      name: "TypeScript",
      description: t("items.typescript"),
      icon: TypeScriptIcon,
    },
    {
      id: "angular",
      name: "Angular",
      description: t("items.angular"),
      icon: AngularIcon,
    },
    {
      id: "spartan-ng",
      name: "Spartan NG",
      description: t("items.spartanng"),
      icon: SpartanNgIcon,
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      description: t("items.tailwind"),
      icon: TailwindCssIcon,
    },
    {
      id: "shadcn",
      name: "shadcn/ui",
      description: t("items.shadcn"),
      icon: ShadcnUiIcon,
    },
    {
      id: "material-ui",
      name: "Material UI",
      description: t("items.materialui"),
      icon: MaterialUiIcon,
    },
    {
      id: "tanstack",
      name: "TanStack",
      description: t("items.tanstack"),
      icon: TanStackIcon,
    },
    {
      id: "zod",
      name: "Zod",
      description: t("items.zod"),
      icon: ZodIcon,
    },
    {
      id: "zustand",
      name: "Zustand",
      description: t("items.zustand"),
      icon: ZustandIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
