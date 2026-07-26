"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { forwardRef, MouseEvent, useRef } from "react";

import { useTranslation } from "@/i18n/client";
import { trackProjectCardClick, trackProjectCardHover } from "@/lib/analytics";

import { ExternalLinkIcon, GithubIcon, ProjectsIcon } from "../icons";

import { Project, categoryColors, statusColors } from "./data";
import ProjectCover from "./project-cover";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

// forwardRef is required: AnimatePresence mode="popLayout" clones each child
// with a ref to absolutely-position exiting cards during filter changes.
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard({ project, index, onSelect }, ref) {
    const { t } = useTranslation("projects");
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const hoverTracked = useRef(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    const handleMouseEnter = () => {
      if (!hoverTracked.current) {
        hoverTracked.current = true;
        trackProjectCardHover(project.id, project.title);
      }
    };

    const handleCardClick = () => {
      trackProjectCardClick(project.id, project.title);
      onSelect(project);
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
        ref={ref}
        layout
        animate={{ opacity: 1, y: 0 }}
        className="group relative"
        exit={{ opacity: 0, scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Card
          isPressable
          className="relative w-full overflow-hidden rounded-2xl border border-default-200/50 bg-background/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onPress={handleCardClick}
        >
          <ProjectCover project={project} />

          <motion.div
            className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background }}
          />

          <div
            className={`absolute inset-x-0 top-0 z-10 h-1 bg-gradient-to-r ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          />

          <CardBody className="relative z-10 p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}
              >
                {project.liveUrl ? (
                  <ExternalLinkIcon className="text-white" size={20} />
                ) : project.repoUrl ? (
                  <GithubIcon className="text-white" size={20} />
                ) : (
                  <ProjectsIcon className="text-white" size={20} />
                )}
              </div>
              <div className="flex flex-wrap items-center justify-end gap-1.5">
                <Chip
                  color={categoryColors[project.category]}
                  size="sm"
                  variant="flat"
                >
                  {t(`categories.${project.category}`)}
                </Chip>
                <Chip
                  color={statusColors[project.status]}
                  size="sm"
                  variant="dot"
                >
                  {t(`status.${project.status}`)}
                </Chip>
              </div>
            </div>

            <div className="mb-2 flex items-baseline justify-between gap-2">
              <h3 className="line-clamp-1 text-lg font-bold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <span className="shrink-0 text-tiny text-default-400">
                {project.year}
              </span>
            </div>

            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-default-500">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 4).map((tech) => (
                <Chip
                  key={tech}
                  className="text-xs"
                  size="sm"
                  variant="bordered"
                >
                  {tech}
                </Chip>
              ))}
              {project.techStack.length > 4 && (
                <Chip className="text-xs" size="sm" variant="bordered">
                  +{project.techStack.length - 4}
                </Chip>
              )}
            </div>

            <motion.div
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.gradient} origin-left`}
              initial={{ scaleX: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scaleX: 1 }}
            />
          </CardBody>
        </Card>
      </motion.div>
    );
  },
);

export default ProjectCard;
