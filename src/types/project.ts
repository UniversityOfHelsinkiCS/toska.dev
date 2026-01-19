export const projects = [
  "oodikone",
  "palaute",
  "currechat",
  "tilannekuvalomake",
  "suoritustarkistin",
  "revita",
  "fuksilaiterekisteri",
] as const;

export type ProjectName = (typeof projects)[number];

export type Project = {
  content: string;
  date: string;
  gitHub: string;
  name: ProjectName;
  title: string;
};
