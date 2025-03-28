import { Date } from "./date";

export type Member = {
  name: string;
  gitHubName: string;
  linkedInName?: string;
  memberNumber?: number;
  joinDate: Date;
  exitDate?: Date;
};
