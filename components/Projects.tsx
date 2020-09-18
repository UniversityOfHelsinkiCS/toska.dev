import { Box, Flex, Image, Link } from "@chakra-ui/core";
import React from "react";
import { theme } from "utils/theme";
import screenshotMock from "../assets/screenshotMock.png";

export const Projects = () => {
  return (
    <>
      <Flex justifyContent="space-evenly">
        <Image src={screenshotMock} borderRadius="5px" w="12rem" />
        <Box maxW="50%">
          <b>Oodikone</b> on Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut.
          Etiam rutrum bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow}>Lue lisää</Link>
        </Box>
      </Flex>
      <Flex justifyContent="space-evenly" my="2rem">
        <Image src={screenshotMock} borderRadius="5px" w="12rem" />
        <Box maxW="50%">
          <b>Oodikone</b> on Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut.
          Etiam rutrum bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow}>Lue lisää</Link>
        </Box>
      </Flex>
      <Flex justifyContent="space-evenly">
        <Image src={screenshotMock} borderRadius="5px" w="12rem" />
        <Box maxW="50%">
          <b>Oodikone</b> on Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut.
          Etiam rutrum bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow}>Lue lisää</Link>
        </Box>
      </Flex>
    </>
  );
};
