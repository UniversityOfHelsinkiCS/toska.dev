import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
} from "@chakra-ui/core";
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
  tags: string;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
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
      github: parsed.data.github as string,
      title: parsed.data.title as string,
      tags: parsed.data.tags ? parsed.data.tags : null,
      date: parsed.data.date as string,
      content: parsed.content,
      projectName: params.name,
    },
  };
};

const ProjectPage = ({
  content,
  github,
  title,
  date,
  projectName,
  tags,
}: Props) => (
  <>
    <Head>
      <title>{`${title} - Projektit - Toska`}</title>
    </Head>
    <Section bg="WHITE" p={4}>
      <NextLink href="/">
        <a>
          <Image src={toskaLogo} w="6rem" />
        </a>
      </NextLink>
    </Section>
    <Section bg="BLACK" py={2}>
      <Box m={4}>
        <Image
          src={`/projects/${projectName}.png`}
          objectFit="cover"
          mx="auto"
        />
        <Heading mt={6}>{title}</Heading>
        {tags && (
          <Box mt={1} mb={2}>
            {tags.split(",").map((tag) => (
              <Badge color={theme.toskaYellow} mr={2} key={tag}>
                {tag}
              </Badge>
            ))}
          </Box>
        )}
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
