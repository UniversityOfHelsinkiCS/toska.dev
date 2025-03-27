"use server";

import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { NavigationItems } from "./NavigationItems";

export const TopBar = async () => {
  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <NavigationItems />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
