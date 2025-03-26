"use client";

import { MarkdownContainer } from "src/components/MarkdownContainer";

export const AboutUs = ({ introText }: { introText: string }) => {
  return <MarkdownContainer value={introText} />;
};
