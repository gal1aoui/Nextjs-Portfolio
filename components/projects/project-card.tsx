"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Project, categoryLabels, categoryColors } from "./projects-data";
import { GithubIcon } from "../icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({
  project,
  index,
  onSelect,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`
    radial-gradient(
      320px circle at ${mouseX}px ${mouseY}px,
      rgba(var(--heroui-primary-500), 0.1),
      transparent 80%
    )
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      <Card
        isPressable
        onPress={() => onSelect(project)}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-2xl border border-default-200/50 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />

        <div
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
        />

        <CardBody className="relative z-10 p-5">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
            >
              <GithubIcon className="text-white" size={20} />
            </div>
            <Chip
              size="sm"
              variant="flat"
              color={categoryColors[project.category] as "primary" | "secondary" | "success" | "warning" | "danger"}
            >
              {categoryLabels[project.category]}
            </Chip>
          </div>

          <h3 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-default-500 mb-4 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <Chip
                key={tech}
                size="sm"
                variant="bordered"
                className="text-xs"
              >
                {tech}
              </Chip>
            ))}
            {project.techStack.length > 4 && (
              <Chip size="sm" variant="bordered" className="text-xs">
                +{project.techStack.length - 4}
              </Chip>
            )}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} origin-left`}
          />
        </CardBody>
      </Card>
    </motion.div>
  );
}
