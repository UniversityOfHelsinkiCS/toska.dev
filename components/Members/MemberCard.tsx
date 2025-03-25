import { Badge, Box, Flex, Image } from "@chakra-ui/react";
import { Card } from "@mui/material";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

import { Member } from "types";
import { formatDate } from "utils/date";
import { theme } from "utils/theme";

export const MemberCard = ({
  index,
  member,
}: {
  index: number;
  member: Member;
}) => {
  return (
    <Card>
      <Box>
        <a href={`https://github.com/${member.gitHubName}`}>
          <Image
            src={`https://github.com/${member.gitHubName}.png?size=200`}
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
          {formatDate(member.joinedDate, member.alumnDate)}
          {member.linkedInName && (
            <a href={`https://www.linkedin.com/in/${member.linkedInName}/`}>
              <FaLinkedin />
            </a>
          )}
        </Flex>
      </Box>
    </Card>
  );
};
