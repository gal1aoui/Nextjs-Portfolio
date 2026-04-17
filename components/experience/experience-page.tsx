"use client";

import { motion } from "framer-motion";

import { RandomizedTextEffect } from "@/components/randomized-text";
import { useTranslation } from "@/i18n/client";

import { ExperienceItem } from "./experience-data";
import Timeline from "./timeline";

export default function ExperiencePage({
  experiences,
}: {
  experiences: ExperienceItem[];
}) {
  const { t } = useTranslation("experience");

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
            <RandomizedTextEffect text={t("title")} />
          </h1>
          <motion.p
            animate={{ opacity: 1 }}
            className="mt-4 text-default-500 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        <Timeline experiences={experiences} />
      </div>
    </section>
  );
}
