"use server";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import toskaLogo from "public/assets/toska-logo.svg";

export const ToskaLogo = async () => {
  return (
    <Box alignItems="center" display="flex" flexDirection="column">
      <Image
        alt="Toska logo"
        height={200}
        priority
        src={toskaLogo}
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
