import { type AppLanguage } from "@/i18n/settings";

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

type LocalizedProjectContent = Pick<
  Project,
  "title" | "shortDescription" | "fullDescription" | "features"
>;

type ProjectDefinition = Omit<Project, keyof LocalizedProjectContent>;

const projectDefinitions: ProjectDefinition[] = [
  {
    id: "ticket-management",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
      "Shadcn/ui",
      "Tailwind CSS",
      "Zod",
      "Resend",
      "Recharts",
      "Docker",
    ],
    category: "fullstack",
    repoUrl: "https://we-connectproject.vercel.app/",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "boudokhane-doors",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Material UI (MUI)",
      "Supabase",
      "PostgreSQL",
      "Emotion",
      "Vercel",
      "GitHub Actions",
    ],
    category: "fullstack",
    repoUrl: "https://door-shop-sigma.vercel.app/",
    gradient: "from-gray-600 to-stone-700",
  },
  {
    id: "angular-file-manager",
    techStack: [
      "Angular 19",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Tailwind CSS",
      "SCSS",
      "Spartan-NG",
      "Express.js",
      "Node.js",
      "REST API",
    ],
    category: "fullstack",
    repoUrl: "https://github.com/gal1aoui/front-technical-test",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "saas-directory-agent",
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
    id: "game-2048",
    techStack: ["JavaScript", "React", "CSS", "LocalStorage API"],
    category: "library",
    repoUrl: "https://github.com/gal1aoui/2048-Package",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    id: "nextjs-auth",
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
    repoUrl:
      "https://github.com/gal1aoui/Next.js-Supabase-Authentication-System",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "nestjs-auth",
    techStack: ["NestJS", "TypeScript", "Node.js", "JWT", "CircleCI", "AWS"],
    category: "backend",
    repoUrl: "https://github.com/gal1aoui/Nest.js-Authentication-System",
    gradient: "from-red-500 to-rose-600",
  },
  {
    id: "laravel-reminder",
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
    gradient: "from-orange-500 to-pink-500",
  },
  {
    id: "rabbit-run-game",
    techStack: [
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Flexbox",
      "CSS Grid",
      "CSS Animations",
    ],
    category: "frontend",
    repoUrl: "https://github.com/gal1aoui/Find-the-short-path_JS-Game_",
    gradient: "from-purple-500 to-indigo-500",
  },
];

const projectContentByLanguage: Record<
  AppLanguage,
  Record<string, LocalizedProjectContent>
> = {
  en: {
    "ticket-management": {
      title: "WeConnect Enterprise",
      shortDescription:
        "Enterprise-grade project management platform with Kanban, time tracking, collaboration, and real-time workflows.",
      fullDescription:
        "A comprehensive enterprise project management platform designed to streamline team collaboration, workflow organization, and productivity. Built with Next.js 16 and Supabase, the system goes beyond traditional ticketing by integrating Kanban boards, sprint management, time tracking, messaging, notifications, and role-based access control into a unified, real-time experience powered by modern frontend architecture and scalable backend services.",
      features: [
        "Advanced Kanban board with drag-and-drop and optimistic UI updates",
        "Full ticket management system with comments, priorities, and assignments",
        "Sprint management with progress tracking and burndown insights",
        "Integrated time tracking system with timer, reports, and cost calculation",
        "Real-time notifications and messaging system for team collaboration",
        "Role-Based Access Control (RBAC) with granular permissions",
        "Project member management with invitations and role assignment",
        "Interactive calendar with event scheduling and attendee management",
        "Repository integration for linking projects with version control",
        "Analytics dashboards with project KPIs and performance insights",
        "Email system with OTP authentication and automated notifications",
        "Scalable architecture using TanStack Query, service layer, and Supabase RLS",
        "For a demo view, login in with: admin@admin.com / a123456A",
      ],
    },
    "boudokhane-doors": {
      title: "Boudokhane Doors",
      shortDescription:
        "Full-featured e-commerce platform for custom door ordering with real-time tracking and admin management.",
      fullDescription:
        "A specialized e-commerce platform built for a door manufacturing business, enabling customers to browse products, place custom dimension-based orders, and track them in real time. The system includes a robust admin dashboard for managing products, orders, analytics, and inventory, powered by a secure Supabase backend with real-time capabilities.",
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
    },
    "game-2048": {
      title: "@agallaoui/game-2048",
      shortDescription:
        "Lightweight, responsive 2048 game package for React with local score persistence.",
      fullDescription:
        "A minimal and performant implementation of the classic 2048 game designed as an npm package. Built for React with a focus on simplicity, responsiveness, and zero external dependencies. Player names and scores are persisted using localStorage, with smooth gameplay on both desktop and mobile devices.",
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
      features: [
        "Three randomly generated paths with visual feedback",
        "Real-time rabbit animations hopping along routes",
        "Celebration effects when optimal path is chosen",
        "Cross-platform support (desktop, tablet, mobile)",
        "Dark-themed interface with glowing visual elements",
        "No installation needed - runs directly in browser",
      ],
    },
  },
  fr: {
    "ticket-management": {
      title: "WeConnect Enterprise",
      shortDescription:
        "Plateforme de gestion de projets de niveau entreprise avec Kanban, suivi du temps, collaboration et workflows en temps reel.",
      fullDescription:
        "Une plateforme complete de gestion de projets concue pour fluidifier la collaboration d'equipe, l'organisation du travail et la productivite. Construite avec Next.js 16 et Supabase, elle va bien au-dela du ticketing classique en reunissant tableaux Kanban, gestion des sprints, suivi du temps, messagerie, notifications et controle d'acces par roles dans une experience unifiee et temps reel.",
      features: [
        "Tableau Kanban avance avec glisser-deposer et mises a jour optimistes",
        "Systeme complet de tickets avec commentaires, priorites et assignations",
        "Gestion des sprints avec suivi de progression et indicateurs de burndown",
        "Module de suivi du temps avec minuteur, rapports et calcul des couts",
        "Notifications et messagerie en temps reel pour la collaboration d'equipe",
        "Controle d'acces par roles (RBAC) avec permissions granulaires",
        "Gestion des membres du projet avec invitations et attribution des roles",
        "Calendrier interactif avec planification d'evenements et gestion des participants",
        "Integration de depot pour relier les projets au controle de version",
        "Tableaux de bord analytiques avec KPIs et indicateurs de performance",
        "Systeme d'emails avec authentification OTP et notifications automatisees",
        "Architecture evolutive avec TanStack Query, couche de services et RLS Supabase",
        "Pour une demo, connectez-vous avec : admin@admin.com / a123456A",
      ],
    },
    "boudokhane-doors": {
      title: "Boudokhane Doors",
      shortDescription:
        "Plateforme e-commerce complete pour commander des portes sur mesure avec suivi en temps reel et administration avancee.",
      fullDescription:
        "Une plateforme e-commerce specialisee pour une entreprise de fabrication de portes, permettant aux clients de parcourir les produits, passer des commandes sur mesure selon les dimensions et suivre leur progression en temps reel. Le systeme inclut un tableau de bord d'administration solide pour les produits, commandes, analyses et inventaire.",
      features: [
        "Commande de produits sur mesure avec tarification dynamique selon les dimensions",
        "Suivi des commandes en temps reel via des jetons uniques",
        "Tableau de bord d'administration pour produits, commandes et analyses",
        "Systeme complet CRUD pour produits et categories",
        "Gestion du cycle de vie des commandes avec statuts multi-etapes",
        "Authentification securisee et acces par roles avec Supabase Auth",
        "Row Level Security (RLS) pour une protection fine des donnees",
        "Interface responsive optimisee mobile, tablette et desktop",
        "Gestion des images pour les galeries produits",
        "Mises a jour en temps reel avec les subscriptions PostgreSQL",
      ],
    },
    "angular-file-manager": {
      title: "Angular File Manager",
      shortDescription:
        "Systeme moderne de gestion de fichiers full stack avec upload glisser-deposer et etat temps reel.",
      fullDescription:
        "Une application full stack de gestion de fichiers construite avec Angular 19, concue pour gerer des operations complexes sur les fichiers et dossiers au sein d'une structure hierarchique. Realise dans le cadre d'un test technique, le projet met en avant une architecture frontend avancee avec NgRx, RxJS et une approche modulaire par composants.",
      features: [
        "Navigation hierarchique des fichiers et dossiers avec breadcrumb",
        "Upload glisser-deposer et multi-fichiers",
        "Operations CRUD completes pour fichiers et dossiers",
        "Telechargement des fichiers via l'integration native du navigateur",
        "Gestion d'etat avancee avec NgRx (actions, reducers, effects)",
        "Mises a jour UI en temps reel avec RxJS",
        "Deplacement et renommage avec detection des conflits",
        "Notifications toast et gestion robuste des erreurs",
        "Interface responsive avec architecture de composants reutilisables",
        "Integration d'une bibliotheque UI personnalisee (Spartan-NG)",
      ],
    },
    "saas-directory-agent": {
      title: "SaaS Directory Agent",
      shortDescription:
        "Systeme d'automatisation pilote par IA pour soumettre des produits SaaS a plusieurs annuaires simultanement.",
      fullDescription:
        "Un systeme d'automatisation concu pour accelerer la soumission de produits SaaS a plusieurs annuaires business en parallele. La plateforme s'appuie sur une automatisation cloud et de l'IA pour traiter des formulaires complexes qui demanderaient sinon beaucoup de travail manuel.",
      features: [
        "Detection et remplissage de formulaires via IA sur des interfaces variees",
        "Automatisation navigateur dans le cloud sans infrastructure locale",
        "Soumission en lot sur plusieurs annuaires en parallele",
        "Gestion des credentials pour les annuaires proteges",
        "Navigation multi-etapes pour les workflows de soumission complexes",
        "Recuperation automatique sur erreur avec mecanismes de retry",
        "Tableau de bord visuel pour suivre les resultats des soumissions",
      ],
    },
    "dnd-core": {
      title: "@agal1aoui/dnd",
      shortDescription:
        "Bibliotheque drag and drop haute performance et agnostique au framework pour React et Angular.",
      fullDescription:
        "Une bibliotheque legere de drag and drop qui elimine les goulets d'etranglement frequents dans les outils similaires. Elle evite les rerenders pendant le drag grace aux refs, a la manipulation directe du DOM et a des animations accelerees GPU.",
      features: [
        "Zero rerender pendant le drag grace aux refs et au DOM direct",
        "Animations accelerees GPU via les transforms translate3d()",
        "Bounding boxes calculees une seule fois au demarrage du drag",
        "Pointer capture API pour un suivi fiable des evenements",
        "Moteur core TypeScript agnostique au framework",
        "Styling par data-attributes compatible TailwindCSS",
        "Support des tableaux Kanban multi-colonnes",
      ],
    },
    "game-2048": {
      title: "@agallaoui/game-2048",
      shortDescription:
        "Package 2048 leger et responsive pour React avec persistance locale du score.",
      fullDescription:
        "Une implementation minimaliste et performante du jeu 2048 publiee comme package npm. Concu pour React avec un accent sur la simplicite, la responsivite et zero dependance externe. Les noms des joueurs et les scores sont conserves dans localStorage.",
      features: [
        "Logique de jeu 2048 classique",
        "Saisie du nom du joueur avant de commencer",
        "Score et nom du joueur persistants dans localStorage",
        "Modal de victoire a 2048 avec option pour continuer",
        "Layout totalement responsive sur desktop et mobile",
        "Bundle leger sans dependance externe",
        "Integration React simple en plug-and-play",
      ],
    },
    "nextjs-auth": {
      title: "Next.js Auth System",
      shortDescription:
        "Framework moderne d'authentification avec verification OTP par email et beaux templates d'emails.",
      fullDescription:
        "Un framework d'authentification moderne combinant Next.js 16, Supabase, Shadcn UI et TypeScript, avec un fort accent sur l'architecture propre et l'accessibilite. Il inclut des emails soignes construits avec React-Email.",
      features: [
        "Workflows d'authentification complets (connexion, inscription, recuperation)",
        "Verification par email avec codes OTP a 6 chiffres via Resend",
        "Emails soignes construits avec React-Email",
        "Protection des routes via middleware",
        "Validation type-safe avec Zod",
        "Routage centralise via app/routes.ts",
        "Composants responsives conformes WCAG",
      ],
    },
    "nestjs-auth": {
      title: "Nest.js Auth System",
      shortDescription:
        "Systeme d'authentification backend evolutif construit avec NestJS et TypeScript.",
      fullDescription:
        "Un systeme backend d'authentification base sur NestJS, pense pour construire des applications serveur efficaces et evolutives. Il inclut une authentification JWT, une suite de tests complete et une configuration de deploiement prete pour la production.",
      features: [
        "Systeme d'authentification base sur JWT",
        "Architecture de framework progressive",
        "Tests complets (unitaires, e2e, couverture)",
        "Outils de visualisation applicative en temps reel",
        "Support du deploiement AWS",
        "Integration continue avec CircleCI",
        "NestJS Devtools pour la supervision",
      ],
    },
    "laravel-reminder": {
      title: "Laravel Reminder App",
      shortDescription:
        "Application de rappels full stack avec notifications navigateur, construite avec Laravel, React et Docker.",
      fullDescription:
        "Une application web full stack pour gerer des rappels avec notifications navigateur. Construite avec Laravel 12, React, TypeScript, Inertia.js, Docker et MySQL, elle illustre des pratiques modernes de developpement dans un environnement conteneurise.",
      features: [
        "Authentification utilisateur (inscription, connexion, deconnexion)",
        "CRUD complet pour les rappels",
        "Planification avec dates et heures personnalisees",
        "Systeme de notifications dans le navigateur",
        "Securite de type complete avec TypeScript",
        "Conteneurisation Docker (Laravel, MySQL, Nginx)",
        "Securite : CSRF, bcrypt, prevention de l'injection SQL",
      ],
    },
    "rabbit-run-game": {
      title: "Rabbit Run Game",
      shortDescription:
        "Jeu de reflexion dans lequel le joueur aide un lapin a trouver le chemin le plus court vers une carotte.",
      fullDescription:
        "Un jeu de puzzle amusant dans lequel le joueur aide un lapin a trouver le chemin le plus court vers une carotte parmi trois options generees aleatoirement. Le joueur observe les chemins, choisit celui qui lui semble le plus court, puis voit le lapin le parcourir pour reveler le nombre de sauts.",
      features: [
        "Trois chemins generes aleatoirement avec retour visuel",
        "Animations du lapin en temps reel sur les parcours",
        "Effets de celebration lorsque le meilleur chemin est choisi",
        "Support cross-platform (desktop, tablette, mobile)",
        "Interface sombre avec effets visuels lumineux",
        "Aucune installation necessaire, execution directe dans le navigateur",
      ],
    },
  },
};

export function getProjects(language: AppLanguage): Project[] {
  const localizedProjects = projectContentByLanguage[language];

  return projectDefinitions.map((project) => ({
    ...project,
    ...localizedProjects[project.id],
  }));
}

export function getProjectById(language: AppLanguage, id: string) {
  return getProjects(language).find((project) => project.id === id);
}

export const categoryColors: Record<Project["category"], string> = {
  fullstack: "primary",
  backend: "danger",
  frontend: "secondary",
  library: "success",
  devops: "warning",
};
