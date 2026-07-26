import { Metadata } from "next";
import { notFound } from "next/navigation";

import ModernExperience from "@/components/modern/modern-experience";
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

  const { t } = await getTranslator(lng, "modern");

  return {
    title: t("modern:seo.title") as string,
    description: t("modern:seo.description") as string,
    alternates: buildLanguageAlternates(lng, "/modern"),
  };
}

export default async function ModernRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  // Keyed by language so GSAP SplitText re-splits translated copy on switch.
  return <ModernExperience key={lng} lng={lng} />;
}
