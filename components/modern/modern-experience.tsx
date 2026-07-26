"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import ProjectDrawer from "@/components/projects/project-drawer";
import type { Project } from "@/components/projects/data";
import { fontDisplay } from "@/config/fonts";
import { useTranslation } from "@/i18n/client";
import type { AppLanguage } from "@/i18n/settings";
import {
  trackModernContactCtaClick,
  trackModernPreloaderCompleted,
  trackModernProjectOpened,
} from "@/lib/analytics";

import { ScrollTrigger } from "./gsap/gsap-config";
import BackgroundGlow from "./chrome/background-glow";
import CustomCursor from "./chrome/custom-cursor";
import GrainOverlay from "./chrome/grain-overlay";
import ModernNav from "./chrome/modern-nav";
import ProgressDots from "./chrome/progress-dots";
import ScrollProgress from "./chrome/scroll-progress";
import { LenisProvider, useScrollToSection } from "./hooks/use-lenis";
import { useSectionObserver } from "./hooks/use-section-observer";
import AboutStats from "./sections/about-stats";
import BlogTeaser from "./sections/blog-teaser";
import ContactCta from "./sections/contact-cta";
import ExperienceTimeline from "./sections/experience-timeline";
import Hero from "./sections/hero";
import ModernFooter from "./sections/modern-footer";
import Preloader from "./sections/preloader";
import ProjectsGallery from "./sections/projects-gallery";
import SkillsStack from "./sections/skills-stack";

const QaDock = dynamic(() => import("./chrome/qa-dock"), { ssr: false });

const SECTION_IDS = [
  "hero",
  "about",
  "skills",
  "experience",
  "projects",
  "blog",
  "contact",
] as const;

const PRELOADER_SEEN_KEY = "modern-preloader-seen";

function ModernExperienceInner({ lng }: { lng: AppLanguage }) {
  const { t: tModern } = useTranslation("modern");
  const [showPreloader, setShowPreloader] = useState(false);
  // Hero entrance waits for the preloader curtain (or plays immediately when
  // the preloader is skipped) so the intro never runs hidden behind it.
  const [introReady, setIntroReady] = useState(false);
  const [isQaOpen, setIsQaOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const preloaderEvaluated = useRef(false);

  const activeId = useSectionObserver(SECTION_IDS);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    if (preloaderEvaluated.current) return;
    preloaderEvaluated.current = true;

    const alreadySeen = sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!alreadySeen && !prefersReducedMotion) {
      setShowPreloader(true);
    } else {
      setIntroReady(true);
      trackModernPreloaderCompleted(true);
    }
  }, []);

  // Lock page scroll while the curtain is up so the user can't end up
  // mid-page when it lifts.
  useEffect(() => {
    document.body.style.overflow = showPreloader ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreloader]);

  // Recalculate pinned/scrubbed positions once web fonts settle and after the
  // gallery images load in.
  useEffect(() => {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
    trackModernPreloaderCompleted(false);
    setShowPreloader(false);
    ScrollTrigger.refresh();
  };

  const handleSelectProject = (project: Project) => {
    trackModernProjectOpened(project.id, project.title);
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const sections = SECTION_IDS.map((id) => ({
    id,
    label: tModern(`nav.sections.${id}`),
  }));

  return (
    <div
      // isolate creates a stacking context so the -z-10 background glow
      // paints above this div's background instead of vanishing behind it.
      className={`${fontDisplay.variable} relative isolate bg-background text-foreground`}
    >
      {showPreloader ? (
        <Preloader
          onComplete={handlePreloaderComplete}
          onReveal={() => setIntroReady(true)}
        />
      ) : null}

      <BackgroundGlow />
      <GrainOverlay />
      <CustomCursor />
      <ScrollProgress />
      <ModernNav
        onOpenQa={() => setIsQaOpen(true)}
        onScrollTop={() => scrollToSection("hero")}
      />
      <ProgressDots
        activeId={activeId}
        ariaLabel={tModern("nav.ariaLabel")}
        sections={sections}
        onNavigate={scrollToSection}
      />

      <main>
        <Hero introReady={introReady} />
        <AboutStats lng={lng} />
        <SkillsStack />
        <ExperienceTimeline lng={lng} />
        <ProjectsGallery lng={lng} onSelect={handleSelectProject} />
        <BlogTeaser lng={lng} />
        <ContactCta
          onAskAi={() => {
            trackModernContactCtaClick("ai");
            setIsQaOpen(true);
          }}
        />
      </main>

      <ModernFooter />

      <ProjectDrawer
        isOpen={isDrawerOpen}
        project={selectedProject}
        onClose={handleCloseDrawer}
      />

      <QaDock isOpen={isQaOpen} language={lng} onOpenChange={setIsQaOpen} />
    </div>
  );
}

export default function ModernExperience({ lng }: { lng: AppLanguage }) {
  return (
    <LenisProvider>
      <ModernExperienceInner lng={lng} />
    </LenisProvider>
  );
}
