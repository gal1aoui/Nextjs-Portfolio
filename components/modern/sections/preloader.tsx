"use client";

import { useRef } from "react";

import { useTranslation } from "@/i18n/client";

import { gsap, useGSAP } from "../gsap/gsap-config";

interface PreloaderProps {
  /** Fires as the curtain starts lifting — start hero entrances here. */
  onReveal: () => void;
  onComplete: () => void;
}

/** Once-per-session cinematic curtain: counter + masked name reveal. */
export default function Preloader({ onReveal, onComplete }: PreloaderProps) {
  const { t } = useTranslation("home");
  const { t: tModern } = useTranslation("modern");
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const counter = { value: 0 };
      const timeline = gsap.timeline({
        onComplete,
        defaults: { ease: "power3.inOut" },
      });

      timeline
        .to(counter, {
          value: 100,
          duration: 1.1,
          ease: "power2.out",
          onUpdate: () => {
            if (counterRef.current) {
              counterRef.current.textContent = String(
                Math.round(counter.value),
              );
            }
          },
        })
        .from(
          nameRef.current,
          { yPercent: 120, duration: 0.7, ease: "power3.out" },
          0.15,
        )
        .call(() => onReveal(), undefined, "+=0.15")
        .to(rootRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.6,
        });
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-zinc-950 text-zinc-50"
      style={{ clipPath: "inset(0% 0% 0% 0%)" }}
    >
      <div className="overflow-hidden">
        <span
          ref={nameRef}
          className="block font-display text-4xl font-bold tracking-tight sm:text-6xl"
        >
          {t("intro.name")}
        </span>
      </div>
      <p className="mt-6 flex items-baseline gap-2 text-sm text-zinc-400">
        {tModern("preloader.loading")}
        <span className="font-display text-lg text-zinc-100">
          <span ref={counterRef}>0</span>%
        </span>
      </p>
    </div>
  );
}
