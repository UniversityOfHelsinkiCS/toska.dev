"use client";

import { Login as LoginIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { Stack, Tooltip, Typography } from "@mui/material";

import { Date } from "src/types";
import { formatDate } from "src/utils/date";

export const DateText = ({
  date,
  mode,
}: {
  date: Date;
  mode: "join" | "exit";
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <Tooltip
        arrow
        placement="left"
        title={mode === "join" ? "Aloitti" : "Lopetti"}
      >
        {mode === "join" ? (
          <LoginIcon color="primary" fontSize="small" />
        ) : (
          <LogoutIcon color="secondary" fontSize="small" />
        )}
      </Tooltip>
      <Typography color="text.secondary" variant="body2">
        {formatDate(date)}
      </Typography>
    </Stack>
  );
};
