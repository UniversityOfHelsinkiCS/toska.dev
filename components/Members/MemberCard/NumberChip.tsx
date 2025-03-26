import { Chip, Tooltip } from "@mui/material";

const formatMemberNumber = (memberNumber: number) => {
  if (memberNumber < 10) {
    return `#0${memberNumber}`;
  }
  return `#${memberNumber}`;
};

export const NumberChip = ({ memberNumber }: { memberNumber: number }) => {
  return (
    <Tooltip arrow placement="top" title="Jäsennumero">
      <Chip
        label={formatMemberNumber(memberNumber)}
        size="small"
        sx={{ color: (theme) => theme.palette.primary.main }}
      />
    </Tooltip>
  );
};
