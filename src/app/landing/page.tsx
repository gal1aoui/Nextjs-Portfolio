"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Box, Stack } from "@mui/material";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import DarkIllustration from "./components/assets/darkIllustration.svg";
import LightIllustration from "./components/assets/lightIllustration.svg";
import styles from "./components/assets/page.module.css";
import CustomCursor from "./components/CustomCursor";
import MysteryComponent from "./components/mysteryComponent";
import ZoopText from "./components/nameText";

export default function Home() {
  const [isLightHovering, setIsLightHovering] = useState(false);
  const [isDarkHovering, setIsDarkHovering] = useState(false);
  const [isRocketLaunched, setIsRocketLaunched] = useState(false);

  return (
    <main className={styles.main}>
      <CustomCursor isHovering={isLightHovering || isDarkHovering} />

      {!isRocketLaunched && (
        <>
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
              {isDarkHovering && <DarkIllustration />}
            </Box>
          </Stack>

          <ZoopText title="Achref Gallaoui" />
          <MysteryComponent launchRocket={() => setIsRocketLaunched(true)} />
        </>
      )}
      {isRocketLaunched && (
        <>
          <DotLottieReact
            src="https://lottie.host/da0f4932-1c99-489c-b2a5-129b4ec1289a/4byDuXurAp.lottie"
            loop
            autoplay
          />
          <Box>
            <motion.p
              className={styles.goodbye}
              initial={{ top: "14vh", opacity: 0 }}
              animate={{ top: "1vh", opacity: 1 }}
              transition={{ duration: 2, ease: easeOut }}
            >
              Liftoff! Have fun 👋
            </motion.p>
          </Box>
        </>
      )}
    </main>
  );
}
