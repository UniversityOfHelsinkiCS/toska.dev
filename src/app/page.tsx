import { Stack } from "@mui/material";
import fs from "fs";
import { Metadata } from "next";
import path from "path";

import { AboutUs } from "@/components/AboutUs";
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
    {
      key: "logo",
      id: "logo",
      title: null,
      component: <ToskaLogo />,
    },
    {
      key: "about-us",
      id: "meista",
      title: "Meistä",
      component: <AboutUs introText={introText} />,
    },
    {
      key: "projects",
      id: "projektit",
      title: "Projektit",
      component: <Projects projects={projects} />,
    },
    {
      key: "members",
      id: "jasenet",
      title: "Jäsenet",
      component: <Members />,
    },
  ] as const;

  return (
    <Stack>
      {sections.map((section, index) => (
        <Section
          background={index % 2 === 0}
          id={section.id}
          key={section.key}
          title={section.title}
        >
          {section.component}
        </Section>
      ))}
    </Stack>
  );
}
