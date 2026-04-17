"use client";

import SkillGrid from "../skill-card";
import { JestIcon, MochaIcon, PostmanIcon, RobotFrameworkIcon } from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "robot",
    name: "Robot Framework",
    description:
      "Keyword-driven testing framework for acceptance and end-to-end testing.",
    icon: RobotFrameworkIcon,
  },
  {
    id: "postman",
    name: "Postman",
    description:
      "Tool for testing, documenting, and validating REST and GraphQL APIs.",
    icon: PostmanIcon,
  },
  {
    id: "jest",
    name: "Jest.js",
    description:
      "JavaScript testing framework for unit and integration testing.",
    icon: JestIcon,
  },
  {
    id: "mocha",
    name: "Mocha",
    description:
      "Flexible JavaScript test framework for backend and API testing.",
    icon: MochaIcon,
  },
];

export default function TestingSkills() {
  return <SkillGrid skills={skills} />;
}
