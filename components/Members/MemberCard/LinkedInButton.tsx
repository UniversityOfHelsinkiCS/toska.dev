import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { Link } from "@mui/material";

export const LinkedInButton = ({ linkedInName }: { linkedInName?: string }) => {
  if (!linkedInName) {
    return null;
  }

  return (
    <Link
      color="#007ab6"
      href={`https://www.linkedin.com/in/${linkedInName}/`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <LinkedInIcon fontSize="small" />
    </Link>
  );
};
