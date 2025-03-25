import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";

import { MarkdownContainer } from "components/MarkdownContainer";
import { Project } from "types";
import { theme } from "utils/theme";

export const Projects = ({ projects }: { projects: Project[] }) => {
  const [isDesktopWidth, setIsDesktopWidth] = useState(false);
  const [minWidthMediaQuery] = useMediaQuery("(min-width: 800px)");

  useEffect(() => {
    if (minWidthMediaQuery !== isDesktopWidth) {
      setIsDesktopWidth(minWidthMediaQuery);
    }
  }, [minWidthMediaQuery]);

  return (
    <>
      {projects.map((project, i) => {
        const isEven = i % 2 === 0;
        return (
          <Flex
            key={project.name}
            justifyContent="space-evenly"
            align="center"
            my={12}
            direction={isDesktopWidth ? "row" : "column"}
          >
            {(!isDesktopWidth || isEven) && (
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
              <MarkdownContainer value={project.content.split("\n")[1]} />{" "}
              <NextLink href={`/projects/${project.name}`}>
                <Link color={isEven ? theme.toskaYellow : theme.toskaRed}>
                  Lue lisää
                </Link>
              </NextLink>
            </Box>
            {isDesktopWidth && !isEven && (
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
