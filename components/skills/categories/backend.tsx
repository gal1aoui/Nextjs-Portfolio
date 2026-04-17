"use client";

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
import { Skill } from "../type";

import { useTranslation } from "@/i18n/client";

export default function BackendSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "laravel",
      name: "Laravel",
      description: t("items.laravel"),
      icon: LaravelIcon,
    },
    {
      id: "symfony",
      name: "Symfony",
      description: t("items.symfony"),
      icon: SymfonyIcon,
    },
    {
      id: "supabase",
      name: "Supabase",
      description: t("items.supabase"),
      icon: SupabaseIcon,
    },
    {
      id: "node.js",
      name: "Node.js",
      description: t("items.nodejs"),
      icon: NodeIcon,
    },
    {
      id: "express.js",
      name: "Express.js",
      description: t("items.expressjs"),
      icon: ExpressIcon,
    },
    {
      id: "nest.js",
      name: "Nest.js",
      description: t("items.nestjs"),
      icon: NestIcon,
    },
    {
      id: ".net",
      name: ".NET",
      description: t("items.dotnet"),
      icon: DotNetIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
