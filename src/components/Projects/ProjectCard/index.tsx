"use server";

import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { MarkdownContainer } from "src/components/MarkdownContainer";
import { Project } from "src/types";
import { ShowSourceButton } from "./ShowSourceButton";
import { ReadMoreButton } from "./ReadMoreButton";
import { PreviewImage } from "./PreviewImage";

export const ProjectCard = async ({ project }: { project: Project }) => {
  return (
    <Card
      key={project.name}
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      variant="outlined"
    >
      <PreviewImage projectName={project.name} projectTitle={project.title} />
      <CardContent>
        <Typography component="h3" variant="h6">
          {project.title}
        </Typography>
        <Typography color="text.secondary" variant="subtitle2">
          {project.date}
        </Typography>
      </CardContent>
      <Divider />
      <CardContent sx={{ flexGrow: 1 }}>
        <MarkdownContainer value={project.content.split("\n")[1]} />
      </CardContent>
      <Divider />
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <ShowSourceButton repositoryName={project.gitHub} />
          <ReadMoreButton projectName={project.name} />
        </Stack>
      </CardActions>
    </Card>
  );
};
