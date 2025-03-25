import { Grid2 as Grid } from "@mui/material";
import React from "react";

import members from "content/members.json";
import { MemberCard } from "./MemberCard";

export const Members = () => {
  return (
    <Grid container spacing={1}>
      {members.map((member, index) => (
        <Grid key={member.gitHubName} size={3}>
          <MemberCard index={index} member={member} />
        </Grid>
      ))}
    </Grid>
  );
};
