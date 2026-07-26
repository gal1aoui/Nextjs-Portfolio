"use client";

import { useEffect, useState } from "react";

import { trackModernSectionViewed } from "@/lib/analytics";

/**
 * Tracks which section currently crosses the viewport's center band and fires
 * a one-shot analytics event per section per page view.
 */
export function useSectionObserver(sectionIds: readonly string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const { id } = entry.target;

            setActiveId(id);
            if (!seen.has(id)) {
              seen.add(id);
              trackModernSectionViewed(id);
            }
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );

    for (const id of sectionIds) {
      const element = document.getElementById(id);

      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
