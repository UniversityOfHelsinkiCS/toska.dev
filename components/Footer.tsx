import { Box, Flex, Image } from "@chakra-ui/react";
import { FaGamepad, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import toskaMopo from "assets/toskaMopo.png";
import { Section } from "components/Section";
import { theme } from "utils/theme";

export const Footer = () => {
  return (
    <Section>
      <Image src={toskaMopo.src} loading="lazy" w="4rem" mb="1rem" />
      <Flex color={theme.toskaYellow} fontSize="4rem">
        <a href="https://github.com/UniversityOfHelsinkiCS">
          <Box as={FaGithub} m="1rem" />
        </a>
        <a href="mailto:grp-toska@helsinki.fi">
          <Box as={MdEmail} m="1rem" />
        </a>
        <a href="https://doom.toska.dev">
          <Box as={FaGamepad} m="1rem" />
        </a>
      </Flex>
      <a href="https://paivinenjukka.work/" style={{ color: "#a5a5a5" }}>
        Toska-logon suunnitellut Jukka Päivinen
      </a>
    </Section>
  );
};
