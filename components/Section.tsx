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
      py="2rem"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      {...props}
    >
      <Container centerContent>
        {header && (
          <Heading textTransform="uppercase" mb="2rem">
            {header}
          </Heading>
        )}
        {props.children}
      </Container>
    </Flex>
  );
};

export default Section;
