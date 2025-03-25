import { Box } from "@chakra-ui/react";

import Markdown from "components/Markdown";

export const Introduction = ({ introText }: { introText: string }) => {
  return (
    <Box mt={12}>
      <Markdown value={introText} />
    </Box>
  );
};
