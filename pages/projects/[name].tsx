import { Box, Flex, Heading, Image } from "@chakra-ui/core";
import toskaLogo from "assets/toskaLogo.svg";
import Section from "components/Section";
import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { join } from "path";
import { FaGithub } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { theme } from "utils/theme";

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = fs
    .readdirSync(join(process.cwd(), "content", "projects"))
    .filter((file) => file.includes(".md"))
    .map((file) => file.replace(".md", ""));

  const paths = projects.map((name) => ({ params: { name } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await import(`content/projects/${params.name}.md`);
  const parsed = matter(content.default);

  console.log({ parsed });

  return { props: { content: parsed.content, ...parsed.data } };
};

const ProjectPage = ({
  content,
  github,
  title,
  date,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Section bg="WHITE" p={4}>
      <Link href="/">
        <a>
          <Image src={toskaLogo} w="6rem" />
        </a>
      </Link>
    </Section>
    <Section h="100vh" bg="BLACK">
      <Box m={4}>
        <Heading>{title}</Heading>
        <Link
          color={theme.toskaRed}
          href={`https://github.com/UniversityOfHelsinkiCS/${github}`}
        >
          <Flex alignItems="center">
            <Box mr={1}>
              <FaGithub />
            </Box>
            Github
          </Flex>
        </Link>
        <Box color={theme.textGrey} mb={4}>
          {date}
        </Box>
        <ReactMarkdown source={content} />
      </Box>
    </Section>
  </>
);

export default ProjectPage;
