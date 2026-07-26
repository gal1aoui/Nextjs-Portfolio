import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogsPage from "@/components/blogs/blogs-page";
import { getBlogs } from "@/components/blogs/blogs-data";
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
    title: t("seo:pages.blogs.title") as string,
    description: t("seo:pages.blogs.description") as string,
    alternates: buildLanguageAlternates(lng, "/blogs"),
  };
}

export default async function BlogsRoute({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  if (!isLanguage(lng)) {
    notFound();
  }

  return <BlogsPage blogs={getBlogs(lng)} />;
}
