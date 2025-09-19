import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./assets/page.module.css";

interface ZoopTextProps {
  title: string;
}

export default function ZoopText({ title }: Readonly<ZoopTextProps>) {
  return (
    <Box className={styles.centeredText}>
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
        whiteSpace="wrap"
        color="transparent"
      >
        {title.split("").map((char, index) => {
          return (
            <motion.span
              key={index.toString()}
              whileHover={{ color: "#7DE2D1" }}
              transition={{
                ease: "easeIn",
                duration: 0.5,
              }}
            >
              {char}
            </motion.span>
          );
        })}
      </Typography>
    </Box>
  );
}
