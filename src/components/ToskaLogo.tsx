"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const ToskaLogo = () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Image
        alt="Toska logo"
        height={200}
        src="./assets/toska-logo.svg"
        title="Toska logo, design by Jukka Päivinen"
        width={300}
      />
      <Typography color="text.secondary">
        Helsingin yliopiston tietojenkäsittelytieteen osaston
        sovelluskehitysakatemia
      </Typography>
    </Box>
  );
};
