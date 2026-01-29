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
import { Project, categoryLabels, categoryColors } from "./projects-data";
import { GithubIcon } from "../icons";

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
  if (!project) return null;

  return (
    <Drawer
      placement="right"
      backdrop="blur"
      size="lg"
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
    >
      <DrawerContent className="max-w-lg">
        {(onCloseDrawer) => (
          <>
            <DrawerHeader className="flex flex-col gap-4 p-6 pb-0">
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} shadow-lg`}
                >
                  <GithubIcon className="text-white" size={28} />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-2xl font-bold mb-1"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Chip
                      size="sm"
                      variant="flat"
                      color={categoryColors[project.category] as "primary" | "secondary" | "success" | "warning" | "danger"}
                    >
                      {categoryLabels[project.category]}
                    </Chip>
                  </motion.div>
                </div>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className={`h-1 w-full rounded-full bg-gradient-to-r ${project.gradient} origin-left`}
              />
            </DrawerHeader>

            <DrawerBody className="p-6 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                      About
                    </h3>
                    <p className="text-default-600 leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>

                  <Divider />

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                          className="flex items-start gap-3 text-sm text-default-600"
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
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
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

            <DrawerFooter className="p-6 pt-0 gap-3">
              <Button
                variant="bordered"
                className="flex-1"
                onPress={onCloseDrawer}
                size="md"
              >
                Close
              </Button>
              <Button
                as={Link}
                href={project.repoUrl}
                size="md"
                isExternal
                className={`flex-1 bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
              >
                <GithubIcon size={18} />
                View Repository

              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
