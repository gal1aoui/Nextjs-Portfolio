import { MotionValue } from "framer-motion";
import { FC } from "react";

import { IconSvgProps } from "@/types";

export type Skill = {
  id: string;
  name: string;
  description: string;
  icon?: FC<IconSvgProps>;
};

export type SkillCategory = {
  id: string;
  title: string;
  summary: string;
  skills: Skill[];
};

export type SkillCategorySetting = {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale?: number;
};
