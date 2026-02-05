"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import ProjectCard from "@/components/projects/project-card";
import ProjectDrawer from "@/components/projects/project-drawer";
import GithubContributions from "@/components/projects/github-calendar";
import { projects, Project } from "@/components/projects/projects-data";
import { RandomizedTextEffect } from "@/components/randomized-text";
import { useModal } from "@/providers/modal-provider";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { isDrawerOpen, onTriggerDrawer } = useModal();

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    onTriggerDrawer();
  };

  const handleCloseDrawer = () => {
    setTimeout(() => setSelectedProject(null), 300);
    onTriggerDrawer();
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
              <RandomizedTextEffect text="My Personal Projects" />
            </h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="mt-4 text-default-500 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              A collection of personal projects showcasing my skills in
              full-stack development, DevOps, and open-source contributions.
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
