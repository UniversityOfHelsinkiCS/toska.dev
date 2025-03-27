"use server";

import { Button } from "@mui/material";
import NextLink from "next/link";

export const ReadMoreButton = async ({
  projectName,
}: {
  projectName: string;
}) => {
  return (
    <NextLink href={`/projects/${projectName}`}>
      <Button color="primary">Lue lisää</Button>
    </NextLink>
  );
};
