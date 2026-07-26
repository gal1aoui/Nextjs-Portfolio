import { notFound } from "next/navigation";

import ExperiencePage from "@/components/experience/experience-page";
import { getExperiences } from "@/components/experience/experience-data";
import { isLanguage } from "@/i18n/settings";

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
