import { Box, Flex, Heading, Image, Link } from "@chakra-ui/core";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { theme } from "utils/theme";
import screenshotMock from "../assets/screenshotMock.png";

export const Projects = () => {
  const [watching, setWatching] = useState(false);
  return (
    <>
      <Flex
        flexDirection={watching ? "column" : "row"}
        justifyContent="space-evenly"
      >
        <Image
          src={screenshotMock}
          borderRadius="5px"
          w={watching ? undefined : "12rem"}
          m={watching ? "auto" : "0"}
        />
        <Box display={watching ? "none" : "block"} maxW="50%" m={4}>
          <b>Oodikone</b> on Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut.
          Etiam rutrum bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow} onClick={() => setWatching(true)}>
            Lue lisää
          </Link>
        </Box>
        <Box display={watching ? "block" : "none"} m={4}>
          <Heading>Oodikone</Heading>
          <Link
            color={theme.toskaRed}
            href="https://github.com/UniversityOfHelsinkiCS/oodikone"
          >
            <Flex alignItems="center">
              <Box mr={1}>
                <FaGithub />
              </Box>
              Github
            </Flex>
          </Link>
          <Box color={theme.textGrey} mb={4}>
            Maaliskuu 2016 -
          </Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
          ultrices nisi, nec laoreet sapien porttitor ut. Etiam rutrum bibendum
          lorem, eget lobortis mauris viverra et.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. <br />
          <br />
          Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut. Etiam
          rutrum bibendum lorem, eget lobortis mauris viverra et.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Morbi rutrum ultrices
          nisi, nec laoreet sapien porttitor ut.
          <br />
          <br /> Etiam rutrum bibendum lorem, eget lobortis mauris viverra
          et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          rutrum ultrices nisi, nec laoreet sapien porttitor ut. Etiam rutrum
          bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow} onClick={() => setWatching(false)}>
            Romahduta
          </Link>
        </Box>
      </Flex>
      <Flex justifyContent="space-evenly" my={24}>
        <Box maxW="50%">
          <b>Oodikone</b> on Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Morbi rutrum ultrices nisi, nec laoreet sapien porttitor ut.
          Etiam rutrum bibendum lorem, eget lobortis mauris viverra et.{" "}
          <Link color={theme.toskaYellow}>Lue lisää</Link>
        </Box>
        <Image src={screenshotMock} borderRadius="5px" w="12rem" />
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
