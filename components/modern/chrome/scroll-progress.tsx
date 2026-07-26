"use client";

import { useEffect, useRef } from "react";

/**
 * Thin page-scroll progress bar fixed to the very top of the modern page.
 * Plain rAF-throttled scroll listener so it works with and without Lenis
 * and under reduced motion (it's informational, not decorative).
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[66] h-0.5">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-violet-500 to-cyan-500"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
