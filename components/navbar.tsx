"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Tab, Tabs } from "@heroui/tabs";

import QuestionAndAnswer from "./contact/qa/question-answer";
import GameLauncher from "./game-launcher";
import LanguageSwitcher from "./language-switcher";
import { ThemeSwitch } from "./theme-switch";

import {
  AboutIcon,
  BlogIcon,
  ExperienceIcon,
  Logo,
  ProjectsIcon,
  SkillsIcon,
} from "@/components/icons";
import {
  getLanguageFromPathname,
  getNavbarSelectedKey,
  localizePath,
} from "@/i18n/routing";
import { useTranslation } from "@/i18n/client";

export const Navbar = () => {
  const pathname = usePathname();
  const currentLanguage = getLanguageFromPathname(pathname);
  const selectedKey = getNavbarSelectedKey(pathname);
  const { t } = useTranslation("common");

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="flex text-center items-center gap-2 px-2 py-2 shadow-sm"
      >
        <NextLink
          className="hidden sm:flex justify-start items-center"
          href={localizePath(currentLanguage, "/")}
        >
          <Logo />
          <p className="font-bold text-inherit text-2xl">{t("navbar.logo")}</p>
        </NextLink>

        <Tabs
          className="mx-auto"
          color="primary"
          radius="full"
          selectedKey={selectedKey}
          size="lg"
          variant="bordered"
        >
          <Tab
            key="/"
            aria-label={t("navbar.about")}
            href={localizePath(currentLanguage, "/")}
            title={
              <div className="flex items-center gap-1">
                <AboutIcon className="h-6 w-6 mt-1" />
                <p className="hidden md:block">{t("navbar.about")}</p>
              </div>
            }
          />
          <Tab
            key="/skills"
            aria-label={t("navbar.skills")}
            href={localizePath(currentLanguage, "/skills")}
            title={
              <div className="flex gap-1 items-center">
                <SkillsIcon className="mb-1" />
                <p className="hidden md:block">{t("navbar.skills")}</p>
              </div>
            }
          />
          <Tab
            key="/experience"
            aria-label={t("navbar.experience")}
            href={localizePath(currentLanguage, "/experience")}
            title={
              <div className="flex gap-1 items-center">
                <ExperienceIcon className="w-7 h-7" />
                <p className="hidden md:block">{t("navbar.experience")}</p>
              </div>
            }
          />
          <Tab
            key="/projects"
            aria-label={t("navbar.projects")}
            href={localizePath(currentLanguage, "/projects")}
            title={
              <div className="flex gap-1 items-center">
                <ProjectsIcon />
                <p className="hidden md:block">{t("navbar.projects")}</p>
              </div>
            }
          />
          <Tab
            key="/blogs"
            aria-label={t("navbar.blogs")}
            href={localizePath(currentLanguage, "/blogs")}
            title={
              <div className="flex gap-1 items-center">
                <BlogIcon />
                <p className="hidden md:block">{t("navbar.blogs")}</p>
              </div>
            }
          />
          <Tab
            key="mode"
            aria-label={t("navbar.themeToggle")}
            title={<ThemeSwitch />}
          />
        </Tabs>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <QuestionAndAnswer />
        </div>
      </nav>
      <GameLauncher />
    </>
  );
};
