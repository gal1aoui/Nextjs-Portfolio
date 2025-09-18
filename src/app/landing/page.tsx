"use client";

import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import CustomCursor from "./components/CustomCursor";
import styles from "./page.module.css";
import DarkIllustration from "../../assets/darkIllustration";
import LightIllustration from "../../assets/lightIllustration";

export default function Home() {
  const [isLightHovering, setIsLightHovering] = useState(false);
  const [isDarkHovering, setIsDarkHovering] = useState(false);

  return (
    <main className={styles.main}>
      <CustomCursor isHovering={isLightHovering || isDarkHovering} />

      <Stack direction="column" height="100vh" width="100vw">
        <Box
          sx={{ flex: 1, backgroundColor: "white" }}
          onMouseEnter={() => setIsLightHovering(true)}
          onMouseLeave={() => setIsLightHovering(false)}
        >
          {isLightHovering && <LightIllustration />}
        </Box>

        <Box
          sx={{ flex: 1, backgroundColor: "black" }}
          onMouseEnter={() => setIsDarkHovering(true)}
          onMouseLeave={() => setIsDarkHovering(false)}
        >
          {isDarkHovering && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <DarkIllustration />
            </motion.div>
          )}
        </Box>
      </Stack>

      <motion.div className={styles.centeredText}>
        <Typography
          variant="h1"
          component="h1"
          textTransform="uppercase"
          letterSpacing={5}
          fontFamily={"Arial Black, sans-serif"}
          fontSize={{ xs: "3rem", sm: "4rem", md: "5rem", lg: "8rem" }}
          sx={{
            backgroundClip: "text",
            backgroundImage: "linear-gradient(to bottom, black 50%, white 50%)",
          }}
          whiteSpace={{
            lg: "wrap",
            md: "wrap",
          }}
          color="transparent"
        >
          Achref Gallaoui
        </Typography>
      </motion.div>
    </main>
  );
}
