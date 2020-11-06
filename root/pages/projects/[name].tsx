import { Box, Flex, Heading, Image, Link as ChakraLink } from "@chakra-ui/core";
import toskaLogo from "assets/toskaLogo.svg";
import Markdown from "components/Markdown";
import Section from "components/Section";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { join } from "path";
import { FaGithub } from "react-icons/fa";
import { theme } from "utils/theme";

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = fs
    .readdirSync(join(process.cwd(), "content", "projects"))
    .filter((file) => file.includes(".md"))
    .map((file) => file.replace(".md", ""));

  const paths = projects.map((name) => ({ params: { name } }));

  return { paths, fallback: false };
};

interface Props {
  github: string;
  title: string;
  date: string;
  content: string;
  projectName: string;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  if (!params || typeof params.name !== "string") {
    // shouldn't happen..? not sure why this is needed
    throw Error("No params provided");
  }

  const content = await import(`content/projects/${params.name}.md`);
  const parsed = matter(content.default);

  if (!parsed.data.github || !parsed.data.title || !parsed.data.date) {
    throw Error("Markdown file doesn't have correct gray matter");
  }

  return {
    props: {
      github: parsed.data.github as string,
      title: parsed.data.title as string,
      date: parsed.data.date as string,
      content: parsed.content,
      projectName: params.name,
    },
  };
};

const ProjectPage = ({ content, github, title, date, projectName }: Props) => (
  <>
    <Head>
      <title>{`${title} - Projektit - TOSKA`}</title>
    </Head>
    <Section bg="WHITE" p={4}>
      <NextLink href="/">
        <a>
          <Image src={toskaLogo} w="6rem" />
        </a>
      </NextLink>
    </Section>
    <Section h="100vh" bg="BLACK">
      <Image src={`/projects/${projectName}.png`} borderRadius="5px" />
      <Box m={4}>
        <Heading>{title}</Heading>
        <ChakraLink
          color={theme.toskaRed}
          href={`https://github.com/UniversityOfHelsinkiCS/${github}`}
        >
          <Flex alignItems="center">
            <Box mr={1}>
              <FaGithub />
            </Box>
            Github
          </Flex>
        </ChakraLink>
        <Box color={theme.textGrey} mb={4}>
          {date}
        </Box>
        <Markdown value={content} />
      </Box>
    </Section>
  </>
);

export default ProjectPage;
