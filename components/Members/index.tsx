import { Box, Grid2 as Grid, Stack, Typography } from "@mui/material";
import React from "react";

import members from "content/members.json";
import { MemberCard } from "./MemberCard";

export const Members = () => {
  const activeMembers = members.filter((member) => !member.alumnDate);
  const alumniMembers = members.filter((member) => member.alumnDate);

  return (
    <Stack gap={1}>
      <Box>
        <Typography component="h3" gutterBottom variant="h6">
          Nykyiset jäsenet
        </Typography>
        <Grid container spacing={1}>
          {activeMembers.map((member, index) => (
            <Grid key={member.gitHubName} size={3}>
              <MemberCard index={index} member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Typography component="h3" gutterBottom variant="h6">
          Alumni
        </Typography>
        <Grid container spacing={1}>
          {alumniMembers.map((member, index) => (
            <Grid key={member.gitHubName} size={3}>
              <MemberCard index={index} member={member} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
};
