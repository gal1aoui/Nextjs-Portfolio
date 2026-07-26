"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Chip } from "@heroui/chip";
import { Divider } from "@heroui/divider";
import { Link } from "@heroui/link";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/client";
import {
  trackProjectGithubClick,
  trackProjectLiveClick,
} from "@/lib/analytics";

import { ExternalLinkIcon, GithubIcon, ProjectsIcon } from "../icons";

import { Project, categoryColors, statusColors } from "./data";
import ProjectCover from "./project-cover";

interface ProjectDrawerProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({
  project,
  isOpen,
  onClose,
}: ProjectDrawerProps) {
  const { t } = useTranslation("projects");

  if (!project) return null;

  const handleGithubClick = () => {
    if (project.repoUrl) {
      trackProjectGithubClick(project.id, project.title, project.repoUrl);
    }
  };

  const handleLiveClick = () => {
    if (project.liveUrl) {
      trackProjectLiveClick(project.id, project.title, project.liveUrl);
    }
  };

  return (
    <Drawer
      backdrop="blur"
      isOpen={isOpen}
      placement="right"
      size="lg"
      onOpenChange={(open) => !open && onClose()}
    >
      <DrawerContent className="max-w-lg">
        {() => (
          <>
            <DrawerHeader className="flex flex-col gap-4 p-6 pb-0">
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.97 }}
                transition={{ delay: 0.05 }}
              >
                <ProjectCover
                  className="rounded-2xl"
                  project={project}
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </motion.div>

              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ scale: 1, opacity: 1 }}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {project.liveUrl ? (
                    <ExternalLinkIcon className="text-white" size={28} />
                  ) : project.repoUrl ? (
                    <GithubIcon className="text-white" size={28} />
                  ) : (
                    <ProjectsIcon className="text-white" size={28} />
                  )}
                </motion.div>
                <div className="min-w-0 flex-1">
                  <motion.h2
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-1 text-2xl font-bold"
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    animate={{ y: 0, opacity: 1 }}
                    className="mb-2 text-sm text-default-500"
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ delay: 0.18 }}
                  >
                    {project.role}
                  </motion.p>
                  <motion.div
                    animate={{ y: 0, opacity: 1 }}
                    className="flex flex-wrap gap-1.5"
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
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
                    <Chip size="sm" variant="bordered">
                      {t(`types.${project.type}`)}
                    </Chip>
                    <Chip size="sm" variant="bordered">
                      {project.year}
                    </Chip>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{ scaleX: 1 }}
                className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradient} origin-left`}
                initial={{ scaleX: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              />
            </DrawerHeader>

            <DrawerBody className="overflow-y-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {t("sections.highlights")}
                    </h3>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-2 rounded-xl border border-default-200/50 bg-default-50/50 px-3 py-2"
                          initial={{ opacity: 0, y: 8 }}
                          transition={{ delay: 0.25 + i * 0.05 }}
                        >
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${project.gradient}`}
                          />
                          <span className="text-sm text-default-600">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {t("sections.about")}
                    </h3>
                    <p className="leading-relaxed text-default-600">
                      {project.fullDescription}
                    </p>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {t("sections.features")}
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          animate={{ opacity: 1, x: 0 }}
                          className="flex items-start gap-3 text-sm text-default-600"
                          initial={{ opacity: 0, x: -10 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <span
                            className={`mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${project.gradient}`}
                          />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                      {t("sections.stack")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          animate={{ opacity: 1, scale: 1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.4 + i * 0.03 }}
                        >
                          <Chip size="sm" variant="bordered">
                            {tech}
                          </Chip>
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </DrawerBody>

            <DrawerFooter className="gap-3 p-6 pt-0">
              {project.liveUrl ? (
                <Button
                  isExternal
                  as={Link}
                  className={`flex-1 bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                  href={project.liveUrl}
                  size="md"
                  onClick={handleLiveClick}
                >
                  <ExternalLinkIcon size={18} />
                  {t("actions.visitLive")}
                </Button>
              ) : null}
              {project.repoUrl ? (
                <Button
                  isExternal
                  as={Link}
                  className="flex-1"
                  href={project.repoUrl}
                  size="md"
                  variant="bordered"
                  onClick={handleGithubClick}
                >
                  <GithubIcon size={18} />
                  {t("actions.viewRepository")}
                </Button>
              ) : null}
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
