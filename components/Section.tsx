import { Box, Container, Typography } from "@mui/material";

export const Section = ({
  background,
  children,
  title,
}: {
  background: boolean;
  children: React.ReactNode;
  title: string | null;
}) => {
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          background
            ? theme.palette.backgroundDark1
            : theme.palette.backgroundDark2,
        padding: 2,
      }}
    >
      <Container maxWidth="md">
        {title && (
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
        )}
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};
