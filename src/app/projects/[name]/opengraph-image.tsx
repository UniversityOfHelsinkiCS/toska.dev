import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getProjectByName } from "@/lib/projects";

export const alt = "Toska";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { name: string } }) {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/toska-logo.svg")
  );
  const logoBase64 = Buffer.from(logoData).toString("base64");
  const logoSrc = `data:image/svg+xml;base64,${logoBase64}`;

  const { name } = params;
  const project = await getProjectByName(name);
  const projectName = project?.title;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#fff",
          justifyContent: "center",
          background: "#242124",
          height: "100%",
          width: "100%",
        }}
      >
        <img src={logoSrc} height="50%" />
        {projectName && <h1>{projectName}</h1>}
      </div>
    ),
    {
      ...size,
    }
  );
}
