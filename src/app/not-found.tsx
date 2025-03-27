import { Container, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";

import { Toskamopo } from "@/components/Toskamopo";

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Stack gap={2} sx={{ alignItems: "center", py: 4 }}>
        <Toskamopo />
        <Typography variant="h2">404</Typography>
        <Typography variant="body1">Sivua ei löytynyt</Typography>
        <Link component={NextLink} href="/">
          Takaisin etusivulle
        </Link>
      </Stack>
    </Container>
  );
};

export default NotFound;
