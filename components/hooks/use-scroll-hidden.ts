"use client";

import { useEffect, useState } from "react";

/**
 * True while the user is scrolling down past `topOffset`; false as soon as
 * they scroll up or return near the top. rAF-throttled with a small delta
 * threshold so tiny jitters don't flicker the state.
 */
export function useScrollHidden(topOffset = 80) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;

      if (Math.abs(delta) > 6) {
        setHidden(y > topOffset && delta > 0);
        lastY = y;
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [topOffset]);

  return hidden;
}
