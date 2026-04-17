"use client";

import SkillGrid from "../skill-card";
import { FigmaIcon, JiraIcon, KanbanIcon, ScrumIcon } from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "figma",
    name: "Figma",
    description: "Collaborative design tool for UI/UX prototyping and handoff.",
    icon: FigmaIcon,
  },
  {
    id: "jira",
    name: "Jira",
    description:
      "Project management tool for agile planning and issue tracking.",
    icon: JiraIcon,
  },
  {
    id: "scrum",
    name: "Agile/Scrum",
    description:
      "Iterative development framework focused on collaboration and continuous delivery.",
    icon: ScrumIcon,
  },
  {
    id: "kanban",
    name: "Kanban",
    description:
      "Workflow management method for visualizing tasks and optimizing flow.",
    icon: KanbanIcon,
  },
];

export default function CollaborationSkills() {
  return <SkillGrid skills={skills} />;
}
