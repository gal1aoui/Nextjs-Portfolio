import { MetadataRoute } from "next";

import { getBlogIds } from "@/components/blogs/blogs-data";
import { getAbsoluteLocalizedUrl } from "@/i18n/routing";
import { languages } from "@/i18n/settings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["/", "/projects", "/blogs", "/experience", "/skills"];
  const topLevelRoutes = languages.flatMap((lng) =>
    baseRoutes.map((route) => ({
      url: getAbsoluteLocalizedUrl(lng, route),
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    })),
  );
  const blogRoutes = languages.flatMap((lng) =>
    getBlogIds().map((blogId) => ({
      url: getAbsoluteLocalizedUrl(lng, `/blogs/${blogId}`),
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...topLevelRoutes, ...blogRoutes];
}
