"use client";

import { usePathname } from "next/navigation";
import NextLink from "next/link";
import {Tabs, Tab} from "@heroui/tabs"
import { Logo } from "@/components/icons";
import { ThemeSwitch } from "./theme-switch";
import QuestionAndAnswer from "./contact/qa/question-answer";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden sm:flex text-center items-center justify-between mx-2 p-2 border-b-1">
      <NextLink className="flex justify-start items-center" href="/">
        <Logo />
        <p className="font-bold text-inherit">CHREF.</p>
      </NextLink>

      <Tabs radius="full" variant="bordered" selectedKey={pathname}>
        <Tab key="/" title="About" href="/" />
        <Tab key="/skills" title="Skills" href="/skills" />
        <Tab key="/experience" title="Experience" href="/experience" />
        <Tab key="/projects" title="Projects" href="/projects" />
        <Tab key="/blogs" title="Contact" href="/blogs" />
      </Tabs>
      
      <div className="hidden md:flex gap-2">
        <ThemeSwitch />
        <QuestionAndAnswer />
      </div>
    </div>
  );
};
