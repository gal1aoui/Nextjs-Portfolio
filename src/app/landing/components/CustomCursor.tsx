"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styles from "./assets/customCursor.module.css";

interface CustomCursorProps {
  isHovering: boolean;
}

const CustomCursor = ({ isHovering }: CustomCursorProps) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      cursorX.set(e.clientX - 32);
      cursorY.set(e.clientY - 32);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: isHovering ? 1.5 : 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default CustomCursor;
