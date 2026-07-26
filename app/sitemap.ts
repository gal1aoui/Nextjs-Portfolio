import { MetadataRoute } from "next";

import { getBlogIds } from "@/components/blogs/blogs-data";
import { getAbsoluteLocalizedUrl } from "@/i18n/routing";
import { languages, type AppLanguage } from "@/i18n/settings";

function sitemapEntry(
  lng: AppLanguage,
  path: string,
  priority: number,
): MetadataRoute.Sitemap[number] {
  return {
    url: getAbsoluteLocalizedUrl(lng, path),
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority,
    alternates: {
      languages: {
        en: getAbsoluteLocalizedUrl("en", path),
        fr: getAbsoluteLocalizedUrl("fr", path),
        "x-default": getAbsoluteLocalizedUrl("en", path),
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<[path: string, priority: number]> = [
    ["/", 1],
    ["/projects", 0.8],
    ["/blogs", 0.8],
    ["/experience", 0.8],
    ["/skills", 0.8],
    ["/modern", 0.6],
    ...getBlogIds().map((blogId): [string, number] => [
      `/blogs/${blogId}`,
      0.7,
    ]),
  ];

  return routes.flatMap(([path, priority]) =>
    languages.map((lng) => sitemapEntry(lng, path, priority)),
  );
}
