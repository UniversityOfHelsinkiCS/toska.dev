"use client";

import { Stack } from "@mui/material";
import { MuiMarkdown } from "mui-markdown";

export const MarkdownContainer = ({ value }: { value: string }) => {
  return (
    <Stack spacing={1}>
      {value.split("\n").map((line, index) => (
        <MuiMarkdown key={index}>{line}</MuiMarkdown>
      ))}
    </Stack>
  );
};
