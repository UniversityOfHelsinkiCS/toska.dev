import { Box, Flex, Image } from "@chakra-ui/core";
import toskaLogo from "assets/toskaLogo.svg";
import toskaMopo from "assets/toskaMopo.png";
import { Members } from "components/Members";
import { Projects } from "components/Projects";
import Section from "components/Section";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import { theme } from "utils/theme";

export const getStaticProps = async () => {
  const introText = await import("content/intro.md");

  return { props: { introText: introText.default } };
};

const IndexPage = ({ introText }: { introText: string }) => (
  <>
    <Head>
      <title>TOSKA</title>
    </Head>
    <Section bg="WHITE">
      <img src={toskaLogo} style={{ width: "24rem" }} />
      <Box textAlign="center" letterSpacing={1} color={theme.textGrey}>
        Helsingin yliopiston tietojenkäsittelytieteen osaston
        sovelluskehitysakatemia
      </Box>
      <Box mt={12}>
        <ReactMarkdown source={introText} />
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
