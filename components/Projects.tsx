import { Box, Flex, Heading, Image, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { theme } from "utils/theme";
import screenshotMock from "../assets/screenshotMock.png";
import Markdown from "./Markdown";

export const Projects = ({
  projects,
}: {
  projects: {
    title: string;
    content: string;
    name: string;
  }[];
}) => {
  return (
    <>
      {projects.map((project, i) => (
        <Flex key={project.name} justifyContent="space-evenly" my={12}>
          {i % 2 === 0 && (
            <Image
              src={`/projects/${project.name}.png`}
              borderRadius="5px"
              w="12rem"
            />
          )}
          <Box maxW="75%" m={6}>
            <Heading
              size="sm"
              borderBottom="2px solid"
              borderColor={theme.toskaYellow}
              mb="0.5rem"
            >
              {project.title}
            </Heading>
            <Markdown value={project.content.split("\n")[1]} />{" "}
            <NextLink href={`/projects/${project.name}`}>
              <Link color={theme.toskaYellow}>Lue lisää</Link>
            </NextLink>
          </Box>
          {i % 2 !== 0 && (
            <Image
              objectFit="cover"
              src={screenshotMock}
              borderRadius="5px"
              w="12rem"
            />
          )}
        </Flex>
      ))}
    </>
  );
};
