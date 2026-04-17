"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { RandomizedTextEffect } from "@/components/randomized-text";
import { useTranslation } from "@/i18n/client";

import GithubContributions from "./github-calendar";
import ProjectCard from "./project-card";
import ProjectDrawer from "./project-drawer";
import { Project } from "./projects-data";

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  const { t } = useTranslation("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              <RandomizedTextEffect text={t("title")} />
            </h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="mt-4 text-default-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("description")}
            </motion.p>
          </motion.div>

          <GithubContributions username="gal1aoui" />

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                project={project}
                onSelect={handleSelectProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectDrawer
        isOpen={isDrawerOpen}
        project={selectedProject}
        onClose={handleCloseDrawer}
      />
    </>
  );
}
