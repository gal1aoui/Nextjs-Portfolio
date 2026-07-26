"use client";

import { FC } from "react";

import { useTranslation } from "@/i18n/client";
import { IconSvgProps } from "@/types";

import SkillGrid from "../skill-card";
import { MongoDBIcon, MySQLIcon, PostgreIcon, SQLiteIcon } from "../icons";
import { skillsData } from "../skills-data";
import { Skill } from "../type";

const icons: Record<string, FC<IconSvgProps>> = {
  mysql: MySQLIcon,
  mongodb: MongoDBIcon,
  postgresql: PostgreIcon,
  sqlite: SQLiteIcon,
};

export default function DatabaseSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = skillsData.databases.map((entry) => ({
    id: entry.id,
    name: entry.name,
    description: t(entry.translationKey),
    icon: icons[entry.id],
  }));

  return <SkillGrid skills={skills} />;
}
