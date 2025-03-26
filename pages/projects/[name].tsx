import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { join } from "path";

import toskaLogo from "assets/toska-logo.svg";
import { MarkdownContainer } from "components/MarkdownContainer";
import { Section } from "components/Section";
import { Project } from "types";
import { Link, Stack, Typography } from "@mui/material";

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = fs
    .readdirSync(join(process.cwd(), "content", "projects"))
    .filter((file) => file.includes(".md"))
    .map((file) => file.replace(".md", ""));

  const paths = projects.map((name) => ({ params: { name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Project> = async ({ params }) => {
  if (!params || typeof params.name !== "string") {
    throw Error("No params provided");
  }

  const content = await import(`content/projects/${params.name}.md`);
  const parsed = matter(content.default);

  if (!parsed.data.github || !parsed.data.title || !parsed.data.date) {
    throw Error("Markdown file doesn't have correct gray matter");
  }

  return {
    props: {
      content: parsed.content,
      date: parsed.data.date as string,
      gitHub: parsed.data.github as string,
      name: params.name,
      title: parsed.data.title as string,
    },
  };
};

const ProjectPage = ({ content, date, gitHub, name, title }: Project) => (
  <>
    <Head>
      <title>{`${title} - Projektit - Toska`}</title>
    </Head>
    <Section background>
      <NextLink href="/">
        <Image alt="Toska logo" height={200} src={toskaLogo.src} width={300} />
      </NextLink>
    </Section>
    <Section>
      <Stack gap={2}>
        <Image
          alt="Screenshot of the project"
          src={`/projects/${name}.png`}
          height={100}
          width={100}
        />
        <Typography component="h2" variant="h2">
          {title}
        </Typography>
        <Link href={`https://github.com/UniversityOfHelsinkiCS/${gitHub}`}>
          GitHub
        </Link>
        <Typography color="text.secondary">{date}</Typography>
        <MarkdownContainer value={content} />
      </Stack>
    </Section>
  </>
);

export default ProjectPage;
