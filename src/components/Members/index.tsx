"use client";

import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import members from "@/content/members.json";
import { Member } from "@/types";
import { MemberGrid } from "./MemberGrid";

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
        <MemberGrid members={activeMembers} />
      </Box>
      <Box>
        <Typography component="h3" gutterBottom variant="h6">
          Alumni
        </Typography>
        <MemberGrid members={alumniMembers} />
      </Box>
    </Stack>
  );
};
