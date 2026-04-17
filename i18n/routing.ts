import { fallbackLng, isLanguage, type AppLanguage } from "./settings";

import { siteConfig } from "@/config/site";

export function localizePath(lng: AppLanguage, path: string) {
  const normalizedPath = path === "/" ? "" : path.replace(/\/+$/, "");

  return normalizedPath ? `/${lng}${normalizedPath}` : `/${lng}`;
}

export function getPathWithoutLanguage(pathname: string) {
  const segments = pathname.split("/");
  const maybeLanguage = segments[1];

  if (maybeLanguage && isLanguage(maybeLanguage)) {
    const remainingPath = segments.slice(2).join("/");

    return remainingPath ? `/${remainingPath}` : "/";
  }

  return pathname || "/";
}

export function getLanguageFromPathname(pathname: string): AppLanguage {
  const maybeLanguage = pathname.split("/")[1];

  if (maybeLanguage && isLanguage(maybeLanguage)) {
    return maybeLanguage;
  }

  return fallbackLng;
}

export function getNavbarSelectedKey(pathname: string) {
  const localizedPath = getPathWithoutLanguage(pathname);

  if (localizedPath === "/") return "/";
  if (localizedPath.startsWith("/skills")) return "/skills";
  if (localizedPath.startsWith("/experience")) return "/experience";
  if (localizedPath.startsWith("/projects")) return "/projects";
  if (localizedPath.startsWith("/blogs")) return "/blogs";

  return localizedPath;
}

export function getAbsoluteLocalizedUrl(lng: AppLanguage, path: string) {
  return `${siteConfig.url}${localizePath(lng, path)}`;
}
