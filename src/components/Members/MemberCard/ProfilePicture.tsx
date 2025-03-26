"use client";

import { CardMedia } from "@mui/material";

export const ProfilePicture = ({
  gitHubName,
  name,
}: {
  gitHubName: string;
  name: string;
}) => {
  return (
    <CardMedia
      alt={`Profile picture of ${name}`}
      component="img"
      src={`https://github.com/${gitHubName}.png?size=200`}
      width="100%"
      height="auto"
      sx={{
        borderRadius: "4%",
      }}
    />
  );
};
