"use client";

import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  getLanguageFromPathname,
  getPathWithoutLanguage,
  localizePath,
} from "@/i18n/routing";
import { useTranslation } from "@/i18n/client";
import { cookieName, type AppLanguage } from "@/i18n/settings";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLanguage = getLanguageFromPathname(pathname);
  const currentPath = getPathWithoutLanguage(pathname);
  const { t } = useTranslation("common");
  const nextLanguage: AppLanguage = currentLanguage === "en" ? "fr" : "en";

  const handleLanguageChange = (nextLanguage: AppLanguage) => {
    document.cookie = `${cookieName}=${nextLanguage}; path=/; max-age=31536000; samesite=lax`;
    router.replace(localizePath(nextLanguage, currentPath));
  };

  return (
    <Button
      aria-label={t(`language.switchTo.${nextLanguage}`)}
      className="min-w-0 px-2"
      radius="full"
      size="sm"
      variant="light"
      onPress={() => handleLanguageChange(nextLanguage)}
    >
      {t(`language.${nextLanguage}`)}
    </Button>
  );
}
