import { Box, Paper, Typography } from "@mui/material";

export const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => {
  return (
    <Paper sx={{ padding: 2 }} variant="outlined">
      <Typography component="h2" variant="h5">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Paper>
  );
};
