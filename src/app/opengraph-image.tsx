import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Toska";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/assets/toska-logo.svg")
  );
  const logoBase64 = Buffer.from(logoData).toString("base64");
  const logoSrc = `data:image/svg+xml;base64,${logoBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#242124",
          height: "100%",
          width: "100%",
        }}
      >
        <img alt="Toska" src={logoSrc} height="50%" />
      </div>
    ),
    {
      ...size,
    }
  );
}
