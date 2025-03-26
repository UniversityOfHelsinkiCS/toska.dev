import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { theme } from "@/utils/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
