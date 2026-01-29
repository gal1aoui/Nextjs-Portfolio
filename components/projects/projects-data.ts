export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  category: "fullstack" | "backend" | "frontend" | "library" | "devops";
  repoUrl: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "saas-directory-agent",
    title: "SaaS Directory Agent",
    shortDescription:
      "AI-powered automation system for submitting SaaS products to multiple directories simultaneously.",
    fullDescription:
      "An automation system designed to streamline the process of submitting SaaS products to multiple business directories simultaneously. The platform uses cloud-based AI to handle complex form interactions that would otherwise require extensive manual labor.",
    features: [
      "AI-driven form detection and completion across varied directory interfaces",
      "Cloud-based browser automation eliminating local infrastructure needs",
      "Batch submission capabilities for multiple directories in parallel",
      "Credential management for password-protected directory access",
      "Multi-stage form navigation for intricate submission workflows",
      "Built-in error recovery with automatic retry mechanisms",
      "Visual dashboard for monitoring submission outcomes",
    ],
    techStack: [
      "FastAPI",
      "React 19",
      "Vite",
      "Tailwind CSS",
      "PostgreSQL",
      "SQLAlchemy",
      "Browser Use SDK",
      "React Query",
    ],
    category: "fullstack",
    repoUrl: "https://github.com/gal1aoui/Saas-Directory-Agent",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "dnd-core",
    title: "@agal1aoui/dnd",
    shortDescription:
      "High-performance, framework-agnostic drag and drop library for React and Angular.",
    fullDescription:
      "A lightweight drag and drop library that eliminates performance bottlenecks common in similar tools. Zero re-renders during drag operations using refs and direct DOM manipulation with GPU-accelerated animations.",
    features: [
      "Zero re-renders during drag operations using refs and direct DOM",
      "GPU-accelerated animations via translate3d() transforms",
      "Bounding boxes calculated once at drag initiation",
      "Pointer capture API for reliable event tracking",
      "Framework-agnostic TypeScript core engine",
      "CSS data-attribute styling compatible with TailwindCSS",
      "Multi-column Kanban board support",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Angular",
      "Pointer Events API",
      "CSS Transforms",
    ],
    category: "library",
    repoUrl: "https://github.com/gal1aoui/dnd-core",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "ticket-management",
    title: "Project Ticket Management",
    shortDescription:
      "Full-featured project and ticket management system with Kanban board and drag-and-drop.",
    fullDescription:
      "A modern, full-featured project and ticket management system built with Next.js 15, Supabase, TanStack Query, and Pragmatic Drag-and-Drop. Enables teams to organize work through intuitive interfaces.",
    features: [
      "Create, update, delete projects with custom color coding",
      "Kanban board with drag-and-drop between ticket states",
      "Real-time optimistic rendering with smooth animations",
      "Custom ticket states and priorities per project",
      "Full CRUD capabilities with rich detail fields",
      "Row-level security with Supabase authentication",
      "Statistical analytics and user tracking",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Shadcn/ui",
      "Tailwind CSS",
      "Pragmatic DnD",
      "Zod",
      "Docker",
    ],
    category: "fullstack",
    repoUrl: "https://github.com/gal1aoui/Nextjs-Supabase-Project-Ticket-Management",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "nextjs-auth",
    title: "Next.js Auth System",
    shortDescription:
      "Modern authentication framework with email OTP verification and beautiful email templates.",
    fullDescription:
      "A contemporary authentication framework combining Next.js 16, Supabase, Shadcn UI, and TypeScript with emphasis on clean architecture and accessible interfaces. Features beautiful emails built with React-Email.",
    features: [
      "Complete authentication workflows (login, signup, password recovery)",
      "Email verification via 6-digit OTP codes using Resend",
      "Beautiful emails built with React-Email",
      "Middleware-based protection for routes",
      "Type-safe validation through Zod",
      "Centralized routing with app/routes.ts",
      "WCAG-compliant responsive components",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "Resend",
      "React-Email",
      "Shadcn UI",
      "Tailwind CSS",
      "Zod",
    ],
    category: "fullstack",
    repoUrl: "https://github.com/gal1aoui/Next.js-Supabase-Authentication-System",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "nestjs-auth",
    title: "Nest.js Auth System",
    shortDescription:
      "Scalable backend authentication system built with NestJS and TypeScript.",
    fullDescription:
      "A progressive Node.js framework for building efficient and scalable server-side applications. Features comprehensive authentication with JWT, complete testing suite, and production-ready deployment configuration.",
    features: [
      "JWT-based authentication system",
      "Progressive framework architecture",
      "Comprehensive testing (unit, e2e, coverage)",
      "Real-time application visualization tools",
      "AWS deployment support",
      "CircleCI continuous integration",
      "NestJS Devtools for monitoring",
    ],
    techStack: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "JWT",
      "CircleCI",
      "AWS",
    ],
    category: "backend",
    repoUrl: "https://github.com/gal1aoui/Nest.js-Authentication-System",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "laravel-reminder",
    title: "Laravel Reminder App",
    shortDescription:
      "Full-stack reminder app with browser notifications, built with Laravel, React, and Docker.",
    fullDescription:
      "A full-stack web application for managing reminders with browser notifications. Built with Laravel 12, React, TypeScript, Inertia.js, Docker, and MySQL. Demonstrates modern web development practices using containerized services.",
    features: [
      "User authentication (registration, login, logout)",
      "Complete reminder CRUD operations",
      "Scheduling with customizable due dates and times",
      "Browser-based notification system",
      "Full TypeScript type safety",
      "Docker containerization (Laravel, MySQL, Nginx)",
      "Security: CSRF, bcrypt, SQL injection prevention",
    ],
    techStack: [
      "Laravel 12",
      "PHP 8.3",
      "React 18",
      "TypeScript",
      "Inertia.js",
      "MySQL 8.0",
      "Docker",
      "Tailwind CSS",
      "Vite",
    ],
    category: "devops",
    repoUrl: "https://github.com/gal1aoui/Dockerized-Laravel-Reminder-App",
    gradient: "from-pink-500 to-fuchsia-600",
  },
  {
    id: "rabbit-run-game",
    title: "Rabbit Run Game",
    shortDescription:
      "A puzzle game where players help a rabbit find the shortest path to reach a carrot.",
    fullDescription:
      "A fun puzzle game where players help a rabbit locate the shortest path to reach a carrot among three randomly generated options. Players observe three distinct paths, select which they believe is shortest, then watch the rabbit traverse their choice to reveal the total hop count.",
    features: [
      "Three randomly generated paths with visual feedback",
      "Real-time rabbit animations hopping along routes",
      "Celebration effects when optimal path is chosen",
      "Cross-platform support (desktop, tablet, mobile)",
      "Dark-themed interface with glowing visual elements",
      "No installation needed - runs directly in browser",
    ],
    techStack: ["JavaScript ES6+", "HTML5", "CSS3", "Flexbox", "CSS Grid", "CSS Animations"],
    category: "frontend",
    repoUrl: "https://github.com/gal1aoui/Find-the-short-path_JS-Game_",
    gradient: "from-indigo-500 to-blue-600",
  },
];

export const categoryLabels: Record<Project["category"], string> = {
  fullstack: "Full Stack",
  backend: "Backend",
  frontend: "Frontend",
  library: "Library",
  devops: "DevOps",
};

export const categoryColors: Record<Project["category"], string> = {
  fullstack: "primary",
  backend: "danger",
  frontend: "secondary",
  library: "success",
  devops: "warning",
};
