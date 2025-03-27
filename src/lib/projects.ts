import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { Project } from "@/types";
import { projects } from "@/types/project";

const projectsDir = path.join(process.cwd(), "src", "content", "projects");

const isValidProjectName = (name: string): name is Project["name"] => {
  return projects.includes(name as any);
};

export async function getProjects(): Promise<Project[]> {
  const projectFiles = fs.readdirSync(projectsDir);

  const projects = await Promise.all(
    projectFiles
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const filePath = path.join(
          process.cwd(),
          "src",
          "content",
          "projects",
          file
        );
        const fileContent = fs.readFileSync(filePath, "utf8");
        const parsed = matter(fileContent);

        if (!parsed.data.github || !parsed.data.title) {
          throw new Error(`Invalid metadata in ${file}`);
        }

        const name = file.replace(".md", "");

        if (!isValidProjectName(name)) {
          throw new Error(`Invalid project name: ${file}`);
        }

        return {
          content: parsed.content,
          date: parsed.data.date as string,
          gitHub: parsed.data.github as string,
          name,
          title: parsed.data.title as string,
        };
      })
  );

  return projects;
}

export async function getProjectByName(name: string): Promise<Project | null> {
  const filePath = path.join(projectsDir, `${name}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  if (!isValidProjectName(name)) {
    throw new Error(`Invalid project name: ${name}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const parsed = matter(fileContent);

  if (!parsed.data.github || !parsed.data.title || !parsed.data.date) {
    return null;
  }

  return {
    content: parsed.content,
    date: parsed.data.date,
    gitHub: parsed.data.github,
    name,
    title: parsed.data.title,
  };
}
