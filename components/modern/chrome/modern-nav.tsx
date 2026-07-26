"use client";

import { BotIcon, Logo } from "@/components/icons";
import ExperienceModeToggle from "@/components/experience-mode/experience-mode-toggle";
import { useScrollHidden } from "@/components/hooks/use-scroll-hidden";
import LanguageSwitcher from "@/components/language-switcher";
import { ThemeSwitch } from "@/components/theme-switch";
import { useTranslation } from "@/i18n/client";

interface ModernNavProps {
  onScrollTop: () => void;
  onOpenQa: () => void;
}

export default function ModernNav({ onScrollTop, onOpenQa }: ModernNavProps) {
  const { t } = useTranslation("common");
  const isHidden = useScrollHidden(120);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[65] flex items-center justify-between border-b border-default-200/40 bg-background/60 px-4 py-3 backdrop-blur-md transition-opacity duration-300 motion-reduce:transition-none sm:px-6 ${
        isHidden ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <button
        aria-label={t("navbar.logo")}
        className="flex items-center"
        type="button"
        onClick={onScrollTop}
      >
        <Logo />
        <span className="font-display text-lg font-bold tracking-tight">
          {t("navbar.logo")}
        </span>
      </button>

      <div className="flex items-center gap-2 sm:gap-3">
        <ThemeSwitch />
        <LanguageSwitcher />
        <ExperienceModeToggle placement="modern-nav" />
        <button
          aria-label={t("qa.tooltip")}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-default-300 transition-colors hover:border-foreground"
          type="button"
          onClick={onOpenQa}
        >
          <BotIcon />
        </button>
      </div>
    </header>
  );
}
