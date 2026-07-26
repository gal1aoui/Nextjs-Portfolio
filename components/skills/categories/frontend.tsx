"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

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
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
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
};

export default function FrontendSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.frontend.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
