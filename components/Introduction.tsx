import { MarkdownContainer } from "components/MarkdownContainer";

export const Introduction = ({ introText }: { introText: string }) => {
  return <MarkdownContainer value={introText} />;
};
