"use client";

import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { usePathname, useRouter } from "next/navigation";

import { useTranslation } from "@/i18n/client";
import {
  getLanguageFromPathname,
  getPathWithoutLanguage,
  localizePath,
} from "@/i18n/routing";
import { writeExperienceModeCookie } from "@/lib/experience-mode";
import { trackExperienceModeSwitched } from "@/lib/analytics";

interface ExperienceModeToggleProps {
  placement: "navbar" | "navbar-mobile" | "modern-nav" | "modern-footer";
  className?: string;
}

export default function ExperienceModeToggle({
  placement,
  className,
}: ExperienceModeToggleProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("modern");

  const language = getLanguageFromPathname(pathname);
  const currentMode = getPathWithoutLanguage(pathname).startsWith("/modern")
    ? ("modern" as const)
    : ("classic" as const);
  const targetMode = currentMode === "modern" ? "classic" : "modern";
  const label =
    targetMode === "modern" ? t("toggle.toModern") : t("toggle.toClassic");

  const handleSwitch = () => {
    // Write the cookie before navigating so the proxy's sticky-home redirect
    // agrees with the destination and can't bounce back.
    writeExperienceModeCookie(targetMode);
    trackExperienceModeSwitched(currentMode, targetMode, placement);
    router.push(
      targetMode === "modern"
        ? localizePath(language, "/modern")
        : localizePath(language, "/"),
    );
  };

  if (currentMode === "modern") {
    return (
      <button
        aria-label={t("toggle.ariaLabel")}
        className={`rounded-full border border-zinc-600 px-4 py-1.5 text-xs font-medium text-current transition-colors hover:border-current ${className ?? ""}`}
        type="button"
        onClick={handleSwitch}
      >
        {label}
      </button>
    );
  }

  return (
    <Tooltip closeDelay={1500} content={t("toggle.ariaLabel")}>
      <Button
        aria-label={t("toggle.ariaLabel")}
        className={className}
        radius="full"
        size="sm"
        variant="bordered"
        onPress={handleSwitch}
      >
        <span aria-hidden>✦</span>
        <span
          className={placement === "navbar" ? "hidden lg:inline" : undefined}
        >
          {label}
        </span>
      </Button>
    </Tooltip>
  );
}
