"use client";
import {
  Audiotrack,
  HomeRounded,
  PlaylistPlayRounded,
  SettingsRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const getClassName = (pathArg: string) => {
    const linkClassName =
      "flex w-full items-center gap-2 rounded-md p-2 text-lg font-bold hover:bg-bgHover";

    if (path == pathArg) return linkClassName + " bg-main text-white";
    return linkClassName;
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-2 bg-bgLightColor p-4 capitalize text-textColor">
      <Link className={getClassName("/")} href={"/"}>
        <HomeRounded />
        <span>home</span>
      </Link>
      <Link className={getClassName("/playlist")} href={"/playlist"}>
        <PlaylistPlayRounded />
        Playlist
      </Link>
      <Link className={getClassName("/song")} href={"/song"}>
        <Audiotrack />
        Song
      </Link>
      <Link className={getClassName("/setting")} href={"/setting"}>
        <SettingsRounded />
        Setting
      </Link>
    </div>
  );
};
export default Navbar;
