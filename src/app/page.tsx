"use client";
import { Grid, Typography } from "@mui/material";

export default function page() {
  return (
    <Grid container rowSpacing={1} columnSpacing={1} height="100vh">
      <Grid size={{ sm: 12, md: 3 }}>
        <Typography variant="body1">About me section</Typography>
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <Typography variant="body1">Projects and about section</Typography>
      </Grid>
      <Grid size={{ sm: 12, md: 3 }}>
        <Typography variant="body1">Projects and certifications section</Typography>
      </Grid>
    </Grid>
  );
}
