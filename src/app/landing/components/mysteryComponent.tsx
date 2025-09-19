import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material";
import MysteryIllustration from "./assets/mysteryIllustration.svg";
import { forwardRef, useState } from "react";
import type { TransitionProps } from "@mui/material/transitions";
import Link from "next/link";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MysteryComponent() {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    <Box
        position="absolute"
        bottom="10vh"
        right="45vw"
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
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link href="/"><Button onClick={handleClose} sx={{ cursor: "none" }}>Disagree</Button></Link>
          <Link href="https://www.fastfol.io/achref-gallaoui"><Button onClick={handleClose} sx={{ cursor: "none" }}>Agree</Button></Link>
        </DialogActions>
      </Dialog>
    </>
  )
}
