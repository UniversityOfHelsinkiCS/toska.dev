import { Date } from "./date";

export type Member = {
  name: string;
  gitHubName: string;
  linkedInName?: string;
  joinedDate: Date;
  alumnDate?: Date;
};
