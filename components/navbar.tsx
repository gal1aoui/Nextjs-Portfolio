"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { Tabs, Tab } from "@heroui/tabs";

import { ThemeSwitch } from "./theme-switch";
import QuestionAndAnswer from "./contact/qa/question-answer";
import GameClient from "./game-client";

import {
  AboutIcon,
  BlogIcon,
  ExperienceIcon,
  Logo,
  ProjectsIcon,
  SkillsIcon,
} from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex text-center items-center px-2 py-2 shadow-sm">
        <NextLink
          className="hidden sm:flex justify-start items-center"
          href="/"
        >
          <Logo />
          <p className="font-bold text-inherit text-2xl">CHREF.</p>
        </NextLink>

        <Tabs
          className="mx-auto"
          color="primary"
          radius="full"
          selectedKey={pathname}
          size="lg"
          variant="bordered"
        >
          <Tab
            key="/"
            href="/"
            title={
              <div className="flex items-center gap-1">
                <AboutIcon className="h-6 w-6 mt-1" />
                <p className="hidden md:block">About</p>
              </div>
            }
          />
          <Tab
            key="/skills"
            href="/skills"
            title={
              <div className="flex gap-1 items-center">
                <SkillsIcon className="mb-1" />
                <p className="hidden md:block">Skills</p>
              </div>
            }
          />
          <Tab
            key="/experience"
            href="/experience"
            title={
              <div className="flex gap-1 items-center">
                <ExperienceIcon className="w-7 h-7" />
                <p className="hidden md:block">Experience</p>
              </div>
            }
          />
          <Tab
            key="/projects"
            href="/projects"
            title={
              <div className="flex gap-1 items-center">
                <ProjectsIcon />
                <p className="hidden md:block">Projects</p>
              </div>
            }
          />
          <Tab
            key="/blogs"
            href="/blogs"
            title={
              <div className="flex gap-1 items-center">
                <BlogIcon />
                <p className="hidden md:block">Blogs</p>
              </div>
            }
          />
          <Tab key="mode" title={<ThemeSwitch />} />
        </Tabs>
        <QuestionAndAnswer />
      </div>
      <GameClient />
    </>
  );
};
