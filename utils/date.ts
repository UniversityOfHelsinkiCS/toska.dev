import { Date } from "types";

export const formatDate = (joinedDate?: Date, alumnDate?: Date) => {
  if (!joinedDate) {
    return "";
  }

  if (!alumnDate) {
    return `${joinedDate.month}.${joinedDate.year}`;
  }

  return `${joinedDate.month}.${joinedDate.year} - ${alumnDate.month}.${alumnDate.year}`;
};
