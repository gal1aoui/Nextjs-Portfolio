import { Tooltip } from "@heroui/tooltip";
import { Card, CardBody } from "@heroui/card";

import { Skill } from "./type";

export default function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <Tooltip
          key={`${skill}-${index}`}
          content={
            <div className="max-w-xs p-2">
              <p className="font-semibold mb-1">{skill.name}</p>
              <p className="text-xs text-default-500">{skill.description}</p>
            </div>
          }
          delay={300}
          placement="top"
        >
          <Card className="rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all">
            <CardBody className="p-4 flex flex-col items-center gap-3">
              {skill.icon && <skill.icon className="w-16 h-16" />}
              <span className="text-sm font-medium text-center">
                {skill.name}
              </span>
            </CardBody>
          </Card>
        </Tooltip>
      ))}
    </div>
  );
}
