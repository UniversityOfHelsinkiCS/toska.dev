"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";

import toskaLogo from "@/assets/toska-logo.svg";

export const ToskaLogo = () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Image
        alt="Toska logo"
        height={200}
        src={toskaLogo.src}
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
