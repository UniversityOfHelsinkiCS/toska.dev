"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

export const Section = ({
  background,
  children,
  id,
  title,
}: {
  background?: boolean;
  children: React.ReactNode;
  id?: string;
  title?: string | null;
}) => {
  return (
    <Box
      id={id}
      sx={{
        bgcolor: (theme) =>
          background
            ? theme.palette.backgroundDark1
            : theme.palette.backgroundDark2,
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Stack gap={2}>
          {title && (
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
          )}
          <Box>{children}</Box>
        </Stack>
      </Container>
    </Box>
  );
};
