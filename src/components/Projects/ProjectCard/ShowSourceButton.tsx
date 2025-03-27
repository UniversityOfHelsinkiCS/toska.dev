"use client";

import { Button, Link } from "@mui/material";

export const ShowSourceButton = ({
  repositoryName,
}: {
  repositoryName: string;
}) => {
  return (
    <Link
      href={`https://github.com/UniversityOfHelsinkiCS/${repositoryName}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Button
        sx={{
          color: (theme) => theme.palette.secondary.light,
          "&:hover": {
            color: (theme) => theme.palette.secondary.main,
          },
        }}
      >
        Näytä lähdekoodi
      </Button>
    </Link>
  );
};
