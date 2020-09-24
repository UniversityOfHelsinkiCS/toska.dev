import { BoxProps, Container, Flex, Heading } from "@chakra-ui/core";
import React from "react";
import { theme } from "../utils/theme";

interface SectionProps {
  bg: "BLACK" | "WHITE";
  header?: string;
}

const Section: React.FC<SectionProps & BoxProps> = ({
  bg,
  header,
  ...props
}) => {
  return (
    <Flex
      backgroundColor={
        bg === "BLACK" ? theme.backgroundBlack : theme.backgroundWhite
      }
      color={bg === "BLACK" ? theme.backgroundWhite : theme.backgroundBlack}
      py={20}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      <Container centerContent>
        {header && (
          <Heading
            textTransform="uppercase"
            mb={16}
            borderTop="5px solid"
            borderColor={bg === "BLACK" ? theme.toskaYellow : theme.toskaRed}
          >
            {header}
          </Heading>
        )}
        {props.children}
      </Container>
    </Flex>
  );
};

export default Section;
