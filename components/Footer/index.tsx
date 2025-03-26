import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  SportsEsports as SportsEsportsIcon,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
      key: "doom",
      name: "Doom",
      href: "https://doom.toska.dev",
      icon: <SportsEsportsIcon fontSize="small" />,
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
            &copy; 2017-2025 Toska
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
