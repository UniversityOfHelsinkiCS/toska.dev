import { Date } from "types";

const formatMonth = (month: number) => {
  if (month < 10) {
    return `0${month}`;
  }
  return `${month}`;
};

export const formatDate = (joinedDate?: Date, alumnDate?: Date) => {
  if (!joinedDate) {
    return "";
  }

  if (!alumnDate) {
    return `${formatMonth(joinedDate.month)}/${joinedDate.year}`;
  }

  return `${formatMonth(joinedDate.month)}/${joinedDate.year} - ${formatMonth(
    alumnDate.month
  )}/${alumnDate.year}`;
};
