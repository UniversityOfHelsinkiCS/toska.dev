import { CardMedia } from "@mui/material";
import Image, { StaticImageData } from "next/image";

import fuksilaiterekisteriImage from "public/projects/fuksilaiterekisteri.png";
import oodikoneImage from "public/projects/oodikone.png";
import palauteImage from "public/projects/palaute.png";
import revitaImage from "public/projects/revita.png";
import suoritustarkistinImage from "public/projects/suoritustarkistin.png";
import tilannekuvalomakeImage from "public/projects/tilannekuvalomake.png";
import currechatImage from "public/projects/currechat.jpeg";
import { ProjectName } from "@/types/project";

const projectImages: Record<ProjectName, StaticImageData> = {
  fuksilaiterekisteri: fuksilaiterekisteriImage,
  oodikone: oodikoneImage,
  palaute: palauteImage,
  revita: revitaImage,
  suoritustarkistin: suoritustarkistinImage,
  tilannekuvalomake: tilannekuvalomakeImage,
  currechat: currechatImage,
} as const;

export const PreviewImage = ({
  projectName,
  projectTitle,
}: {
  projectName: ProjectName;
  projectTitle: string;
}) => {
  const image = projectImages[projectName];

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <CardMedia sx={{ position: "relative", width: "100%", height: "200px" }}>
      <Image
        alt={`Kuvakaappaus projektista ${projectTitle}`}
        priority
        fill
        src={image}
        style={{ objectFit: "cover" }}
        title={`Kuvakaappaus projektista ${projectTitle}`}
      />
    </CardMedia>
  );
};
