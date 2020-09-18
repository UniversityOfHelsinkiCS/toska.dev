import { Box, Flex, Image } from "@chakra-ui/core";
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
      <img src={toskaLogo} style={{ width: "24rem" }} />
      <Box textAlign="center" letterSpacing={1} color={theme.textGrey}>
        Helsingin yliopiston tietojenkäsittelytieteen osaston
        sovelluskehitysakatemia
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
          <Box as={FaGithub} m="1rem" />
          <Box as={MdEmail} m="1rem" />
        </Flex>
      </>
    </Section>
  </>
);

export default IndexPage;
