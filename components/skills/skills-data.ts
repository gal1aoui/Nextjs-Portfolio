export const skillCategoryIds = [
  "frontend",
  "backend",
  "databases",
  "devops",
  "testing",
  "api",
  "collaboration",
] as const;

export type SkillCategoryId = (typeof skillCategoryIds)[number];

export interface SkillEntry {
  id: string;
  name: string;
  /** Key of the skill description inside the "skills" i18n namespace. */
  translationKey: string;
}

/**
 * Single source of truth for skill names per category. Pure data — safe to
 * import server-side (QA knowledge base) and client-side (category panels,
 * modern experience). Icons are attached by the consuming components.
 */
export const skillsData: Record<SkillCategoryId, SkillEntry[]> = {
  frontend: [
    { id: "react", name: "React", translationKey: "items.react" },
    { id: "nextjs", name: "Next.js", translationKey: "items.nextjs" },
    {
      id: "typescript",
      name: "TypeScript",
      translationKey: "items.typescript",
    },
    { id: "angular", name: "Angular", translationKey: "items.angular" },
    { id: "spartan-ng", name: "Spartan NG", translationKey: "items.spartanng" },
    { id: "tailwind", name: "Tailwind CSS", translationKey: "items.tailwind" },
    { id: "shadcn", name: "shadcn/ui", translationKey: "items.shadcn" },
    {
      id: "material-ui",
      name: "Material UI",
      translationKey: "items.materialui",
    },
    { id: "tanstack", name: "TanStack", translationKey: "items.tanstack" },
    { id: "zod", name: "Zod", translationKey: "items.zod" },
    { id: "zustand", name: "Zustand", translationKey: "items.zustand" },
  ],
  backend: [
    { id: "laravel", name: "Laravel", translationKey: "items.laravel" },
    { id: "symfony", name: "Symfony", translationKey: "items.symfony" },
    { id: "supabase", name: "Supabase", translationKey: "items.supabase" },
    { id: "node.js", name: "Node.js", translationKey: "items.nodejs" },
    { id: "express.js", name: "Express.js", translationKey: "items.expressjs" },
    { id: "nest.js", name: "Nest.js", translationKey: "items.nestjs" },
    { id: ".net", name: ".NET", translationKey: "items.dotnet" },
  ],
  databases: [
    { id: "mysql", name: "MySQL", translationKey: "items.mysql" },
    { id: "mongodb", name: "MongoDB", translationKey: "items.mongodb" },
    {
      id: "postgresql",
      name: "PostgreSQL",
      translationKey: "items.postgresql",
    },
    { id: "sqlite", name: "SQLite", translationKey: "items.sqlite" },
  ],
  devops: [
    { id: "docker", name: "Docker", translationKey: "items.docker" },
    { id: "git", name: "Git", translationKey: "items.git" },
    { id: "gitlab", name: "GitLab", translationKey: "items.gitlab" },
    { id: "github", name: "GitHub", translationKey: "items.github" },
    { id: "ci/cd", name: "CI/CD", translationKey: "items.cicd" },
  ],
  testing: [
    { id: "robot", name: "Robot Framework", translationKey: "items.robot" },
    { id: "postman", name: "Postman", translationKey: "items.postman" },
    { id: "jest", name: "Jest.js", translationKey: "items.jest" },
    { id: "mocha", name: "Mocha", translationKey: "items.mocha" },
  ],
  api: [
    { id: "graphql", name: "GraphQL", translationKey: "items.graphql" },
    { id: "restapi", name: "REST API", translationKey: "items.restapi" },
    { id: "uml", name: "UML", translationKey: "items.uml" },
  ],
  collaboration: [
    { id: "figma", name: "Figma", translationKey: "items.figma" },
    { id: "jira", name: "Jira", translationKey: "items.jira" },
    { id: "scrum", name: "Agile/Scrum", translationKey: "items.scrum" },
    { id: "kanban", name: "Kanban", translationKey: "items.kanban" },
  ],
};

export const getSkillCount = (categoryId: SkillCategoryId) =>
  skillsData[categoryId].length;

export const getTotalSkillCount = () =>
  Object.values(skillsData).reduce(
    (total, entries) => total + entries.length,
    0,
  );
