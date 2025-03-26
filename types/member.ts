import { Date } from "./date";

export type Member = {
  name: string;
  gitHubName: string;
  linkedInName?: string;
  memberNumber?: number;
  joinedDate: Date;
  alumnDate?: Date;
  projects?: string[];
};
