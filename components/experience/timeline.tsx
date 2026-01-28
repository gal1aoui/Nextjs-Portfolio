"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExperienceItem } from "./experience-data";
import TimelineMilestone from "./timeline-milestone";

interface TimelineProps {
  experiences: ExperienceItem[];
}

export default function Timeline({ experiences }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative pb-8">
      {/* Timeline track - centered on the dot (dot is 32px, so center at 16px - 1px for line) */}
      <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-default-200/50" />

      {/* Animated progress line */}
      <motion.div
        className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-secondary"
        style={{ height: lineHeight }}
      />

      {/* Timeline milestones */}
      <div className="relative">
        {experiences.map((experience, index) => (
          <TimelineMilestone
            key={experience.id}
            experience={experience}
            index={index}
            total={experiences.length}
          />
        ))}
      </div>
    </div>
  );
}
