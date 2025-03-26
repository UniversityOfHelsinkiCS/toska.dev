import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownContainer } from "@/components/MarkdownContainer";
import { Section } from "@/components/Section";
import { getProjectByName } from "@/lib/projects";

type Props = Promise<{ name: string }>;

export async function generateMetadata({
  params,
}: {
  params: Props;
}): Promise<Metadata> {
  const { name } = await params;

  return {
    title: name,
  };
}

export default async function ProjectPage({ params }: { params: Props }) {
  const { name } = await params;
  const project = await getProjectByName(name);

  if (!project) {
    return notFound();
  }

  return (
    <Section>
      <Stack gap={2}>
        <Image
          alt={`Screenshot of ${project.name}`}
          src={`/projects/${project.name}.png`}
          height={100}
          width={100}
        />
        <Typography component="h2" variant="h2">
          {project.title}
        </Typography>
        <Link
          href={`https://github.com/UniversityOfHelsinkiCS/${project.gitHub}`}
          target="_blank"
        >
          GitHub
        </Link>
        <Typography color="text.secondary">{project.date}</Typography>
        <MarkdownContainer value={project.content} />
      </Stack>
    </Section>
  );
}
