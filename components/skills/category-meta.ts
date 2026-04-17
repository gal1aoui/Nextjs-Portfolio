export const skillCategoryMeta = [
  {
    id: "frontend",
    title: "Frontend",
    summary:
      "Modern UI development, scalable component systems, and high-performance web applications.",
    count: 11,
  },
  {
    id: "backend",
    title: "Backend",
    summary:
      "Server-side development, APIs, authentication, business logic, and scalable architectures.",
    count: 7,
  },
  {
    id: "databases",
    title: "Databases",
    summary:
      "Relational and NoSQL databases, data modeling, querying, and performance optimization.",
    count: 4,
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    summary:
      "Containerization, version control, CI/CD pipelines, and deployment workflows.",
    count: 5,
  },
  {
    id: "testing",
    title: "Testing",
    summary:
      "Automated testing, API validation, and quality assurance for reliable systems.",
    count: 4,
  },
  {
    id: "api",
    title: "API Design & Conception",
    summary:
      "Designing, modeling, and documenting APIs with clear standards and contracts.",
    count: 3,
  },
  {
    id: "collaboration",
    title: "Collaboration & Design",
    summary:
      "Agile collaboration, task management, and design-to-development workflows.",
    count: 4,
  },
] as const;

export type SkillCategoryId = (typeof skillCategoryMeta)[number]["id"];
