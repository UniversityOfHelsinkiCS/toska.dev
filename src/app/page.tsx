import { Stack } from "@mui/material";
import fs from "fs";
import { Metadata } from "next";
import path from "path";

import { Introduction } from "@/components/Introduction";
import { Members } from "@/components/Members";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/Section";
import { ToskaLogo } from "@/components/ToskaLogo";
import { getProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Toska",
  description: "Toskan kotisivut",
};

export default async function IndexPage() {
  const introPath = path.join(process.cwd(), "src", "content", "intro.md");
  const introText = fs.readFileSync(introPath, "utf8");

  const projects = await getProjects();

  const sections = [
    { key: "logo", title: null, component: <ToskaLogo /> },
    {
      key: "introduction",
      title: "Toska",
      component: <Introduction introText={introText} />,
    },
    {
      key: "projects",
      title: "Projektit",
      component: <Projects projects={projects} />,
    },
    { key: "members", title: "Jäsenet", component: <Members /> },
  ] as const;

  return (
    <Stack>
      {sections.map((section, index) => (
        <Section
          background={index % 2 === 0}
          key={section.key}
          title={section.title}
        >
          {section.component}
        </Section>
      ))}
    </Stack>
  );
}
