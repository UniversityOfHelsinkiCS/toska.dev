import { Card, CardContent, Stack, Typography } from "@mui/material";

import { Member } from "types";
import { DateText } from "./DateText";
import { GitHubButton } from "./GitHubButton";
import { LinkedInButton } from "./LinkedInButton";
import { NumberChip } from "./NumberChip";
import { ProfilePicture } from "./ProfilePicture";

export const MemberCard = ({ member }: { member: Member }) => {
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
            <NumberChip memberNumber={member.memberNumber!} />
          </Stack>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Stack direction="column" spacing={1}>
              <DateText date={member.joinDate} mode="join" />
              {member.exitDate && (
                <DateText date={member.exitDate} mode="exit" />
              )}
            </Stack>
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
