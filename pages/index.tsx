import { Container } from "@mui/material";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { join } from "path";

import { Footer } from "components/Footer";
import { Members } from "components/Members";
import { Projects } from "components/Projects";
import { Section } from "components/Section";
import { ToskaLogo } from "components/ToskaLogo";
import { Introduction } from "components/Introduction";

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

        if (parsed.data.key && isNaN(Number(parsed.data.key))) {
          throw Error("Key provided has to be a number");
        }

        return {
          title: parsed.data.title as string,
          tags: parsed.data.tags ? (parsed.data.tags as string) : null,
          key: parsed.data.key ? Number(parsed.data.key) : null,
          content: parsed.content,
          name: project,
        };
      })
  );

  return { props: { introText: introText.default as string, projects } };
};

const IndexPage = ({
  introText,
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Container maxWidth="lg">
    <Head>
      <title>Toska</title>
    </Head>
    <Section bg="WHITE">
      <ToskaLogo />
    </Section>
    <Section bg="WHITE">
      <Introduction introText={introText} />
    </Section>
    <Section bg="BLACK" header="Projektit">
      <Projects projects={projects} />
    </Section>
    <Section bg="WHITE" header="Jäsenet" wide>
      <Members />
    </Section>
    <Section bg="BLACK">
      <Footer />
    </Section>
  </Container>
);

export default IndexPage;
