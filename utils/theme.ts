import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseTheme = {
  palette: {
    toskaYellow: "#e99939",
    toskaRed: "#aa4137",
    backgroundBlack: "#242124",
    backgroundWhite: "#FEFEFA",
    textGrey: "#6f6f6f",
  },
} as const;

type CustomPalette = typeof baseTheme.palette;

declare module "@mui/material/styles" {
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

export const theme = createTheme(baseTheme as ThemeOptions);
