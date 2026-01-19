export const projects = [
  "fuksilaiterekisteri",
  "oodikone",
  "palaute",
  "revita",
  "suoritustarkistin",
  "tilannekuvalomake",
  "currechat",
] as const;

export type ProjectName = (typeof projects)[number];

export type Project = {
  content: string;
  date: string;
  gitHub: string;
  name: ProjectName;
  title: string;
};
