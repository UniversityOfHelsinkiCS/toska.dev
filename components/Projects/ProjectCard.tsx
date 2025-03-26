import {
  OpenInNew as OpenInNewIcon,
  ReadMore as ReadMoreIcon,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import { MarkdownContainer } from "components/MarkdownContainer";
import { Project } from "types";

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card key={project.name} variant="outlined">
      <CardMedia
        alt={`Screenshot of ${project.title}`}
        component="img"
        height={200}
        image={`/projects/${project.name}.png`}
        title={`Screenshot of ${project.title}`}
      />
      <CardContent>
        <Typography component="h3" gutterBottom variant="h5">
          {project.title}
        </Typography>
        <MarkdownContainer value={project.content.split("\n")[1]} />
      </CardContent>
      <CardActions>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <NextLink href={`/projects/${project.name}`}>
            <Button color="primary" endIcon={<ReadMoreIcon />}>
              Lue lisää
            </Button>
          </NextLink>
          <Link
            href={`https://github.com/UniversityOfHelsinkiCS/${project.gitHub}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Button
              endIcon={<OpenInNewIcon />}
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
        </Stack>
      </CardActions>
    </Card>
  );
};
