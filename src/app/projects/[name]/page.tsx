import { Container, Link, Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { MarkdownContainer } from "@/components/MarkdownContainer";
import { getProjectByName } from "@/lib/projects";

type Props = Promise<{ name: string }>;

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const { name } = await params;
  const project = await getProjectByName(name);

  const projectName = project?.title || "Tuntematon projekti";

  return {
    title: `${projectName} - Projektit - Toska`,
    description: `${projectName} on Toskan kehittämä sovellus`,
  };
}

export const ProjectPage = async ({ params }: { params: Props }) => {
  const { name } = await params;
  const project = await getProjectByName(name);

  if (!project) {
    return notFound();
  }

  return (
    <Container maxWidth="md">
      <Stack gap={2} sx={{ py: 4 }}>
        <Typography component="h2" variant="h2">
          {project.title}
        </Typography>
        <Link
          href={`https://github.com/UniversityOfHelsinkiCS/${project.gitHub}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </Link>
        <Typography color="text.secondary" variant="body1">
          {project.date}
        </Typography>
        <MarkdownContainer value={project.content} />
        <Image
          alt={`Kuvakaappaus sovelluksesta ${project.name}`}
          src={`/projects/${project.name}.png`}
          layout="responsive"
          width={100}
          height={100}
        />
      </Stack>
    </Container>
  );
};

export default ProjectPage;
