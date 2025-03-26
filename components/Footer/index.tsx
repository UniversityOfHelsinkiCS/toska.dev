import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  Palette as PaletteIcon,
} from "@mui/icons-material";
import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";

import universityLogo from "assets/hy-logo.png";
import { ExternalLink } from "./ExternalLink";

export const Footer = () => {
  const footerItems = [
    {
      key: "email",
      name: "Sähköposti",
      href: "mailto:grp-toska@helsinki.fi",
      icon: <EmailIcon fontSize="small" />,
    },
    {
      key: "github",
      name: "GitHub",
      href: "https://github.com/UniversityOfHelsinkiCS",
      icon: <GitHubIcon fontSize="small" />,
    },
    {
      key: "logo-credit",
      name: "Logon suunnittelu: Jukka Päivinen",
      href: "https://www.jukkapaivinen.com",
      icon: <PaletteIcon fontSize="small" />,
    },
  ];

  return (
    <Stack alignItems="center" direction="row" justifyContent="space-between">
      <Box>
        <Stack gap={3}>
          <Stack gap={1}>
            {footerItems.map((item) => (
              <ExternalLink
                href={item.href}
                icon={item.icon}
                key={item.key}
                text={item.name}
              />
            ))}
          </Stack>
          <Typography color="text.secondary" variant="body2">
            <Link
              color="inherit"
              href="https://doom.toska.dev"
              underline="none"
            >
              &copy;
            </Link>{" "}
            2017–2025 Toska
          </Typography>
        </Stack>
      </Box>
      <Link
        href="https://www.helsinki.fi"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt="Helsingin yliopiston logo"
          height={1438 / 10}
          src={universityLogo.src}
          title="Helsingin yliopiston logo"
          width={1358 / 10}
        />
      </Link>
    </Stack>
  );
};
