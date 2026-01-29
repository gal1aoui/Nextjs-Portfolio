"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RandomizedTextEffect } from "@/components/randomized-text";
import { skillCategories } from "@/components/skills/skills";
import { Chip } from "@heroui/chip";
import SkillGrid from "@/components/skills/skill-card";

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    skillCategories[0].id
  );

  const currentCategory = skillCategories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <section className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          <RandomizedTextEffect text="Technical Expertise" />
        </h1>
        <p className="text-default-500 max-w-2xl mx-auto leading-relaxed">
          A curated overview of the technologies, tools, and practices I use to
          design, build, and maintain modern web applications.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:w-64 shrink-0"
        >
          <div className="md:sticky md:top-24 space-y-2">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-default-100/50 hover:bg-default-200/50"
                }`}
              >
                <span className="font-medium">{category.title}</span>
                <Chip
                  size="sm"
                  variant={selectedCategory === category.id ? "solid" : "flat"}
                  className={`h-6 min-w-6 ${
                    selectedCategory === category.id
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : ""
                  }`}
                >
                  {category.skills.length}
                </Chip>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 min-w-0"
        >
          <AnimatePresence mode="wait">
            {currentCategory && (
              <motion.div
                key={currentCategory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">
                    {currentCategory.title}
                  </h2>
                  <p className="text-default-500">{currentCategory.summary}</p>
                </div>

                <SkillGrid skills={currentCategory.skills} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
