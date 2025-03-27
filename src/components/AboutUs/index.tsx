"use server";

import { MarkdownContainer } from "@/components/MarkdownContainer";
import { Stack } from "@mui/material";

import { Toskamopo } from "./Toskamopo";

export const AboutUs = async ({ introText }: { introText: string }) => {
  return (
    <Stack alignItems="center" direction={{ xs: "column", sm: "row" }} gap={4}>
      <MarkdownContainer value={introText} />
      <Toskamopo />
    </Stack>
  );
};
