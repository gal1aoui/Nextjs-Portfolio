"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import {
  DotNetIcon,
  ExpressIcon,
  LaravelIcon,
  NestIcon,
  NodeIcon,
  SupabaseIcon,
  SymfonyIcon,
} from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  laravel: LaravelIcon,
  symfony: SymfonyIcon,
  supabase: SupabaseIcon,
  "node.js": NodeIcon,
  "express.js": ExpressIcon,
  "nest.js": NestIcon,
  ".net": DotNetIcon,
};

export default function BackendSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.backend.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
