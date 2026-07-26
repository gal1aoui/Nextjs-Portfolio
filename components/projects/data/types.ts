import type { ChipProps } from "@heroui/chip";

export const projectIds = [
  "ticket-management",
  "9hiwa",
  "solarix-pro",
  "ngs-partners",
  "assistromande",
  "menumate",
  "boudokhane-doors",
  "angular-file-manager",
  "saas-directory-agent",
  "dnd-core",
  "game-2048",
  "nextjs-auth",
  "nestjs-auth",
  "laravel-reminder",
  "rabbit-run-game",
] as const;

export type ProjectId = (typeof projectIds)[number];

export type ProjectCategory =
  | "fullstack"
  | "backend"
  | "frontend"
  | "library"
  | "devops";

export type ProjectStatus = "live" | "in-progress" | "archived";

export type ProjectType = "client" | "personal" | "open-source";

export interface ProjectImages {
  /** Public path, e.g. "/projects/<id>/cover.webp" (1200x630). */
  cover?: string;
  /** Public path, e.g. "/projects/<id>/logo.webp". */
  logo?: string;
  /** Public paths, e.g. "/projects/<id>/screen-1.webp". */
  screenshots?: string[];
}

/** Language-invariant project data. */
export interface ProjectDefinition {
  id: ProjectId;
  techStack: string[];
  category: ProjectCategory;
  year: number;
  status: ProjectStatus;
  type: ProjectType;
  /** Deployed site / npm page. */
  liveUrl?: string;
  /** GitHub repository only — never a live site. */
  repoUrl?: string;
  /**
   * Full Tailwind gradient fragment (e.g. "from-blue-600 to-cyan-500").
   * Must stay a complete literal — never concatenate color names — and this
   * file must stay under components/ so Tailwind's content scan keeps the
   * classes alive.
   */
  gradient: string;
  images?: ProjectImages;
}

/** Localized project content. */
export interface LocalizedProjectContent {
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  /** e.g. "Solo full-stack developer". */
  role: string;
  /** 2–4 short metric-style highlights. */
  highlights: string[];
}

export interface Project extends ProjectDefinition, LocalizedProjectContent {}

export const categoryColors: Record<
  ProjectCategory,
  NonNullable<ChipProps["color"]>
> = {
  fullstack: "primary",
  backend: "danger",
  frontend: "secondary",
  library: "success",
  devops: "warning",
};

export const statusColors: Record<
  ProjectStatus,
  NonNullable<ChipProps["color"]>
> = {
  live: "success",
  "in-progress": "warning",
  archived: "default",
};
