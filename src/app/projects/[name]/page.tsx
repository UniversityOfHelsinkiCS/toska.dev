import { Stack, Typography } from "@mui/material";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import toskaLogo from "@/assets/toska-logo.svg";
import { MarkdownContainer } from "@/components/MarkdownContainer";
import { Section } from "@/components/Section";
import { getProjectByName } from "@/lib/projects";

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = params;

  return {
    title: name,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectByName(params.name);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <Section background>
        <Link href="/">
          <Image alt="Toska logo" height={200} src={toskaLogo} width={300} />
        </Link>
      </Section>
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
    </>
  );
}
