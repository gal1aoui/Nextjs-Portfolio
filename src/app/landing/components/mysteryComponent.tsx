import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import type { TransitionProps } from "@mui/material/transitions";
import Link from "next/link";
import { forwardRef, useState } from "react";
import MysteryIllustration from "./assets/mysteryIllustration.svg";
import styles from "./assets/page.module.css";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface MysteryComponentProps {
  launchRocket: () => void;
}

export default function MysteryComponent({ launchRocket }: MysteryComponentProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleRocketLaunching = () => {
    launchRocket();
    setTimeout(() => {
      window.location.href = "https://www.fastfol.io/achref-gallaoui";
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        position="absolute"
        top="10vh"
        right="10vw"
        display={{ xs: "none", md: "none", lg: "block" }}
        onClick={handleClickOpen}
      >
        <MysteryIllustration />
      </Box>
      <Dialog
        open={open}
        sx={{ cursor: "none" }}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent className={styles.dialogPaper}>
          <DialogTitle>🚀 Ready to Take the Rocket?</DialogTitle>
          <DialogContentText sx={{ mixBlendMode: "difference", color: "white" }}>
            You’re about to launch into my AI-powered portfolio experience. It may feel like a wild
            ride, but here’s what you’ll discover along the way:
            <br />• My skills and background, presented interactively
            <br />• Real projects I’ve worked on (with impact)
            <br />• A chance to see how I mix tech + creativity in my work
            <br />
            Choose wisely:
          </DialogContentText>
          <DialogActions sx={{ justifyContent: "space-between" }}>
            <Link href="/" className={styles.disagreeButton}>
              Leave Me Here
            </Link>
            <Link href="#" className={styles.agreeButton} onClick={handleRocketLaunching}>
              Take the Rocket
            </Link>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
