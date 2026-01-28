"use client";

import { motion } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import { RandomizedTextEffect } from "@/components/randomized-text";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/components/experience/experience-data";

export default function ExperiencePage() {
  return (
    <ReactLenis root>
      <div className="max-w-6xl mx-auto px-4">
        <section>
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
              <RandomizedTextEffect text="My Journey" />
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-lg md:text-xl">
              From creative coding experiments to enterprise frontend architecture
              — a story of continuous learning and growth.
            </p>
          </motion.div>

          <Timeline experiences={experiences} />
        </section>
      </div>
    </ReactLenis>
  );
}
