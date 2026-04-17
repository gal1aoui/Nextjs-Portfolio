"use client";

import SkillGrid from "../skill-card";
import { MongoDBIcon, MySQLIcon, PostgreIcon, SQLiteIcon } from "../icons";
import { Skill } from "../type";

import { useTranslation } from "@/i18n/client";

export default function DatabaseSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "mysql",
      name: "MySQL",
      description: t("items.mysql"),
      icon: MySQLIcon,
    },
    {
      id: "mongodb",
      name: "MongoDB",
      description: t("items.mongodb"),
      icon: MongoDBIcon,
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      description: t("items.postgresql"),
      icon: PostgreIcon,
    },
    {
      id: "sqlite",
      name: "SQLite",
      description: t("items.sqlite"),
      icon: SQLiteIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
