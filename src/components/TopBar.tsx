import { AppBar, Button, Box, Container, Toolbar } from "@mui/material";
import Image from "next/image";

import toskaLogo from "@/assets/toska-logo.svg";
import Link from "next/link";

const navItems = [
  { key: "about-us", href: "#meista", text: "Meistä" },
  { key: "projects", href: "#projektit", text: "Projektit" },
  { key: "members", href: "#jasenet", text: "Jäsenet" },
];

export const TopBar = () => {
  return (
    <Box>
      <AppBar component="nav">
        <Container maxWidth="md">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/">
                <Image
                  alt="Toska"
                  src={toskaLogo}
                  height={50}
                  width={50}
                  priority
                />
              </Link>
            </Box>
            <Box>
              {navItems.map((item) => (
                <Link href={item.href}>
                  <Button key={item.key}>{item.text}</Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </Box>
  );
};
