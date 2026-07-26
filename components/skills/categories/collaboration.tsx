"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import { FigmaIcon, JiraIcon, KanbanIcon, ScrumIcon } from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  figma: FigmaIcon,
  jira: JiraIcon,
  scrum: ScrumIcon,
  kanban: KanbanIcon,
};

export default function CollaborationSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.collaboration.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
