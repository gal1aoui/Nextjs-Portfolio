import { Metadata } from "next";
import { notFound } from "next/navigation";

import SkillsPage from "@/components/skills/skills-page";
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
    title: t("seo:pages.skills.title") as string,
    description: t("seo:pages.skills.description") as string,
    alternates: buildLanguageAlternates(lng, "/skills"),
  };
}

export default async function SkillsRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return <SkillsPage />;
}
