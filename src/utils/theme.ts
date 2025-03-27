"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseTheme = {
  typography: {
    fontFamily: "var(--font-lato)",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#e99939",
    },
    secondary: {
      main: "#aa4137",
    },
    background: {
      default: "#3d3d3f",
    },
    backgroundDark1: "#242124",
    backgroundDark2: "#3d3d3f",
  },
} as const;

type CustomPalette = typeof baseTheme.palette;

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export const theme = createTheme(baseTheme as ThemeOptions);
