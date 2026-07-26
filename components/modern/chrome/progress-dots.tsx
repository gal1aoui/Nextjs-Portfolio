"use client";

import { Tooltip } from "@heroui/tooltip";

interface ProgressDotsProps {
  sections: readonly { id: string; label: string }[];
  activeId: string;
  ariaLabel: string;
  onNavigate: (sectionId: string) => void;
}

/** Fixed right-side section navigation (desktop only). */
export default function ProgressDots({
  sections,
  activeId,
  ariaLabel,
  onNavigate,
}: ProgressDotsProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="fixed right-5 top-1/2 z-[65] hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      {sections.map((section) => {
        const isActive = section.id === activeId;

        return (
          <Tooltip key={section.id} content={section.label} placement="left">
            <button
              aria-current={isActive ? "true" : undefined}
              aria-label={section.label}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "scale-125 bg-foreground"
                  : "bg-default-300 hover:bg-default-500"
              }`}
              type="button"
              onClick={() => onNavigate(section.id)}
            />
          </Tooltip>
        );
      })}
    </nav>
  );
}
