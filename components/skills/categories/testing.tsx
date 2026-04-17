"use client";

import SkillGrid from "../skill-card";
import { JestIcon, MochaIcon, PostmanIcon, RobotFrameworkIcon } from "../icons";
import { Skill } from "../type";

import { useTranslation } from "@/i18n/client";

export default function TestingSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "robot",
      name: "Robot Framework",
      description: t("items.robot"),
      icon: RobotFrameworkIcon,
    },
    {
      id: "postman",
      name: "Postman",
      description: t("items.postman"),
      icon: PostmanIcon,
    },
    {
      id: "jest",
      name: "Jest.js",
      description: t("items.jest"),
      icon: JestIcon,
    },
    {
      id: "mocha",
      name: "Mocha",
      description: t("items.mocha"),
      icon: MochaIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
