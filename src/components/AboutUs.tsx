"use server";

import { MarkdownContainer } from "@/components/MarkdownContainer";

export const AboutUs = async ({ introText }: { introText: string }) => {
  return <MarkdownContainer value={introText} />;
};
