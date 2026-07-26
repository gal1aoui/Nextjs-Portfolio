"use client";

import { ReactNode, useEffect, useRef } from "react";

import { gsap } from "../gsap/gsap-config";

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

/** Pulls its content toward the pointer on fine-pointer devices. */
export default function Magnetic({
  children,
  strength = 0.3,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const xTo = gsap.quickTo(element, "x", {
      duration: 0.4,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(element, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();

      xTo((event.clientX - rect.left - rect.width / 2) * strength);
      yTo((event.clientY - rect.top - rect.height / 2) * strength);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("pointermove", handleMove);
    element.addEventListener("pointerleave", handleLeave);

    return () => {
      element.removeEventListener("pointermove", handleMove);
      element.removeEventListener("pointerleave", handleLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} data-cursor="hover">
      {children}
    </div>
  );
}
