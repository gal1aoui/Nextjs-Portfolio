"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import { GraphqlIcon, RestAPIIcon, UMLIcon } from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  graphql: GraphqlIcon,
  restapi: RestAPIIcon,
  uml: UMLIcon,
};

export default function ApiSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.api.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
