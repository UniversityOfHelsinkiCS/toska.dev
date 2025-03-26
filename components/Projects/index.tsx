import { OpenInNew as OpenInNewIcon } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import { MarkdownContainer } from "components/MarkdownContainer";
import { Project } from "types";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Stack gap={2}>
      {projects.map((project) => {
        return (
          <Card key={project.name} sx={{ display: "flex" }} variant="outlined">
            <CardMedia
              alt={`Screenshot of ${project.title}`}
              component="img"
              image={`/projects/${project.name}.png`}
              title={`Screenshot of ${project.title}`}
              sx={{ marginTop: 3, marginLeft: 3, height: 200, width: 200 }}
            />
            <CardContent>
              <Stack gap={2}>
                <Typography variant="h5">{project.title}</Typography>
                <MarkdownContainer value={project.content.split("\n")[1]} />
                <Stack direction="row" gap={1}>
                  <NextLink href={`/projects/${project.name}`}>
                    <Button color="primary" variant="outlined">
                      Lue lisää
                    </Button>
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
                      variant="outlined"
                    >
                      Lähdekoodi
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};
