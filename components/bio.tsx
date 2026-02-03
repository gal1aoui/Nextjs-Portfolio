"use client";

import { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";

import useWindowWidth from "@/hooks/useWindowWidth";

export default function Bio() {
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
    <motion.h3
      className="text-2xl md:text-4xl antialiased md:subpixel-antialiased tracking-wide leading-12"
      initial={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <RoughNotationGroup show={roughNotationStarted}>
        <RoughNotation color="#FFD41D" strokeWidth={2} type="highlight">
          Full-Stack Developer
        </RoughNotation>{" "}
        with a{" "}
        <RoughNotation
          animationDelay={notationDelay}
          color={"red"}
          strokeWidth={8}
          type="box"
        >
          frontend specialization
        </RoughNotation>{" "}
        and{" "}
        <RoughNotation
          animationDelay={notationDelay}
          color="#33A1E0"
          strokeWidth={4}
          type="box"
        >
          3+ years
        </RoughNotation>{" "}
        of experience building and delivering complete solutions. Strong in
        modern frontend frameworks,{" "}
        <RoughNotation
          multiline
          animationDelay={notationDelay}
          color="#6AECE1"
          strokeWidth={4}
          type="underline"
        >
          performance optimization
        </RoughNotation>
        , and a focus on{" "}
        <RoughNotation
          multiline
          animationDelay={notationDelay}
          color="#6AECE1"
          strokeWidth={4}
          type="underline"
        >
          clean, maintainable code
        </RoughNotation>
        , with{" "}
        <RoughNotation
          animationDelay={notationDelay}
          color="#26CCC2"
          padding={[6, 16, 16, 6]}
          strokeWidth={4}
          type="circle"
        >
          solid backend
        </RoughNotation>{" "}
        experience across multiple projects.
      </RoughNotationGroup>
    </motion.h3>
  );
}
