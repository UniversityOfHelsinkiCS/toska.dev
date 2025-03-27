export type ProjectName =
  | "fuksilaiterekisteri"
  | "oodikone"
  | "palaute"
  | "revita"
  | "suoritustarkistin"
  | "tilannekuvalomake";

export type Project = {
  content: string;
  date: string;
  gitHub: string;
  name: ProjectName;
  title: string;
};
