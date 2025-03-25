import { LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { Link } from "@mui/material";

export const LinkedInButton = ({ linkedInName }: { linkedInName?: string }) => {
  if (!linkedInName) {
    return null;
  }

  return (
    <Link color="#007ab6" href={`https://www.linkedin.com/in/${linkedInName}/`}>
      <LinkedInIcon fontSize="small" />
    </Link>
  );
};
