import { notFound } from "next/navigation";

import BlogsPage from "@/components/blogs/blogs-page";
import { getBlogs } from "@/components/blogs/blogs-data";
import { isLanguage } from "@/i18n/settings";

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
