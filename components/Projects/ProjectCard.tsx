import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
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
        <NextLink href={`/projects/${project.name}`}>
          <Button color="primary">Lue lisää</Button>
        </NextLink>
        <Link
          href={`https://github.com/UniversityOfHelsinkiCS/${project.name}`}
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
            Lähdekoodi
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
