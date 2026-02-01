"use client";

import { useState } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import ProjectCard from "@/components/projects/project-card";
import ProjectDrawer from "@/components/projects/project-drawer";
import GithubContributions from "@/components/projects/github-calendar";
import { projects, Project } from "@/components/projects/projects-data";
import { RandomizedTextEffect } from "@/components/randomized-text";

export default function ProjectsPage() {
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              <RandomizedTextEffect text="My Personal Projects" />
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-default-500 max-w-2xl mx-auto"
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
                project={project}
                index={index}
                onSelect={handleSelectProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </>
  );
}
