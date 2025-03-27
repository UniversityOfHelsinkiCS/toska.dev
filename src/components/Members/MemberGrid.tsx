"use server";

import { Grid2 as Grid } from "@mui/material";
import React from "react";

import { Member } from "@/types";
import { MemberCard } from "./MemberCard";

export const MemberGrid = async ({ members }: { members: Member[] }) => {
  return (
    <Grid container spacing={1}>
      {members.map((member) => (
        <Grid key={member.gitHubName} size={{ xs: 6, sm: 3 }}>
          <MemberCard member={member} />
        </Grid>
      ))}
    </Grid>
  );
};
