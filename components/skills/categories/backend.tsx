"use client";

import SkillGrid from "../skill-card";
import {
  DotNetIcon,
  ExpressIcon,
  LaravelIcon,
  NestIcon,
  NodeIcon,
  SupabaseIcon,
  SymfonyIcon,
} from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "laravel",
    name: "Laravel",
    description:
      "PHP framework for building secure, scalable backend applications with MVC architecture.",
    icon: LaravelIcon,
  },
  {
    id: "symfony",
    name: "Symfony",
    description:
      "Robust PHP framework for enterprise-grade applications and reusable components.",
    icon: SymfonyIcon,
  },
  {
    id: "supabase",
    name: "Supabase",
    description:
      "Backend-as-a-service providing authentication, databases, and real-time APIs.",
    icon: SupabaseIcon,
  },
  {
    id: "node.js",
    name: "Node.js",
    description:
      "JavaScript runtime for building fast, scalable, and event-driven backend services.",
    icon: NodeIcon,
  },
  {
    id: "express.js",
    name: "Express.js",
    description:
      "Minimal Node.js framework for building RESTful APIs and backend services.",
    icon: ExpressIcon,
  },
  {
    id: "nest.js",
    name: "Nest.js",
    description:
      "Opinionated Node.js framework for building maintainable and scalable server applications.",
    icon: NestIcon,
  },
  {
    id: ".net",
    name: ".NET",
    description:
      "Microsoft platform for building high-performance APIs and enterprise backend systems.",
    icon: DotNetIcon,
  },
];

export default function BackendSkills() {
  return <SkillGrid skills={skills} />;
}
