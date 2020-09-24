import { Box, Flex, Grid, Image, Link } from "@chakra-ui/core";
import { Members } from "components/Members";
import { Projects } from "components/Projects";
import Section from "components/Section";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { theme } from "utils/theme";
import toskaLogo from "../assets/toskaLogo.svg";
import toskaMopo from "../assets/toskaMopo.png";

const IndexPage = () => (
  <>
    <Section bg="WHITE">
      <Grid templateColumns="1fr 5fr 1fr">
        <Box ml="-10rem" mt="-2rem" fontWeight="bold" fontSize="1.2rem">
          <Link
            borderBottom="4px solid"
            borderColor={theme.toskaRed}
            _hover={{}}
          >
            Blogi
          </Link>
        </Box>
        <img src={toskaLogo} style={{ width: "24rem" }} />
      </Grid>
      <Box textAlign="center" letterSpacing={1} color={theme.textGrey}>
        Helsingin yliopiston tietojenkäsittelytieteen osaston
        sovelluskehitysakatemia
      </Box>
      <Box mt={12}>
        <Box as="b">TOSKA</Box> on Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi rutrum ultrices nisi, nec laoreet sapien
        porttitor ut. Etiam rutrum bibendum lorem, eget lobortis mauris viverra
        et.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum
        ultrices nisi, nec laoreet sapien porttitor ut. Etiam rutrum bibendum
        lorem, eget lobortis mauris viverra et.
      </Box>
    </Section>
    <Section bg="BLACK" header="Projektit">
      <Projects />
    </Section>
    <Section bg="WHITE" header="Jäsenet">
      <Members />
    </Section>
    <Section bg="BLACK">
      <>
        <Image src={toskaMopo} loading="lazy" w="4rem" mb="1rem" />
        <Flex color={theme.toskaYellow} fontSize="4rem">
          <a href="https://github.com/UniversityOfHelsinkiCS">
            <Box as={FaGithub} m="1rem" />
          </a>
          <a href="mailto:grp-toska@helsinki.fi">
            <Box as={MdEmail} m="1rem" />
          </a>
        </Flex>
      </>
    </Section>
  </>
);

export default IndexPage;
