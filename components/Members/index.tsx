import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";

import members from "content/members.json";
import { Member } from "types";
import { MemberCard } from "./MemberCard";

export const Members = () => {
  const membersWithMemberNumbers: Member[] = members
    .map((member, index) => ({
      ...member,
      memberNumber: index,
    }))
    .sort((a, b) => a.memberNumber - b.memberNumber);

  const activeMembers = membersWithMemberNumbers.filter(
    (member) => !member.exitDate
  );

  const alumniMembers = membersWithMemberNumbers.filter(
    (member) => member.exitDate
  );

  return (
    <Stack gap={1}>
      <Box>
        <Typography component="h3" gutterBottom variant="h6">
          Nykyiset jäsenet
        </Typography>
        <Grid container spacing={1}>
          {activeMembers.map((member) => (
            <Grid key={member.gitHubName} size={3}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography component="h3" gutterBottom variant="h6">
          Alumni
        </Typography>
        <Grid container spacing={1}>
          {alumniMembers.map((member) => (
            <Grid key={member.gitHubName} size={3}>
              <MemberCard member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
