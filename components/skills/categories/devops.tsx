"use client";

import SkillGrid from "../skill-card";
import { CICDIcon, DockerIcon, GitIcon, GitLabIcon } from "../icons";
import { Skill } from "../type";

import { GithubIcon } from "@/components/icons";

const skills: Skill[] = [
  {
    id: "docker",
    name: "Docker",
    description:
      "Containerization platform for consistent development and production environments.",
    icon: DockerIcon,
  },
  {
    id: "git",
    name: "Git",
    description:
      "Distributed version control system for tracking code changes and collaboration.",
    icon: GitIcon,
  },
  {
    id: "gitlab",
    name: "GitLab",
    description:
      "DevOps platform providing repositories, CI/CD pipelines, and project management.",
    icon: GitLabIcon,
  },
  {
    id: "github",
    name: "GitHub",
    description:
      "Code hosting platform for collaboration, version control, and automation.",
    icon: GithubIcon,
  },
  {
    id: "ci/cd",
    name: "CI/CD",
    description:
      "Automated pipelines for testing, building, and deploying applications.",
    icon: CICDIcon,
  },
];

export default function DevOpsSkills() {
  return <SkillGrid skills={skills} />;
}
