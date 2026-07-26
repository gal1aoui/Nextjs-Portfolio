"use client";

import { useEffect, useRef, useState } from "react";

import { gsap } from "../gsap/gsap-config";

/**
 * Desktop-only follower cursor (the native cursor stays visible). Scales up
 * over links, buttons, and anything marked data-cursor="hover".
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isFinePointer && !prefersReducedMotion) {
      setEnabled(true);
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power2.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power2.out" });
    const ringX = gsap.quickTo(ring, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const ringY = gsap.quickTo(ring, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMove = (event: PointerEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element &&
      Boolean(target.closest("a, button, [data-cursor='hover']"));

    const handleOver = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        gsap.to(ring, { scale: 2, duration: 0.25, ease: "power2.out" });
      }
    };

    const handleOut = (event: PointerEvent) => {
      if (isInteractive(event.target)) {
        gsap.to(ring, { scale: 1, duration: 0.25, ease: "power2.out" });
      }
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerout", handleOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerout", handleOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[70] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/50 mix-blend-difference"
      />
    </>
  );
}
