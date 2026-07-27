"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { fontDisplay } from "@/config/fonts";
import { useTranslation } from "@/i18n/client";
import {
  getLanguageFromPathname,
  getPathWithoutLanguage,
  localizePath,
} from "@/i18n/routing";
import {
  readExperienceModeCookie,
  writeExperienceModeCookie,
  type ExperienceMode,
} from "@/lib/experience-mode";
import {
  trackExperienceGateChoice,
  trackExperienceGateShown,
} from "@/lib/analytics";

/**
 * First-visit entry screen on the classic home page offering the classic or
 * modern experience. It appears fully opaque and instantly (the boot script
 * in the classic layout blanks the shell until it mounts), locks background
 * scrolling while open, and stays up during the navigation to /modern so the
 * classic page never flashes. Renders nothing on the server and for returning
 * visitors, so crawlers and no-JS clients always see the classic page.
 */
export default function ExperienceGate() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation("modern");
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const hasTrackedShown = useRef(false);
  const hasChosen = useRef(false);
  const classicRef = useRef<HTMLButtonElement>(null);
  const modernRef = useRef<HTMLButtonElement>(null);

  const language = getLanguageFromPathname(pathname);

  // Re-evaluated on every navigation: a first-time visitor who lands on a
  // deep link still gets the gate when they later reach the classic home.
  // The cookie (written on choice) is what prevents re-showing.
  useEffect(() => {
    const isHome = getPathWithoutLanguage(pathname) === "/";

    if (isHome && !readExperienceModeCookie()) {
      setIsVisible(true);
      if (!hasTrackedShown.current) {
        hasTrackedShown.current = true;
        trackExperienceGateShown();
      }
    } else {
      // Not showing: release the pre-hydration cover set by the boot script.
      document.documentElement.removeAttribute("data-gate-pending");
    }
  }, [pathname]);

  useEffect(() => {
    if (isVisible) {
      classicRef.current?.focus();
      // The overlay is committed at this point (fully opaque — no entry
      // fade), so the classic shell can be revealed behind it without a
      // flash.
      document.documentElement.removeAttribute("data-gate-pending");
      // Warm up the modern route so picking it navigates without a stall.
      router.prefetch(localizePath(language, "/modern"));
    }
  }, [isVisible, language, router]);

  // The page behind the gate must not scroll while the intro is up.
  useEffect(() => {
    if (!isVisible) return;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [isVisible]);

  const choose = useCallback(
    (mode: ExperienceMode) => {
      if (hasChosen.current) return;
      hasChosen.current = true;

      writeExperienceModeCookie(mode);
      trackExperienceGateChoice(mode);

      if (mode === "modern") {
        // Keep the gate covering the page until the modern route mounts —
        // hiding it now would flash the classic home during navigation.
        router.push(localizePath(language, "/modern"));
      } else {
        setIsVisible(false);
      }
    },
    [language, router],
  );

  // Document-level key handling so the trap works even after a backdrop
  // click moves focus to <body> (the page behind stays covered + untabbable).
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        choose("classic");

        return;
      }

      if (
        event.key === "Tab" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowRight"
      ) {
        event.preventDefault();
        const target =
          document.activeElement === classicRef.current
            ? modernRef.current
            : classicRef.current;

        target?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => document.removeEventListener("keydown", handleKeyDown, true);
  }, [isVisible, choose]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          animate={{ opacity: 1 }}
          aria-labelledby="experience-gate-title"
          aria-modal="true"
          className={`${fontDisplay.variable} fixed inset-0 z-[100] flex flex-col bg-background`}
          exit={{ opacity: 0 }}
          initial={false}
          role="dialog"
          transition={{ duration: prefersReducedMotion ? 0.15 : 0.35 }}
        >
          <div className="px-6 pb-2 pt-10 text-center sm:pt-14">
            <motion.h2
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl font-bold tracking-tight sm:text-5xl"
              id="experience-gate-title"
              initial={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }
              }
              transition={{ delay: 0.1 }}
            >
              {t("gate.title")}
            </motion.h2>
            <motion.p
              animate={{ opacity: 1 }}
              className="mt-3 text-default-500"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t("gate.subtitle")}
            </motion.p>
          </div>

          <div className="flex min-h-0 flex-1 flex-col gap-4 p-6 sm:flex-row sm:gap-6 sm:p-10">
            <motion.button
              ref={classicRef}
              animate={{ opacity: 1, y: 0 }}
              className="group relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-default-200 bg-default-50 p-8 text-center outline-none transition-all duration-300 hover:flex-[1.25] focus-visible:flex-[1.25] focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none sm:hover:flex-[1.25]"
              initial={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ delay: 0.25 }}
              type="button"
              onClick={() => choose("classic")}
            >
              <span className="font-display text-4xl font-bold sm:text-6xl">
                {t("gate.classic.label")}
              </span>
              <span className="max-w-xs text-sm text-default-500">
                {t("gate.classic.description")}
              </span>
              <span className="rounded-full border border-default-300 px-5 py-2 text-sm font-medium transition-colors group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                {t("gate.classic.cta")}
              </span>
            </motion.button>

            <motion.button
              ref={modernRef}
              animate={{ opacity: 1, y: 0 }}
              className="group relative flex flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-8 text-center text-zinc-50 outline-none transition-all duration-300 hover:flex-[1.25] focus-visible:flex-[1.25] focus-visible:ring-2 focus-visible:ring-primary motion-reduce:transition-none sm:hover:flex-[1.25]"
              initial={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }
              }
              transition={{ delay: 0.32 }}
              type="button"
              onClick={() => choose("modern")}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-violet-600/40 to-cyan-500/30 blur-2xl transition-transform duration-500 group-hover:scale-125 motion-reduce:transition-none"
              />
              <span className="font-display text-4xl font-bold sm:text-6xl">
                {t("gate.modern.label")}
              </span>
              <span className="max-w-xs text-sm text-zinc-400">
                {t("gate.modern.description")}
              </span>
              <span className="rounded-full border border-zinc-600 px-5 py-2 text-sm font-medium transition-colors group-hover:border-zinc-50 group-hover:bg-zinc-50 group-hover:text-zinc-950">
                {t("gate.modern.cta")}
              </span>
            </motion.button>
          </div>

          <p className="px-6 pb-8 text-center text-xs text-default-400">
            {t("gate.hint")}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
