"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { key: "about-us", href: "#meista", text: "Meistä" },
  { key: "projects", href: "#projektit", text: "Projektit" },
  { key: "members", href: "#jasenet", text: "Jäsenet" },
];

export const NavigationItems = () => {
  const pathname = usePathname();
  const isOnFrontPage = pathname === "/";

  return (
    <>
      {isOnFrontPage ? (
        navItems.map((item) => (
          <Link href={item.href} key={item.key} passHref>
            <Button>{item.text}</Button>
          </Link>
        ))
      ) : (
        <Link href="/" passHref>
          <Button>Takaisin</Button>
        </Link>
      )}
    </>
  );
};
