import { Chip } from "@mui/material";

const getMemberNumber = (index: number) => {
  if (index < 10) {
    return `#0${index}`;
  }
  return `#${index}`;
};

export const NumberChip = ({ index }: { index: number }) => {
  return (
    <Chip
      label={getMemberNumber(index)}
      size="small"
      sx={{ color: (theme) => theme.palette.primary.main }}
    />
  );
};
