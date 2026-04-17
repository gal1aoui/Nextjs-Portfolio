"use client";

import SkillGrid from "../skill-card";
import { GraphqlIcon, RestAPIIcon, UMLIcon } from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "graphql",
    name: "GraphQL",
    description: "Query language for building flexible and efficient APIs.",
    icon: GraphqlIcon,
  },
  {
    id: "restapi",
    name: "REST API",
    description:
      "Stateless API architecture using standard HTTP methods and conventions.",
    icon: RestAPIIcon,
  },
  {
    id: "uml",
    name: "UML",
    description:
      "Modeling language for visualizing system architecture and relationships.",
    icon: UMLIcon,
  },
];

export default function ApiSkills() {
  return <SkillGrid skills={skills} />;
}
