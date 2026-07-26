import { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";

import ProjectsPage from "@/components/projects/projects-page";
import { getProjects } from "@/components/projects/data";
import { buildLanguageAlternates } from "@/i18n/routing";
import { getTranslator } from "@/i18n/server";
import { isLanguage } from "@/i18n/settings";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lng: string }>;
}): Promise<Metadata> {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    return {};
  }

  const { t } = await getTranslator(lng, "seo");

  return {
    title: t("seo:pages.projects.title") as string,
    description: t("seo:pages.projects.description") as string,
    alternates: buildLanguageAlternates(lng, "/projects"),
  };
}

export default async function ProjectsRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return (
    <Suspense>
      <ProjectsPage projects={getProjects(lng)} />
    </Suspense>
  );
}
