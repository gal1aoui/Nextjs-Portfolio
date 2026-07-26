/**
 * Experience-mode cookie contract shared by proxy.ts (edge), the intro gate,
 * and the mode toggles. Keep this file free of "use client" and React imports.
 */
export const experienceModeCookieName = "experience-mode";

export type ExperienceMode = "classic" | "modern";

export function isExperienceMode(value: string): value is ExperienceMode {
  return value === "classic" || value === "modern";
}

export function readExperienceModeCookie(): ExperienceMode | null {
  if (typeof document === "undefined") return null;

  const entry = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${experienceModeCookieName}=`));
  const value = entry?.split("=")[1];

  return value && isExperienceMode(value) ? value : null;
}

export function writeExperienceModeCookie(mode: ExperienceMode) {
  if (typeof document === "undefined") return;

  document.cookie = `${experienceModeCookieName}=${mode}; path=/; max-age=31536000; SameSite=Lax`;
}
