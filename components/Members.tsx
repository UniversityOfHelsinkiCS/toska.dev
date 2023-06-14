import { Badge, Box, Flex, Image, Wrap, WrapItem } from "@chakra-ui/react";
import members from "content/members.json";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
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
          className="expand"
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
              <Badge color={theme.toskaYellow}>
                #{index < 10 && "0"}
                {index}
              </Badge>
            </Flex>

            <Flex
              mt="0.4rem"
              fontSize="0.75rem"
              height="0.75rem"
              fontWeight="bold"
              color={theme.toskaYellow}
              justify="space-between"
              align="center"
            >
              {getDateString(member.joinedDate, member.alumnDate)}
              {/* Can remove as any after first linkedInName gets added */}
              {(member as any).linkedInName && (
                <a
                  href={`https://www.linkedin.com/in/${(member as any).linkedInName
                    }/`}
                >
                  <FaLinkedin />
                </a>
              )}
            </Flex>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};
