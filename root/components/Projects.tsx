import { Badge, Box, Flex, Heading, Image, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import { theme } from "utils/theme";
import Markdown from "./Markdown";

export const Projects = ({
  projects,
}: {
  projects: {
    title: string;
    content: string;
    name: string;
    tags: string | null;
    key: number | null;
  }[];
}) => {
  return (
    <>
      {projects
        .sort((a, b) => {
          const aKey = a.key ?? 0;
          const bKey = b.key ?? 0;

          if (aKey === bKey) return a.title.localeCompare(b.title);

          return aKey - bKey;
        })
        .map((project, i) => {
          const isEven = i % 2 === 0;
          return (
            <Flex key={project.name} justifyContent="space-evenly" my={12}>
              {isEven && (
                <Image
                  objectFit="cover"
                  src={`/projects/${project.name}.png`}
                  width="12rem"
                  height="12rem"
                  my="auto"
                />
              )}
              <Box maxW="75%" m={6}>
                <Heading
                  size="sm"
                  borderBottom="2px solid"
                  borderColor={isEven ? theme.toskaYellow : theme.toskaRed}
                  mb="0.5rem"
                >
                  {project.title}
                </Heading>
                {project.tags && (
                  <Box mb="0.5rem">
                    {project.tags.split(",").map((tag) => (
                      <Badge color={theme.toskaYellow} mr={2} key={tag}>
                        {tag}
                      </Badge>
                    ))}
                  </Box>
                )}
                <Markdown value={project.content.split("\n")[1]} />{" "}
                <NextLink href={`/projects/${project.name}`}>
                  <Link color={isEven ? theme.toskaYellow : theme.toskaRed}>
                    Lue lisää
                  </Link>
                </NextLink>
              </Box>
              {!isEven && (
                <Image
                  objectFit="cover"
                  src={`/projects/${project.name}.png`}
                  width="12rem"
                  height="12rem"
                  my="auto"
                />
              )}
            </Flex>
          );
        })}
    </>
  );
};
