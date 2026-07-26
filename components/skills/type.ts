import { FC } from "react";

import { IconSvgProps } from "@/types";

export type Skill = {
  id: string;
  name: string;
  description: string;
  icon?: FC<IconSvgProps>;
};
