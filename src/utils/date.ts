"use client";

import { Date } from "src/types";

const formatMonth = (month: number) => {
  if (month < 10) {
    return `0${month}`;
  }
  return `${month}`;
};

export const formatDate = (date: Date) => {
  return `${formatMonth(date.month)}/${date.year}`;
};
