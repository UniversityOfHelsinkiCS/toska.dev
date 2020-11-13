import { Badge, Box, Flex, Image, Wrap, WrapItem } from "@chakra-ui/core";
import members from "content/members.json";
import React from "react";
import { theme } from "utils/theme";

const getDateString = (
  joinedDate?: { month: number; year: number },
  alumnDate?: { month: number; year: number }
) => {
  if (!joinedDate) return "";
  if (!alumnDate) return `${joinedDate.month}.${joinedDate.year}`;

  return `${joinedDate.month}.${joinedDate.year} - ${alumnDate.month}.${alumnDate.year}`;
};

export const Members = () => {
  return (
    <Wrap justify="center" spacing={8}>
      {members.map((member, index) => (
        <WrapItem
          as="div"
          display="flex"
          flexDir="column"
          key={member.githubName}
        >
          <Box>
            <a href={`https://github.com/${member.githubName}`}>
              <Image
                src={`https://github.com/${member.githubName}.png?size=200`}
                width={48}
                height={48}
                loading="lazy"
              />
            </a>
          </Box>
          <Box
            color={theme.backgroundWhite}
            bg={theme.backgroundBlack}
            w="100%"
            px={3}
            pb={4}
            pt={2}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box fontWeight="bold" fontSize="1.4rem">
                {member.name}
              </Box>
              <Badge bg={theme.backgroundBlack} color={theme.backgroundWhite}>
                #{index < 10 && "0"}
                {index}
              </Badge>
            </Flex>

            <Box
              mt="0.4rem"
              fontSize="0.75rem"
              height="0.75rem"
              fontWeight="bold"
              color={theme.toskaYellow}
            >
              {getDateString(member.joinedDate, member.alumnDate)}
            </Box>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};
