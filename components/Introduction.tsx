import Markdown from "components/Markdown";
import { Section } from "components/Section";

export const Introduction = ({ introText }: { introText: string }) => {
  return (
    <Section title="Mikä Toska?">
      <Markdown value={introText} />
    </Section>
  );
};
