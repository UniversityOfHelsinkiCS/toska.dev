import { Box, Flex, Heading, Link } from "@chakra-ui/core";
import Section from "components/Section";
import { FaGithub } from "react-icons/fa";
import { theme } from "utils/theme";

const ProjectPage = () => (
  <>
    <Section h="0rem" bg="WHITE">
      Back
    </Section>
    <Section h="100vh" bg="BLACK">
      <Box m={4}>
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
        rutrum bibendum lorem, eget lobortis mauris viverra et.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Morbi rutrum ultrices nisi, nec
        laoreet sapien porttitor ut.
        <br />
        <br /> Etiam rutrum bibendum lorem, eget lobortis mauris viverra
        et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
        ultrices nisi, nec laoreet sapien porttitor ut. Etiam rutrum bibendum
        lorem, eget lobortis mauris viverra et.
      </Box>
    </Section>
  </>
);

export default ProjectPage;
