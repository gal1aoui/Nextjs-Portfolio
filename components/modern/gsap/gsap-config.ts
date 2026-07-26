"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Single registration point. Everything under components/modern/ imports GSAP
// from this module only — nothing outside components/modern/ may import GSAP,
// which keeps it out of the classic route bundles.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };

export const DESKTOP_MOTION_MEDIA =
  "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";
export const ANY_MOTION_MEDIA = "(prefers-reduced-motion: no-preference)";
export const REDUCED_MOTION_MEDIA = "(prefers-reduced-motion: reduce)";
