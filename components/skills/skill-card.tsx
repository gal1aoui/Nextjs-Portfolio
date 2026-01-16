import { Tooltip } from "@heroui/tooltip";
import { Skill } from "./type";
import { Card, CardBody } from "@heroui/card";

export default function SkillGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <Tooltip
          key={skill.id}
          placement="top"
          content={skill.description}
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
