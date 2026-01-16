"use client";

import { RandomizedTextEffect } from "@/components/randomized-text";
import { skillCategories } from "@/components/skills/skills";
import SkillCategoryCard from "@/components/skills/skill-category";
import { motion, useScroll } from "framer-motion";
import { ReactLenis } from "lenis/dist/lenis-react";
import { useRef } from "react";

export default function SkillsPage() {
  const container = useRef(null);
  return (
    <div className="max-w-5xl mx-auto text-center">
      <ReactLenis root>
        <section ref={container}>
          
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                <RandomizedTextEffect text="Technical Expertise" />
              </h1>
              <p className="text-muted-foreground max-w-5xl leading-relaxed">
                A curated overview of the technologies, tools, and practices I
                use to design, build, and maintain modern web applications —
                from frontend interfaces to backend systems and infrastructure.
              </p>
            </motion.div>
            <div className="">
            {skillCategories.map((category, i) => (
              <SkillCategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </ReactLenis>
    </div>
  );
}
