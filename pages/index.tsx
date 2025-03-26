import { Stack } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { join } from "path";

import { Footer } from "components/Footer";
import { Introduction } from "components/Introduction";
import { Members } from "components/Members";
import { Projects } from "components/Projects";
import { ToskaLogo } from "components/ToskaLogo";
import { Section } from "components/Section";
import { Project } from "types";

export const getStaticProps = async () => {
  const introText = await require("../content/intro.md");

  const projects = await Promise.all(
    fs
      .readdirSync(join(process.cwd(), "content", "projects"))
      .filter((file) => file.includes(".md"))
      .map((file) => file.replace(".md", ""))
      .map(async (project) => {
        const content = await import(`content/projects/${project}.md`);
        const parsed = matter(content.default);

        if (!parsed.data.github || !parsed.data.title) {
          throw Error("Markdown file doesn't have correct gray matter");
        }

        return {
          content: parsed.content,
          name: project,
          title: parsed.data.title as string,
        } as Project;
      })
  );

  return { props: { introText: introText.default as string, projects } };
};

const IndexPage = ({
  introText,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const sections = [
    {
      key: "logo",
      title: null,
      component: <ToskaLogo />,
    },
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
    {
      key: "members",
      title: "Jäsenet",
      component: <Members />,
    },
    {
      key: "footer",
      title: null,
      component: <Footer />,
    },
  ] as const;

  return (
    <>
      <Head>
        <title>Toska</title>
      </Head>
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
    </>
  );
};

export default IndexPage;
