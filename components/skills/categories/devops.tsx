"use client";

import SkillGrid from "../skill-card";
import { CICDIcon, DockerIcon, GitIcon, GitLabIcon } from "../icons";
import { Skill } from "../type";

import { GithubIcon } from "@/components/icons";
import { useTranslation } from "@/i18n/client";

export default function DevOpsSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "docker",
      name: "Docker",
      description: t("items.docker"),
      icon: DockerIcon,
    },
    {
      id: "git",
      name: "Git",
      description: t("items.git"),
      icon: GitIcon,
    },
    {
      id: "gitlab",
      name: "GitLab",
      description: t("items.gitlab"),
      icon: GitLabIcon,
    },
    {
      id: "github",
      name: "GitHub",
      description: t("items.github"),
      icon: GithubIcon,
    },
    {
      id: "ci/cd",
      name: "CI/CD",
      description: t("items.cicd"),
      icon: CICDIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
