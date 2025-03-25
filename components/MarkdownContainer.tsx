import React from "react";
import { MuiMarkdown } from "mui-markdown";

export const MarkdownContainer = ({ value }: { value: string }) => {
  return <MuiMarkdown>{value}</MuiMarkdown>;
};
