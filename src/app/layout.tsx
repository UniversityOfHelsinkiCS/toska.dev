import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";

import { Footer } from "@/components/Footer";
import { TopBar } from "@/components/TopBar";
import { theme } from "@/utils/theme";

export const viewPort: Viewport = {
  themeColor: "#e99939",
};

export const metadata: Metadata = {
  title: {
    default: "Toska",
    template: "%s | Toska",
  },
  description:
    "Toska on Helsingin yliopiston tietojenkäsittelytieteen osaston sovelluskehitysakatemia, joka kehittää yliopiston opetushallinnollisia sovelluksia",
  creator: "Toska",
  authors: [{ name: "Toska", url: "https://toska.dev" }],
};

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.variable}>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopBar />
            <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
