"use client";

import { Link } from "@mui/material";
import NextLink from "next/link";

export const ExternalLink = ({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <Link
      component={NextLink}
      href={href}
      rel="noopener noreferrer"
      sx={{
        "&:hover": {
          color: "primary.main",
        },
        alignItems: "center",
        display: "flex",
        gap: 1,
      }}
      target="_blank"
    >
      {icon}
      {text}
    </Link>
  );
};
