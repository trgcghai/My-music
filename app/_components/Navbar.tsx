"use client";
import {
  AddCircleOutline,
  FavoriteBorderRounded,
  HomeRounded,
  PlaylistPlayRounded,
  SearchRounded,
  SettingsRounded,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const getClassName = (pathArg: string) => {
    const linkClassName =
      "flex w-full items-center gap-2 rounded-md p-2 text-lg font-bold hover:bg-gray-700";

    if (path == pathArg) return linkClassName + " bg-main text-white";
    return linkClassName;
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-2 bg-bgLightColor p-4 capitalize text-textColor">
      <Link className={getClassName("/")} href={"/"}>
        <HomeRounded />
        <span>home</span>
      </Link>
      <p className={getClassName("/addsong") + " cursor-pointer"}>
        <AddCircleOutline />
        <span>Upload your songs</span>
      </p>
      <Link className={getClassName("/search")} href={"/search"}>
        <SearchRounded />
        <span>Search</span>
      </Link>
      <Link className={getClassName("/playlist")} href={"/playlist"}>
        <PlaylistPlayRounded />
        Playlist
      </Link>
      <Link className={getClassName("/favorite")} href={"/favorite"}>
        <FavoriteBorderRounded />
        Favorite
      </Link>
      <Link className={getClassName("/setting")} href={"/setting"}>
        <SettingsRounded />
        Setting
      </Link>
    </div>
  );
};
export default Navbar;
