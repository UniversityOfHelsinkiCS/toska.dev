"use client";

import { CardMedia, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";

export const ProfilePicture = ({
  gitHubName,
  name,
}: {
  gitHubName: string;
  name: string;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = `https://github.com/${gitHubName}.png?size=200`;
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
  }, [gitHubName]);

  return (
    <>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height={173}
          sx={{ borderRadius: "4%" }}
        />
      ) : (
        <CardMedia
          alt={`Profile picture of ${name}`}
          component="img"
          src={`https://github.com/${gitHubName}.png?size=200`}
          width="100%"
          height="auto"
          sx={{ borderRadius: "4%" }}
        />
      )}
    </>
  );
};
