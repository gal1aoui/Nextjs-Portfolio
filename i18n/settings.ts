export const fallbackLng = "en";

export const languages = [fallbackLng, "fr"] as const;

export const defaultNS = "common";

export const namespaces = [
  defaultNS,
  "home",
  "projects",
  "experience",
  "skills",
  "blogs",
  "seo",
] as const;

export const cookieName = "i18next";

export const headerName = "x-i18next-current-language";

export type AppLanguage = (typeof languages)[number];
export type AppNamespace = (typeof namespaces)[number];

export function isLanguage(value: string): value is AppLanguage {
  return languages.includes(value as AppLanguage);
}
