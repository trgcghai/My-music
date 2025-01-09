"use client";
import {
  Audiotrack,
  HomeRounded,
  PlaylistPlayRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const NavbarItem = ({
  href = "",
  icon,
  content = "",
}: {
  href: string;
  icon: ReactNode;
  content: string;
}) => {
  const path = usePathname();
  const getClassName = (pathArg: string) => {
    const linkClassName =
      "flex w-full items-center gap-2 rounded-md p-2 text-lg font-bold hover:bg-bgHover";

    if (
      (path == "/" && pathArg == "/") ||
      path.split("/").find((item) => item == pathArg.split("/")[1])
    )
      return linkClassName + " bg-main text-white";
    return linkClassName;
  };

  return (
    <Link className={getClassName(href)} href={href}>
      {icon}
      <span>{content}</span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className="flex flex-1 flex-col items-start gap-2 bg-bgLightColor p-4 capitalize text-textColor">
      <NavbarItem href="/" icon={<HomeRounded />} content="Home" />
      <NavbarItem
        href="/playlist"
        icon={<PlaylistPlayRounded />}
        content="Playlist"
      />
      <NavbarItem href="/song" icon={<Audiotrack />} content="Song" />
    </div>
  );
};
export default Navbar;
