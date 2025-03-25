import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";

import { Member } from "types";
import { formatDate } from "utils/date";
import { ProfilePicture } from "./ProfilePicture";
import { NumberChip } from "./NumberChip";
import { LinkedInButton } from "./LinkedInButton";
import { GitHubButton } from "./GitHubButton";

export const MemberCard = ({
  index,
  member,
}: {
  index: number;
  member: Member;
}) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Stack gap={1}>
          <ProfilePicture gitHubName={member.gitHubName} name={member.name} />
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Typography>{member.name}</Typography>
            <NumberChip index={index} />
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Typography color="text.secondary" variant="body2">
              {formatDate(member.joinedDate, member.alumnDate)}
            </Typography>
            <Stack direction="row" spacing={1}>
              <LinkedInButton linkedInName={member.linkedInName} />
              <GitHubButton gitHubName={member.gitHubName} />
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
