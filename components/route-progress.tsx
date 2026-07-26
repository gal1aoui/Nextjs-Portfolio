"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Top loading bar for classic page navigations: starts when an internal link
 * is clicked, eases toward 85%, and completes when the new route commits
 * (pathname change). Dependency-free nprogress-style behavior.
 */
export default function RouteProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);
  const isActiveRef = useRef(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const start = () => {
      const bar = barRef.current;

      if (!bar || isActiveRef.current) return;
      isActiveRef.current = true;
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);

      bar.style.transition = "none";
      bar.style.opacity = "1";
      bar.style.transform = "scaleX(0)";
      // Force a reflow so the next transition starts from 0.
      void bar.offsetWidth;
      bar.style.transition = "transform 8s cubic-bezier(0.08, 0.82, 0.17, 1)";
      bar.style.transform = "scaleX(0.85)";
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]");

      if (!anchor) return;
      if (
        anchor.getAttribute("target") &&
        anchor.getAttribute("target") !== "_self"
      ) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      const url = new URL(
        anchor.getAttribute("href") ?? "",
        window.location.href,
      );

      if (url.origin !== window.location.origin) return;
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      ) {
        return;
      }

      start();
    };

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  // Route committed — finish and fade.
  useEffect(() => {
    const bar = barRef.current;

    if (!bar || !isActiveRef.current) return;
    isActiveRef.current = false;

    bar.style.transition = "transform 0.25s ease-out, opacity 0.4s ease 0.3s";
    bar.style.transform = "scaleX(1)";
    bar.style.opacity = "0";

    resetTimerRef.current = setTimeout(() => {
      bar.style.transition = "none";
      bar.style.transform = "scaleX(0)";
    }, 800);

    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-0.5"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-primary to-secondary"
        style={{ transform: "scaleX(0)", opacity: 0 }}
      />
    </div>
  );
}
