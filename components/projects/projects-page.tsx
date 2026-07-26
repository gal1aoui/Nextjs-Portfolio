"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tab, Tabs } from "@heroui/tabs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { RandomizedTextEffect } from "@/components/randomized-text";
import { useTranslation } from "@/i18n/client";
import {
  trackProjectsPageViewed,
  trackProjectDrawerOpened,
  trackProjectDrawerClosed,
  trackProjectCategoryFilter,
  trackGithubContributionsViewed,
} from "@/lib/analytics";

import GithubContributions from "./github-calendar";
import ProjectCard from "./project-card";
import ProjectDrawer from "./project-drawer";
import { Project, ProjectCategory } from "./data";

const GITHUB_USERNAME = "gal1aoui";

type CategoryFilter = ProjectCategory | "all";

const categoryFilters: CategoryFilter[] = [
  "all",
  "fullstack",
  "frontend",
  "backend",
  "library",
  "devops",
];

export default function ProjectsPage({ projects }: { projects: Project[] }) {
  const { t } = useTranslation("projects");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const deepLinkHandled = useRef(false);

  // Track page view on mount
  useEffect(() => {
    trackProjectsPageViewed();
    trackGithubContributionsViewed(GITHUB_USERNAME);
  }, []);

  // Deep link: /projects?project=<id> auto-opens the drawer once on mount.
  useEffect(() => {
    if (deepLinkHandled.current) return;
    deepLinkHandled.current = true;

    const projectId = searchParams.get("project");

    if (!projectId) return;

    const project = projects.find((item) => item.id === projectId);

    if (project) {
      trackProjectDrawerOpened(project.id, project.title, project.category);
      setSelectedProject(project);
      setIsDrawerOpen(true);
    }
  }, [projects, searchParams]);

  const filteredProjects = useMemo(
    () =>
      categoryFilter === "all"
        ? projects
        : projects.filter((project) => project.category === categoryFilter),
    [projects, categoryFilter],
  );

  const handleFilterChange = (filter: CategoryFilter) => {
    if (filter !== categoryFilter) {
      trackProjectCategoryFilter(filter);
    }
    setCategoryFilter(filter);
  };

  const handleSelectProject = (project: Project) => {
    trackProjectDrawerOpened(project.id, project.title, project.category);
    setSelectedProject(project);
    setIsDrawerOpen(true);
    router.replace(`${pathname}?project=${project.id}`, { scroll: false });
  };

  const handleCloseDrawer = () => {
    if (selectedProject) {
      trackProjectDrawerClosed(selectedProject.id);
    }
    setIsDrawerOpen(false);
    router.replace(pathname, { scroll: false });
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-3xl font-extrabold md:text-4xl">
              <RandomizedTextEffect text={t("title")} />
            </h1>
            <motion.p
              animate={{ opacity: 1 }}
              className="mx-auto mt-4 max-w-2xl text-default-500"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("description")}
            </motion.p>
          </motion.div>

          <GithubContributions username={GITHUB_USERNAME} />

          {/* Auto margins (not justify-center) so the row is centered when it
              fits but stays fully scrollable from the first tab on mobile. */}
          <div className="mb-8 w-full overflow-x-auto pb-1">
            <Tabs
              aria-label={t("filters.all")}
              className="mx-auto w-fit"
              color="primary"
              radius="full"
              selectedKey={categoryFilter}
              variant="bordered"
              onSelectionChange={(key) =>
                handleFilterChange(key as CategoryFilter)
              }
            >
              {categoryFilters.map((filter) => (
                <Tab
                  key={filter}
                  title={
                    filter === "all"
                      ? t("filters.all")
                      : t(`categories.${filter}`)
                  }
                />
              ))}
            </Tabs>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  index={index}
                  project={project}
                  onSelect={handleSelectProject}
                />
              ))}
            </AnimatePresence>
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
