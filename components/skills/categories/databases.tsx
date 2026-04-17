"use client";

import SkillGrid from "../skill-card";
import { MongoDBIcon, MySQLIcon, PostgreIcon, SQLiteIcon } from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "mysql",
    name: "MySQL",
    description:
      "Relational database for structured data, transactions, and optimized queries.",
    icon: MySQLIcon,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    description:
      "NoSQL document database designed for flexibility and horizontal scalability.",
    icon: MongoDBIcon,
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    description:
      "Advanced relational database with strong consistency and complex querying support.",
    icon: PostgreIcon,
  },
  {
    id: "sqlite",
    name: "SQLite",
    description:
      "Lightweight embedded database suited for local storage and small applications.",
    icon: SQLiteIcon,
  },
];

export default function DatabaseSkills() {
  return <SkillGrid skills={skills} />;
}
