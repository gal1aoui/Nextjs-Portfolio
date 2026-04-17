"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@heroui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/drawer";
import { Tab, Tabs } from "@heroui/tabs";

import {
  AboutIcon,
  BlogIcon,
  ExperienceIcon,
  Logo,
  ProjectsIcon,
  SkillsIcon,
  MenuIcon,
} from "@/components/icons";
import {
  getLanguageFromPathname,
  getNavbarSelectedKey,
  localizePath,
} from "@/i18n/routing";
import { useTranslation } from "@/i18n/client";

import GameLauncher from "./game-launcher";
import QuestionAndAnswer from "./contact/qa/question-answer";
import LanguageSwitcher from "./language-switcher";
import { ThemeSwitch } from "./theme-switch";

export const Navbar = () => {
  const pathname = usePathname();
  const currentLanguage = getLanguageFromPathname(pathname);
  const selectedKey = getNavbarSelectedKey(pathname);
  const { t } = useTranslation("common");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationTabs = [
    {
      key: "/",
      ariaLabel: t("navbar.about"),
      href: localizePath(currentLanguage, "/"),
      icon: <AboutIcon className="h-6 w-6" />,
      label: t("navbar.about"),
    },
    {
      key: "/skills",
      ariaLabel: t("navbar.skills"),
      href: localizePath(currentLanguage, "/skills"),
      icon: <SkillsIcon className="h-6 w-6" />,
      label: t("navbar.skills"),
    },
    {
      key: "/experience",
      ariaLabel: t("navbar.experience"),
      href: localizePath(currentLanguage, "/experience"),
      icon: <ExperienceIcon className="h-6 w-6" />,
      label: t("navbar.experience"),
    },
    {
      key: "/projects",
      ariaLabel: t("navbar.projects"),
      href: localizePath(currentLanguage, "/projects"),
      icon: <ProjectsIcon className="h-6 w-6" />,
      label: t("navbar.projects"),
    },
    {
      key: "/blogs",
      ariaLabel: t("navbar.blogs"),
      href: localizePath(currentLanguage, "/blogs"),
      icon: <BlogIcon className="h-6 w-6" />,
      label: t("navbar.blogs"),
    },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        aria-label="Main navigation"
        className="hidden sm:flex text-center items-center gap-2 px-2 py-2 shadow-sm"
      >
        <NextLink
          className="flex justify-start items-center"
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
          {navigationTabs.map((tab) => (
            <Tab
              key={tab.key}
              aria-label={tab.ariaLabel}
              href={tab.href}
              title={
                <div className="flex items-center gap-1">
                  {tab.icon}
                  <p className="hidden md:block">{tab.label}</p>
                </div>
              }
            />
          ))}
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

      {/* Mobile Navbar */}
      <nav
        aria-label="Main navigation"
        className="flex sm:hidden items-center justify-between px-2 py-2 shadow-sm"
      >
        <NextLink
          className="flex items-center"
          href={localizePath(currentLanguage, "/")}
        >
          <Logo />
          <p className="font-bold text-inherit text-xl ml-2">
            {t("navbar.logo")}
          </p>
        </NextLink>

        <div className="flex items-center gap-4">
          <ThemeSwitch className="mb-1" />
          <LanguageSwitcher />
          <QuestionAndAnswer variant />

          <Button
            isIconOnly
            aria-label="Open menu"
            variant="light"
            onPress={() => setIsSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      <GameLauncher />
      {/* Mobile Sidebar */}
      <Drawer
        isOpen={isSidebarOpen}
        placement="left"
        onOpenChange={setIsSidebarOpen}
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">
            <NextLink
              className="flex items-center"
              href={localizePath(currentLanguage, "/")}
              onClick={() => setIsSidebarOpen(false)}
            >
              <Logo />
              <p className="font-bold text-inherit text-xl ml-2">
                {t("navbar.logo")}
              </p>
            </NextLink>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navigationTabs.map((tab) => (
                  <NextLink
                    key={tab.key}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-default-100 transition-colors"
                    href={tab.href}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {tab.icon}
                    <p>{tab.label}</p>
                  </NextLink>
                ))}
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
