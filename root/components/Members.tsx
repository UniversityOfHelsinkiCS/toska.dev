import { Avatar, Badge, Box, Wrap } from "@chakra-ui/core";
import members from "content/members.json";
import React from "react";
import { theme } from "utils/theme";

const getDateString = (
  joinedDate?: { month: number; year: number },
  alumnDate?: { month: number; year: number }
) => {
  if (!joinedDate) return ''
  if (!alumnDate) return `${joinedDate.month}.${joinedDate.year}`;

  return `${joinedDate.month}.${joinedDate.year} - ${alumnDate.month}.${alumnDate.year}`
};

export const Members = () => {
  return (
    <Wrap justify="center" spacing={8}>
      #01
      {members.map((member, index) => (
        <Box key={member.githubName} textAlign="center">
          <a href={`https://github.com/${member.githubName}`}>
            <Avatar
              name={member.name}
              src={`https://github.com/${member.githubName}.png?size=80`}
            />
          </a>
          <Box fontWeight="bold" mt="0.2rem">
            {member.name}
          </Box>
          <Badge bg={theme.backgroundBlack} color={theme.toskaYellow}>
            #{index < 9 && "0"}
            {index}
          </Badge>
          {
            <Box mt="0.4rem" color={theme.toskaRed}>
              {getDateString(member.joinedDate, member.alumnDate)}
            </Box>
          }
        </Box>
      ))}
    </Wrap>
  );
};
