"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { ExperienceItem } from "./experience-data";
import { SkillsIcon } from "../icons";

interface TimelineMilestoneProps {
  experience: ExperienceItem;
  index: number;
  total: number;
}

const typeColors: Record<ExperienceItem["type"], "primary" | "secondary" | "success" | "warning" | "default"> = {
  "full-time": "primary",
  "part-time": "secondary",
  internship: "success",
  freelance: "warning",
  contract: "default",
};

export default function TimelineMilestone({
  experience,
  index,
}: TimelineMilestoneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative pb-20 last:pb-8">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
            className="w-8 h-8 rounded-full bg-primary shadow-lg flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="w-3 h-3 rounded-full bg-background"
            />
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView
                ? {
                    scale: [1, 2, 2],
                    opacity: [0.6, 0.3, 0],
                  }
                : {}
            }
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border-2 border-primary"
          />
        </div>
      </motion.div>

      {/* Year label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="absolute left-11 md:left-1/2 top-1.5 md:top-10 md:-translate-x-1/2 z-10"
      >
        <span className="text-sm font-bold text-primary bg-background px-2 py-0.5 rounded">
          {experience.year}
        </span>
      </motion.div>

      {/* Content card */}
      <div
        className={`ml-12 md:ml-0 pt-10 md:pt-0 md:w-[45%] ${
          isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
          animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        >
          <Card className="rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <CardBody className="p-5 md:p-6">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Chip size="sm" variant="flat" color={typeColors[experience.type]}>
                  {experience.type}
                </Chip>
                <span className="text-xs text-muted-foreground">
                  {experience.period}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-1">
                {experience.title}
              </h3>
              <p className="text-primary font-semibold mb-1">
                {experience.company}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                {experience.location}
              </p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="text-sm text-muted-foreground leading-relaxed mb-4"
              >
                {experience.story}
              </motion.p>

              {/* What I Learned */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                  What I Learned
                </h4>
                <ul className="space-y-1">
                  {experience.learned.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <SkillsIcon className="text-amber-400" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5">
                {experience.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.03 }}
                  >
                    <Chip size="sm" variant="bordered" className="text-xs">
                      {tech}
                    </Chip>
                  </motion.span>
                ))}
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
