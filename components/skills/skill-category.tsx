import { Card, CardBody, CardHeader } from "@heroui/card";
import { motion } from "framer-motion";

import { RandomizedTextEffect } from "../randomized-text";

import { SkillCategory } from "./type";
import SkillGrid from "./skill-card";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillCategoryCard({
  category,
}: {
  category: SkillCategory;
}) {
  return (
    <motion.section
      className="w-full h-[90vh] sticky top-20 p-2"
      initial="hidden"
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={sectionVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      <Card className="rounded-3xl shadow-sm h-[76vh]">
        <CardHeader className="flex flex-col items-start gap-1 px-6 pt-6">
          <h3 className="text-2xl font-extrabold">
            <RandomizedTextEffect text={category.title} />
          </h3>
          <p className="text-xl text-muted-foreground">{category.summary}</p>
        </CardHeader>
        <CardBody className="px-6 pb-6 pt-4">
          <SkillGrid skills={category.skills} />
        </CardBody>
      </Card>
    </motion.section>
  );
}
