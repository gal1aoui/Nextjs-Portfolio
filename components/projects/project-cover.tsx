"use client";

import type { Project } from "./data";

import Image from "next/image";
import { useState } from "react";

interface ProjectCoverProps {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Shared project visual: renders the cover image when one exists, and a
 * gradient placeholder (never a broken image) otherwise — including when a
 * listed file fails to load.
 */
export default function ProjectCover({
  project,
  className = "",
  sizes = "(max-width: 1279px) 100vw, 33vw",
  priority = false,
}: ProjectCoverProps) {
  const [failed, setFailed] = useState(false);
  const cover = project.images?.cover;

  if (cover && !failed) {
    return (
      <div className={`relative aspect-video overflow-hidden ${className}`}>
        <Image
          fill
          alt={project.title}
          className="object-cover"
          priority={priority}
          quality={75}
          sizes={sizes}
          src={cover}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  const initial = project.title
    .replace(/^@[^/]+\//, "")
    .charAt(0)
    .toUpperCase();

  return (
    <div
      aria-hidden
      className={`relative aspect-video overflow-hidden bg-gradient-to-br ${project.gradient} ${className}`}
    >
      {/* Static organic shapes — the animated border-radius version repaints
          large areas every frame, which visibly janks pages full of covers. */}
      <div
        className="absolute -right-1/4 -top-1/4 h-2/3 w-2/3 bg-white/15"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
      />
      <div
        className="absolute -bottom-1/3 -left-1/4 h-3/4 w-3/4 bg-black/10"
        style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
      />
      <span className="absolute inset-0 flex select-none items-center justify-center text-6xl font-bold text-white/30">
        {initial}
      </span>
    </div>
  );
}
