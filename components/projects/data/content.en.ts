import type { LocalizedProjectContent, ProjectId } from "./types";

export const projectContentEn: Record<ProjectId, LocalizedProjectContent> = {
  "ticket-management": {
    title: "Octopora",
    shortDescription:
      "An AI-assisted workspace connecting projects, tickets, sprints, communication, meetings, code, and time in one operational system.",
    fullDescription:
      "Octopora is a unified, AI-assisted workspace built for growing teams that need to replace fragmented project and collaboration tools. Its eleven connected modules bring projects, tickets, sprints, issues, calendars, messaging, help desk, native calls, time tracking, team management, and repository workflows into one shared operational record. Helpi AI understands that workspace context and prepares structured actions such as tickets, meetings, and issues, while coding agents connect delivery work directly to repositories, branches, logs, and commits.",
    role: "Founder & solo full-stack developer",
    highlights: [
      "11 connected modules in one workspace",
      "Helpi AI drafts tickets, meetings & issues",
      "Native WebRTC calls & real-time messaging",
      "Bilingual EN/FR on Supabase RLS",
    ],
    features: [
      "Connected projects, Kanban boards, milestones, ownership, and project health",
      "Markdown-first tickets with priorities, dependencies, comments, and full history",
      "Sprint planning, backlog refinement, progress tracking, and burndown insights",
      "Helpi AI action layer for drafting tickets, scheduling meetings, and reporting issues",
      "Repository workflows linking issues, branches, commits, pull requests, and coding agents",
      "Real-time channels, direct messages, help desk workflows, and native WebRTC calls",
      "Unified personal and project calendars with Google Calendar synchronization",
      "Built-in time tracking with live timers and personal or project breakdowns",
      "Team roles, granular permissions, project access, invitations, and workload visibility",
      "Live dashboards for milestones, delivery risks, notifications, and team activity",
      "Bilingual English and French experience backed by Supabase RLS and real-time data",
      "Public pre-filled demo available from octopora.com",
    ],
  },
  "9hiwa": {
    title: "9hiwa",
    shortDescription:
      "A Tunisian card-game platform that brings Chkobba, Rami, and Belote online through a premium identity inspired by coffeehouse culture.",
    fullDescription:
      "9hiwa is a real-time card-game experience built around Tunisian identity, social play, and the familiar atmosphere of gathering over coffee. The platform digitizes three locally loved games, Chkobba, Rami and Tunisian Belote, while preserving regional rules, expressions, visual references and table culture. Its scalable multiplayer foundation uses Supabase Realtime to synchronize rooms, turns, cards, scores, and player presence across devices.",
    role: "Solo full-stack developer & product designer",
    highlights: [
      "3 Tunisian card games on one platform",
      "Real-time multiplayer via Supabase Realtime",
      "Fully custom deck, figures & sound design",
      "Mobile-first social play",
    ],
    features: [
      "Three Tunisian games in one platform: Chkobba, Rami, and Belote",
      "Real-time multiplayer rooms with synchronized turns, cards, and scores",
      "Tunisian-specific rules and configurable variants for each game",
      "Premium visual identity inspired by Tunisian coffeehouses and Amazigh motifs",
      "Custom Tunisian playing cards, court figures, game banners, and sound design",
      "Player presence, reconnect handling, and resilient multiplayer state",
      "Responsive experience designed for mobile-first social play",
      "Modern data layer using Supabase Realtime and TanStack Query",
    ],
  },
  "solarix-pro": {
    title: "SolarixPro",
    shortDescription:
      "A complete solar-operations platform combining CRM, field execution, project workflows, documents, and performance tracking.",
    fullDescription:
      "SolarixPro is a client platform designed to manage the full operational lifecycle of a solar-energy business. It connects commercial prospecting, customer records, installation projects, regulatory follow-up, business objectives, and document generation with a companion mobile application for field teams. I developed the Express and Prisma backend, the React web interface, and the React Native Expo application, then containerized and deployed the system to a VPS behind Nginx.",
    role: "Solo developer for backend, web, mobile and deployment",
    highlights: [
      "One typed API serving web + mobile",
      "Full lifecycle: CRM → installation → compliance",
      "Expo app for field technicians",
      "Dockerized VPS deployment behind Nginx",
    ],
    features: [
      "CRM for leads, customers, opportunities, and commercial follow-up",
      "End-to-end solar project and installation workflow management",
      "Commercial document generation and centralized customer records",
      "Regulatory and administrative follow-up for solar projects",
      "Business objectives, team performance, and operational dashboards",
      "React Native Expo application for technicians and field operations",
      "Typed REST API built with Express, Prisma, and PostgreSQL",
      "Dockerized production deployment on a VPS with Nginx reverse proxy",
    ],
  },
  "ngs-partners": {
    title: "NGS Partners",
    shortDescription:
      "A conversion-focused corporate website for a Swiss consultancy specializing in automotive sales, fleet management, and commercial performance.",
    fullDescription:
      "NGS Partners is a responsive corporate website created for a consulting client based in Nyon, Switzerland. The site presents four core areas of expertise (automotive dealerships, outsourced fleet management, business development and sales coaching) through clear service journeys, local-market positioning and direct consultation calls to action. The content architecture also supports thought leadership through field notes and dedicated pages for French-speaking Switzerland and France.",
    role: "Freelance web developer",
    highlights: [
      "4 expertise areas with dedicated journeys",
      "Local SEO across Romandie & France",
      "Consultation-driven lead-generation flow",
    ],
    features: [
      "Service architecture for automotive dealerships and commercial teams",
      "Dedicated outsourced fleet-management journey covering contracts, TCO, and reporting",
      "Business-development, sales training, and coaching landing pages",
      "Founder profile, consultancy positioning, and trust-building content",
      "Lead-generation contact flow with consultation-focused calls to action",
      "Blog and field notes supporting expertise and organic discovery",
      "Responsive navigation and layouts optimized for mobile and desktop",
      "Local SEO targeting Nyon, Geneva, Lausanne, French-speaking Switzerland, and France",
    ],
  },
  assistromande: {
    title: "AssistRomande",
    shortDescription:
      "A service website helping Swiss SMEs, craftspeople, and independent professionals outsource their administrative back office.",
    fullDescription:
      "AssistRomande is a lead-generation website developed for a Swiss client offering outsourced administrative assistance across French-speaking Switzerland. It turns a broad service offer (email management, invoices, quotations, scheduling, reminders, document organization and telephone reception) into a clear customer journey. The website emphasizes rapid onboarding, transparent packages, confidentiality, multilingual support, and locally targeted pages for major Swiss regions.",
    role: "Freelance web developer",
    highlights: [
      "Local landing pages for 5 Swiss regions",
      "Guided free-diagnostic lead form",
      "Support in French, English & Arabic",
    ],
    features: [
      "Clear service presentation for administrative and operational support",
      "Guided lead form for a free diagnostic and personalized estimate",
      "Dedicated pages for services, common client challenges, packages, and pricing",
      "Case studies, testimonials, FAQs, and trust-building conversion content",
      "Local landing pages for Geneva, Lausanne, Nyon, Fribourg, and Valais",
      "Confidentiality, NDA, response-time, and onboarding assurances",
      "French, English, and Arabic support highlighted throughout the journey",
      "Responsive, SEO-oriented interface for Swiss SMEs and independent professionals",
    ],
  },
  menumate: {
    title: "MenuMate",
    shortDescription:
      "A restaurant SaaS for branded QR menus, real-time ordering, menu management, staff access, and multiple locations.",
    fullDescription:
      "MenuMate helps restaurants and cafés launch a branded digital menu and start receiving customer orders without requiring an app. Businesses can create menu categories and items, update pricing or availability instantly, generate table QR codes, manage dine-in and delivery requests, and operate multiple locations from one account. The platform combines a public mobile menu with an operational dashboard designed to modernize service while keeping setup simple for non-technical owners.",
    role: "Founder & solo full-stack developer",
    highlights: [
      "QR ordering with zero app download",
      "Multi-location management from one account",
      "Instant menu, price & availability updates",
      "Real-time order notifications",
    ],
    features: [
      "Branded public menu with a dedicated restaurant URL and generated QR codes",
      "Dine-in table orders and delivery requests submitted from customer phones",
      "Real-time order notifications and order-status management",
      "Instant updates for dishes, photos, prices, categories, and availability",
      "Staff roles, permissions, and multi-location restaurant management",
      "Custom branding, colors, themes, and responsive menu presentation",
      "Customer ratings and reviews for individual menu items",
      "PDF menu export and table-specific QR code generation",
      "Mobile-first experience requiring no customer application download",
    ],
  },
  "boudokhane-doors": {
    title: "Boudokhane Doors",
    shortDescription:
      "Full-featured e-commerce platform for custom door ordering with real-time tracking and admin management.",
    fullDescription:
      "A specialized e-commerce platform built for a door manufacturing business, enabling customers to browse products, place custom dimension-based orders, and track them in real time. The system includes a robust admin dashboard for managing products, orders, analytics, and inventory, powered by a secure Supabase backend with real-time capabilities.",
    role: "Freelance full-stack developer",
    highlights: [
      "Dynamic dimension-based pricing",
      "Token-based real-time order tracking",
      "Admin dashboard: products, orders, analytics",
      "Supabase Auth + Row Level Security",
    ],
    features: [
      "Custom product ordering with dynamic dimension-based pricing",
      "Real-time order tracking using unique tracking tokens",
      "Comprehensive admin dashboard for products, orders, and analytics",
      "Full CRUD product and category management system",
      "Order lifecycle management with multi-stage status tracking",
      "Secure authentication and role-based access via Supabase Auth",
      "Row Level Security (RLS) for fine-grained data protection",
      "Responsive UI optimized for mobile, tablet, and desktop",
      "Image management system for product galleries",
      "Real-time updates using PostgreSQL subscriptions",
    ],
  },
  "angular-file-manager": {
    title: "Angular File Manager",
    shortDescription:
      "Modern full-stack file management system with drag-and-drop uploads and real-time state management.",
    fullDescription:
      "A full-stack file management application built with Angular 19, designed to handle complex file and folder operations within a hierarchical structure. Developed as a technical assessment, the project demonstrates advanced frontend architecture using NgRx for state management, reactive programming with RxJS, and a modular component-driven design. It includes a mock backend powered by Express for handling file storage and RESTful operations.",
    role: "Solo developer (technical assessment)",
    highlights: [
      "Full NgRx layer: actions, reducers, effects",
      "Drag-and-drop multi-file uploads",
      "Move & rename with conflict detection",
    ],
    features: [
      "Hierarchical file and folder navigation with breadcrumb support",
      "Drag-and-drop and multi-file upload capabilities",
      "Full CRUD operations for files and folders",
      "File download handling with native browser integration",
      "Advanced state management using NgRx (actions, reducers, effects)",
      "Real-time UI updates with reactive programming (RxJS)",
      "Move and rename operations with conflict detection",
      "Toast notifications and robust error handling system",
      "Responsive UI with reusable component architecture",
      "Custom UI component library integration (Spartan-NG)",
    ],
  },
  "saas-directory-agent": {
    title: "SaaS Directory Agent",
    shortDescription:
      "AI-powered automation system for submitting SaaS products to multiple directories simultaneously.",
    fullDescription:
      "An automation system designed to streamline the process of submitting SaaS products to multiple business directories simultaneously. The platform uses cloud-based AI to handle complex form interactions that would otherwise require extensive manual labor.",
    role: "Solo full-stack developer",
    highlights: [
      "AI form detection across varied directories",
      "Parallel batch submissions",
      "Automatic retry & error recovery",
    ],
    features: [
      "AI-driven form detection and completion across varied directory interfaces",
      "Cloud-based browser automation eliminating local infrastructure needs",
      "Batch submission capabilities for multiple directories in parallel",
      "Credential management for password-protected directory access",
      "Multi-stage form navigation for intricate submission workflows",
      "Built-in error recovery with automatic retry mechanisms",
      "Visual dashboard for monitoring submission outcomes",
    ],
  },
  "dnd-core": {
    title: "@agallaoui/dnd-core",
    shortDescription:
      "High-performance, framework-agnostic drag and drop library for React and Angular.",
    fullDescription:
      "A lightweight drag and drop library that eliminates performance bottlenecks common in similar tools. Zero re-renders during drag operations using refs and direct DOM manipulation with GPU-accelerated animations.",
    role: "Author & maintainer",
    highlights: [
      "Zero re-renders during drag",
      "GPU-accelerated translate3d animations",
      "One TypeScript core, React & Angular adapters",
    ],
    features: [
      "Zero re-renders during drag operations using refs and direct DOM",
      "GPU-accelerated animations via translate3d() transforms",
      "Bounding boxes calculated once at drag initiation",
      "Pointer capture API for reliable event tracking",
      "Framework-agnostic TypeScript core engine",
      "CSS data-attribute styling compatible with TailwindCSS",
      "Multi-column Kanban board support",
    ],
  },
  "game-2048": {
    title: "@agallaoui/game-2048",
    shortDescription:
      "Lightweight, responsive 2048 game package for React with local score persistence.",
    fullDescription:
      "A minimal and performant implementation of the classic 2048 game designed as an npm package. Built for React with a focus on simplicity, responsiveness, and zero external dependencies. Player names and scores are persisted using localStorage, with smooth gameplay on both desktop and mobile devices.",
    role: "Author & maintainer",
    highlights: [
      "Published npm package",
      "Zero external dependencies",
      "Playable inside this very portfolio",
    ],
    features: [
      "Classic 2048 gameplay logic",
      "Player name input before starting the game",
      "Score and player name persisted in localStorage",
      "Win modal displayed when reaching 2048 with continue option",
      "Fully responsive layout (desktop & mobile)",
      "Lightweight bundle with no external dependencies",
      "Easy plug-and-play React integration",
    ],
  },
  "nextjs-auth": {
    title: "Next.js Auth System",
    shortDescription:
      "Modern authentication framework with email OTP verification and beautiful email templates.",
    fullDescription:
      "A contemporary authentication framework combining Next.js 16, Supabase, Shadcn UI, and TypeScript with emphasis on clean architecture and accessible interfaces. Features beautiful emails built with React-Email.",
    role: "Author",
    highlights: [
      "6-digit OTP email verification via Resend",
      "React-Email transactional templates",
      "Middleware-protected, Zod-validated routes",
    ],
    features: [
      "Complete authentication workflows (login, signup, password recovery)",
      "Email verification via 6-digit OTP codes using Resend",
      "Beautiful emails built with React-Email",
      "Middleware-based protection for routes",
      "Type-safe validation through Zod",
      "Centralized routing with app/routes.ts",
      "WCAG-compliant responsive components",
    ],
  },
  "nestjs-auth": {
    title: "Nest.js Auth System",
    shortDescription:
      "Scalable backend authentication system built with NestJS and TypeScript.",
    fullDescription:
      "A progressive Node.js framework for building efficient and scalable server-side applications. Features comprehensive authentication with JWT, complete testing suite, and production-ready deployment configuration.",
    role: "Author",
    highlights: [
      "JWT auth with unit + e2e test coverage",
      "CircleCI pipeline with AWS deployment",
    ],
    features: [
      "JWT-based authentication system",
      "Progressive framework architecture",
      "Comprehensive testing (unit, e2e, coverage)",
      "Real-time application visualization tools",
      "AWS deployment support",
      "CircleCI continuous integration",
      "NestJS Devtools for monitoring",
    ],
  },
  "laravel-reminder": {
    title: "Laravel Reminder App",
    shortDescription:
      "Full-stack reminder app with browser notifications, built with Laravel, React, and Docker.",
    fullDescription:
      "A full-stack web application for managing reminders with browser notifications. Built with Laravel 12, React, TypeScript, Inertia.js, Docker, and MySQL. Demonstrates modern web development practices using containerized services.",
    role: "Solo developer",
    highlights: [
      "3-service Docker stack: Laravel, MySQL, Nginx",
      "Browser notifications for due reminders",
      "Inertia.js monolith with typed React front end",
    ],
    features: [
      "User authentication (registration, login, logout)",
      "Complete reminder CRUD operations",
      "Scheduling with customizable due dates and times",
      "Browser-based notification system",
      "Full TypeScript type safety",
      "Docker containerization (Laravel, MySQL, Nginx)",
      "Security: CSRF, bcrypt, SQL injection prevention",
    ],
  },
  "rabbit-run-game": {
    title: "Rabbit Run Game",
    shortDescription:
      "A puzzle game where players help a rabbit find the shortest path to reach a carrot.",
    fullDescription:
      "A fun puzzle game where players help a rabbit locate the shortest path to reach a carrot among three randomly generated options. Players observe three distinct paths, select which they believe is shortest, then watch the rabbit traverse their choice to reveal the total hop count.",
    role: "Solo developer",
    highlights: [
      "Zero frameworks, just plain JS, HTML and CSS",
      "3 randomly generated paths per round",
      "Runs instantly in the browser",
    ],
    features: [
      "Three randomly generated paths with visual feedback",
      "Real-time rabbit animations hopping along routes",
      "Celebration effects when optimal path is chosen",
      "Cross-platform support (desktop, tablet, mobile)",
      "Dark-themed interface with glowing visual elements",
      "No installation needed - runs directly in browser",
    ],
  },
};
