"use client";

import SkillGrid from "../skill-card";
import { FigmaIcon, JiraIcon, KanbanIcon, ScrumIcon } from "../icons";
import { Skill } from "../type";

import { useTranslation } from "@/i18n/client";

export default function CollaborationSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "figma",
      name: "Figma",
      description: t("items.figma"),
      icon: FigmaIcon,
    },
    {
      id: "jira",
      name: "Jira",
      description: t("items.jira"),
      icon: JiraIcon,
    },
    {
      id: "scrum",
      name: "Agile/Scrum",
      description: t("items.scrum"),
      icon: ScrumIcon,
    },
    {
      id: "kanban",
      name: "Kanban",
      description: t("items.kanban"),
      icon: KanbanIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
