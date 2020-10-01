import { Avatar, Badge, Box, Wrap } from "@chakra-ui/core";
import members from "content/members.json";
import React from "react";
import { theme } from "utils/theme";

export const Members = () => {
  return (
    <Wrap justify="center" spacing={8}>
      #01
      {members.map((member, index) => (
        <Box key={member.githubName} textAlign="center">
          <Avatar
            name={member.name}
            src={`https://github.com/${member.githubName}.png?size=80`}
          />
          <Box fontWeight="bold" mt="0.2rem">
            {member.name}
          </Box>
          <Badge bg={theme.backgroundBlack} color={theme.toskaYellow}>
            #{index < 9 && "0"}
            {index + 1}
          </Badge>
          {
            <Box mt="0.4rem" color={theme.toskaRed}>
              {`${member.joinedDate.month}/${member.joinedDate.year}`}
            </Box>
          }
        </Box>
      ))}
    </Wrap>
  );
};
