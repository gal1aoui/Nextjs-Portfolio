import { Card, CardBody, CardHeader } from "@heroui/card";
import { SkillCategory } from "./type";
import { motion } from "framer-motion";
import SkillGrid from "./skill-card";
import { RandomizedTextEffect } from "../randomized-text";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillCategoryCard({ category}: { category: SkillCategory }) {
  return (
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full h-[90vh] sticky top-20 p-2"
      >
        <Card className="rounded-3xl shadow-sm h-[76vh]">
          <CardHeader className="flex flex-col items-start gap-1 px-6 pt-6">
            <h3 className="text-xl font-semibold"><RandomizedTextEffect text={category.title} /></h3>
            <p className="text-sm text-muted-foreground">{category.summary}</p>
          </CardHeader>
          <CardBody className="px-6 pb-6 pt-4">
            <SkillGrid skills={category.skills} />
          </CardBody>
        </Card>
      </motion.section>
  );
}
