import type { AppLanguage } from "@/i18n/settings";

import { projectContentEn } from "./content.en";
import { projectContentFr } from "./content.fr";
import { projectDefinitions } from "./definitions";
import {
  projectIds,
  type LocalizedProjectContent,
  type Project,
  type ProjectId,
} from "./types";

const projectContentByLanguage: Record<
  AppLanguage,
  Record<ProjectId, LocalizedProjectContent>
> = {
  en: projectContentEn,
  fr: projectContentFr,
};

export function getProjects(language: AppLanguage): Project[] {
  const localizedProjects = projectContentByLanguage[language];

  return projectDefinitions.map((project) => ({
    ...project,
    ...localizedProjects[project.id],
  }));
}

export function getProjectById(
  language: AppLanguage,
  id: string,
): Project | undefined {
  const definition = projectDefinitions.find((project) => project.id === id);

  if (!definition) return undefined;

  return {
    ...definition,
    ...projectContentByLanguage[language][definition.id],
  };
}

export function getProjectIds(): readonly ProjectId[] {
  return projectIds;
}

export { projectDefinitions } from "./definitions";
export {
  categoryColors,
  projectIds,
  statusColors,
  type LocalizedProjectContent,
  type Project,
  type ProjectCategory,
  type ProjectDefinition,
  type ProjectId,
  type ProjectImages,
  type ProjectStatus,
  type ProjectType,
} from "./types";
