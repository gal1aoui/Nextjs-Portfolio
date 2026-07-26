"use client";

import Lenis from "lenis";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { gsap, ScrollTrigger } from "../gsap/gsap-config";

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Under reduced motion, native scrolling is the correct behavior.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // allowNestedScroll lets wheel events reach nested scrollables (chat
    // history, project drawer, contact modal) instead of always scrolling
    // the page behind them.
    const instance = new Lenis({ allowNestedScroll: true });

    instance.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return useContext(LenisContext);
}

/** Smooth-scrolls to a section id, falling back to native scrolling. */
export function useScrollToSection() {
  const lenis = useLenis();

  return (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    // A pinned section's element sits at its pin END once scrolled past, so
    // resolving it by rect would land at the end of e.g. the project gallery.
    // Navigate to the pin's start position instead.
    const pinned = ScrollTrigger.getAll().find(
      (trigger) => trigger.trigger === target && trigger.pin,
    );

    if (pinned) {
      if (lenis) {
        lenis.scrollTo(pinned.start);
      } else {
        window.scrollTo({ top: pinned.start, behavior: "smooth" });
      }

      return;
    }

    if (lenis) {
      lenis.scrollTo(target, { offset: -16 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
}
