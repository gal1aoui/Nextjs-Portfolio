import { notFound } from "next/navigation";

import ProjectsPage from "@/components/projects/projects-page";
import { getProjects } from "@/components/projects/projects-data";
import { isLanguage } from "@/i18n/settings";

export default async function ProjectsRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return <ProjectsPage projects={getProjects(lng)} />;
}
