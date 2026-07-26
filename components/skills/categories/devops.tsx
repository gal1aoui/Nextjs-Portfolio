"use client";

import { FC } from "react";

import { GithubIcon } from "@/components/icons";
import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import { CICDIcon, DockerIcon, GitIcon, GitLabIcon } from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  docker: DockerIcon,
  git: GitIcon,
  gitlab: GitLabIcon,
  github: GithubIcon,
  "ci/cd": CICDIcon,
};

export default function DevOpsSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.devops.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
