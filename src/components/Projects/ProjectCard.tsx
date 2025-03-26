"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import { MarkdownContainer } from "src/components/MarkdownContainer";
import { Project } from "src/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card
      key={project.name}
      sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
      variant="outlined"
    >
      <CardMedia
        alt={`Screenshot of ${project.title}`}
        component="img"
        height={200}
        image={`/projects/${project.name}.png`}
        title={`Screenshot of ${project.title}`}
      />
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
          <Link
            href={`https://github.com/UniversityOfHelsinkiCS/${project.gitHub}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              sx={{
                color: (theme) => theme.palette.secondary.light,
                "&:hover": {
                  color: (theme) => theme.palette.secondary.main,
                },
              }}
            >
              Näytä lähdekoodi
            </Button>
          </Link>
          <NextLink href={`/projects/${project.name}`}>
            <Button color="primary">Lue lisää</Button>
          </NextLink>
        </Stack>
      </CardActions>
    </Card>
  );
};
