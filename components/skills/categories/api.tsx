"use client";

import { useTranslation } from "@/i18n/client";

import SkillGrid from "../skill-card";
import { GraphqlIcon, RestAPIIcon, UMLIcon } from "../icons";
import { Skill } from "../type";

export default function ApiSkills() {
  const { t } = useTranslation("skills");
  const skills: Skill[] = [
    {
      id: "graphql",
      name: "GraphQL",
      description: t("items.graphql"),
      icon: GraphqlIcon,
    },
    {
      id: "restapi",
      name: "REST API",
      description: t("items.restapi"),
      icon: RestAPIIcon,
    },
    {
      id: "uml",
      name: "UML",
      description: t("items.uml"),
      icon: UMLIcon,
    },
  ];

  return <SkillGrid skills={skills} />;
}
