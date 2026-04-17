"use client";

import { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";

import { useTranslation } from "@/i18n/client";
import useWindowWidth from "@/hooks/useWindowWidth";

export default function Bio() {
  const { t } = useTranslation("home");
  const [roughNotationStarted, setRoughNotationStarted] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > 651) {
      setTimeout(() => setRoughNotationStarted(true), 2000);
    } else {
      setRoughNotationStarted(false);
    }
  }, [windowWidth]);

  const notationDelay = 0.7;

  return (
    <motion.h2
      className="text-2xl md:text-4xl antialiased md:subpixel-antialiased tracking-wide leading-12"
      initial={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <RoughNotationGroup show={roughNotationStarted}>
        <RoughNotation color="#FFD41D" strokeWidth={2} type="highlight">
          {t("bio.highlightRole")}
        </RoughNotation>{" "}
        {t("bio.beforeSpecialization")}{" "}
        <RoughNotation
          animationDelay={notationDelay}
          color={"red"}
          strokeWidth={8}
          type="box"
        >
          {t("bio.specialization")}
        </RoughNotation>{" "}
        {t("bio.beforeExperience")}{" "}
        <RoughNotation
          multiline
          animationDelay={notationDelay}
          brackets={["left", "right"]}
          color="#33A1E0"
          strokeWidth={4}
          type="bracket"
        >
          {t("bio.experience")}
        </RoughNotation>{" "}
        {t("bio.beforePerformance")}{" "}
        <RoughNotation
          multiline
          animationDelay={notationDelay}
          color="#6AECE1"
          strokeWidth={4}
          type="underline"
        >
          {t("bio.performance")}
        </RoughNotation>
        {t("bio.beforeMaintainable")}{" "}
        <RoughNotation
          multiline
          animationDelay={notationDelay}
          color="#6AECE1"
          strokeWidth={4}
          type="underline"
        >
          {t("bio.maintainable")}
        </RoughNotation>
        {t("bio.beforeBackend")}{" "}
        <RoughNotation
          animationDelay={notationDelay}
          color="#26CCC2"
          padding={[6, 16, 16, 6]}
          strokeWidth={4}
          type="circle"
        >
          {t("bio.backend")}
        </RoughNotation>{" "}
        {t("bio.afterBackend")}
      </RoughNotationGroup>
    </motion.h2>
  );
}
