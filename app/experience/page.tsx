"use client";

import { motion } from "framer-motion";

import { RandomizedTextEffect } from "@/components/randomized-text";
import Timeline from "@/components/experience/timeline";
import { experiences } from "@/components/experience/experience-data";

export default function ExperiencePage() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
            <RandomizedTextEffect text="My Journey" />
          </h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="mt-4 text-default-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            From creative coding experiments to enterprise frontend architecture
            — a story of continuous learning and growth.
          </motion.p>
        </motion.div>

        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}
