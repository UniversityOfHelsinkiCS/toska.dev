"use client";

import {
  AppBar,
  Button,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

const navItems = ["Toska", "Projektit", "Jäsenet"];

export const TopBar = () => {
  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Typography component="div" sx={{ flexGrow: 1 }} variant="h6">
              Toska
            </Typography>
            <Box>
              {navItems.map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
