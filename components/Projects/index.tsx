import { Grid2 as Grid } from "@mui/material";

import { Project } from "types";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Grid container spacing={2}>
      {projects.map((project) => {
        return (
          <Grid size={6} sx={{ display: "flex" }}>
            <ProjectCard project={project} />
          </Grid>
        );
      })}
    </Grid>
  );
};
