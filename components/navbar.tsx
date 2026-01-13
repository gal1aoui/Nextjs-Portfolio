"use client";

import NextLink from "next/link";

import {Tabs, Tab} from "@heroui/tabs"
import {Tooltip} from "@heroui/tooltip";

import {
  Logo
} from "@/components/icons";
import { Button } from "./ui/button";
import { ThemeSwitch } from "./theme-switch";
import QuestionAndAnswer from "./contact/qa/question-answer";

export const Navbar = () => {

  return (
    <div className="hidden sm:flex text-center items-center justify-between mx-2 p-2 border-b-1">
      <NextLink className="flex justify-start items-center" href="/">
        <Logo />
        <p className="font-bold text-inherit">CHREF.</p>
      </NextLink>

      <Tabs radius="full" variant="bordered">
        <Tab key="about" title="About" />
        <Tab key="skills" title="Skills" />
        <Tab key="experience" title="Experience" />
        <Tab key="projects" title="Projects" />
        <Tab key="contact" title="Contact" />
      </Tabs>
      
      <div className="hidden md:flex">
        <ThemeSwitch />
        <QuestionAndAnswer />
      </div>
    </div>
  );
};
