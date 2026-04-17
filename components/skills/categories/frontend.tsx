"use client";

import SkillGrid from "../skill-card";
import {
  AngularIcon,
  MaterialUiIcon,
  NextJsIcon,
  ReactIcon,
  ShadcnUiIcon,
  SpartanNgIcon,
  TailwindCssIcon,
  TanStackIcon,
  TypeScriptIcon,
  ZodIcon,
  ZustandIcon,
} from "../icons";
import { Skill } from "../type";

const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    description:
      "Component-based library for building fast, interactive, and reusable user interfaces.",
    icon: ReactIcon,
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "React framework for production-grade applications with SSR, routing, and performance optimizations.",
    icon: NextJsIcon,
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "Strongly typed JavaScript that improves code reliability, scalability, and developer experience.",
    icon: TypeScriptIcon,
  },
  {
    id: "angular",
    name: "Angular",
    description:
      "Full-featured frontend framework for building scalable, enterprise-level applications.",
    icon: AngularIcon,
  },
  {
    id: "spartan-ng",
    name: "Spartan NG",
    description:
      "Headless, accessible UI primitives for Angular, focused on performance and flexibility.",
    icon: SpartanNgIcon,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapidly building responsive and consistent user interfaces.",
    icon: TailwindCssIcon,
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    description:
      "Composable, accessible UI components built on Radix and Tailwind for modern React apps.",
    icon: ShadcnUiIcon,
  },
  {
    id: "material-ui",
    name: "Material UI",
    description:
      "Popular React component library implementing Google's Material Design system.",
    icon: MaterialUiIcon,
  },
  {
    id: "tanstack",
    name: "TanStack",
    description:
      "High-performance data management libraries for tables, queries, and state handling.",
    icon: TanStackIcon,
  },
  {
    id: "zod",
    name: "Zod",
    description:
      "Type-safe schema validation for forms, APIs, and runtime data integrity.",
    icon: ZodIcon,
  },
  {
    id: "zustand",
    name: "Zustand",
    description:
      "Lightweight and scalable state management library for React applications with minimal boilerplate.",
    icon: ZustandIcon,
  },
];

export default function FrontendSkills() {
  return <SkillGrid skills={skills} />;
}
