import { Metadata } from "next";
import { notFound } from "next/navigation";

import ExperiencePage from "@/components/experience/experience-page";
import { getExperiences } from "@/components/experience/experience-data";
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
    title: t("seo:pages.experience.title") as string,
    description: t("seo:pages.experience.description") as string,
    alternates: buildLanguageAlternates(lng, "/experience"),
  };
}

export default async function ExperienceRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return <ExperiencePage experiences={getExperiences(lng)} />;
}
