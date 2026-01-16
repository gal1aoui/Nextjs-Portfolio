import { SkillCategory } from "./type";
import {
  AngularIcon,
  CICDIcon,
  DockerIcon,
  DotNetIcon,
  ExpressIcon,
  FigmaIcon,
  GitIcon,
  GitLabIcon,
  GraphqlIcon,
  JestIcon,
  JiraIcon,
  KanbanIcon,
  LaravelIcon,
  MaterialUiIcon,
  MochaIcon,
  MongoDBIcon,
  MySQLIcon,
  NestIcon,
  NextJsIcon,
  NodeIcon,
  PostgreIcon,
  PostmanIcon,
  ReactIcon,
  RestAPIIcon,
  RobotFrameworkIcon,
  ScrumIcon,
  ShadcnUiIcon,
  SpartanNgIcon,
  SQLiteIcon,
  SupabaseIcon,
  SymfonyIcon,
  TailwindCssIcon,
  TanStackIcon,
  TypeScriptIcon,
  UMLIcon,
  ZodIcon,
  ZustandIcon,
} from "./icons";
import { GithubIcon } from "../icons";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Modern UI development, scalable component systems, and high-performance web applications.",
    skills: [
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
          "Popular React component library implementing Google’s Material Design system.",
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
    ],
  },

  {
    id: "backend",
    title: "Backend",
    summary:
      "Server-side development, APIs, authentication, business logic, and scalable architectures.",
    skills: [
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
    ],
  },

  {
    id: "databases",
    title: "Databases",
    summary:
      "Relational and NoSQL databases, data modeling, querying, and performance optimization.",
    skills: [
      {
        id: "mysql",
        name: "MySQL",
        description:
          "Relational database for structured data, transactions, and optimized queries.",
        icon: MySQLIcon,
      },
      {
        id: "mongodb",
        name: "MongoDB",
        description:
          "NoSQL document database designed for flexibility and horizontal scalability.",
        icon: MongoDBIcon,
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        description:
          "Advanced relational database with strong consistency and complex querying support.",
        icon: PostgreIcon,
      },
      {
        id: "sqlite",
        name: "SQLite",
        description:
          "Lightweight embedded database suited for local storage and small applications.",
        icon: SQLiteIcon,
      },
    ],
  },

  {
    id: "devops",
    title: "DevOps & Tools",
    summary:
      "Containerization, version control, CI/CD pipelines, and deployment workflows.",
    skills: [
      {
        id: "docker",
        name: "Docker",
        description:
          "Containerization platform for consistent development and production environments.",
        icon: DockerIcon,
      },
      {
        id: "git",
        name: "Git",
        description:
          "Distributed version control system for tracking code changes and collaboration.",
        icon: GitIcon,
      },
      {
        id: "gitlab",
        name: "GitLab",
        description:
          "DevOps platform providing repositories, CI/CD pipelines, and project management.",
        icon: GitLabIcon,
      },
      {
        id: "github",
        name: "GitHub",
        description:
          "Code hosting platform for collaboration, version control, and automation.",
        icon: GithubIcon,
      },
      {
        id: "ci/cd",
        name: "CI/CD",
        description:
          "Automated pipelines for testing, building, and deploying applications.",
        icon: CICDIcon,
      },
    ],
  },

  {
    id: "testing",
    title: "Testing",
    summary:
      "Automated testing, API validation, and quality assurance for reliable systems.",
    skills: [
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
    ],
  },

  {
    id: "api",
    title: "API Design & Conception",
    summary:
      "Designing, modeling, and documenting APIs with clear standards and contracts.",
    skills: [
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
      }
    ],
  },

  {
    id: "collaboration",
    title: "Collaboration & Design",
    summary:
      "Agile collaboration, task management, and design-to-development workflows.",
    skills: [
      {
        id: "figma",
        name: "Figma",
        description:
          "Collaborative design tool for UI/UX prototyping and handoff.",
        icon: FigmaIcon
      },
      {
        id: "jira",
        name: "Jira",
        description:
          "Project management tool for agile planning and issue tracking.",
        icon: JiraIcon
      },
      {
        id: "scrum",
        name: "Agile/Scrum",
        description:
          "Iterative development framework focused on collaboration and continuous delivery.",
        icon: ScrumIcon
      },
      {
        id: "kanban",
        name: "Kanban",
        description:
          "Workflow management method for visualizing tasks and optimizing flow.",
        icon: KanbanIcon
      },
    ],
  },
];
