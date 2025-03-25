import { GitHub as GitHubIcon } from "@mui/icons-material";
import { Link } from "@mui/material";

export const GitHubButton = ({ gitHubName }: { gitHubName: string }) => {
  return (
    <Link color="inherit" href={`https://www.github.com/${gitHubName}`}>
      <GitHubIcon fontSize="small" />
    </Link>
  );
};
