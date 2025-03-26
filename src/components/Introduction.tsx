"use client";

import { MarkdownContainer } from "src/components/MarkdownContainer";

export const Introduction = ({ introText }: { introText: string }) => {
  return <MarkdownContainer value={introText} />;
};
