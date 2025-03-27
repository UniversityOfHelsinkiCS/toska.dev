"use server";

import Image from "next/image";

import toskaMopo from "public/assets/toska-mopo.png";

export const Toskamopo = async () => {
  return (
    <Image
      alt="Toskamopo"
      height={200}
      priority
      src={toskaMopo}
      title="Olen kurkkumopo, Toskan maskotti!"
      width={200}
    />
  );
};
