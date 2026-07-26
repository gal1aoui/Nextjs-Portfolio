"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import { JestIcon, MochaIcon, PostmanIcon, RobotFrameworkIcon } from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  robot: RobotFrameworkIcon,
  postman: PostmanIcon,
  jest: JestIcon,
  mocha: MochaIcon,
};

export default function TestingSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.testing.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
