"use client";
import { signOut } from "@libs/features/auth/authSlice";
import { useAppDispatch } from "@hooks/hooks";
import {
  Audiotrack,
  HomeRounded,
  Logout,
  PlaylistPlayRounded,
} from "@mui/icons-material";
import { Button } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
      "flex w-full items-center gap-2 rounded-md p-2 text-lg font-bold hover:bg-bgColorSuperLight";

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
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = () => {
    dispatch(signOut());
    router.push("/login");
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-2 bg-bgColorLight p-4 capitalize text-textColor">
      <div className="w-full space-y-2">
        <NavbarItem href="/" icon={<HomeRounded />} content="Home" />
        <NavbarItem
          href="/playlist"
          icon={<PlaylistPlayRounded />}
          content="Playlist"
        />
        <NavbarItem href="/song" icon={<Audiotrack />} content="Song" />
      </div>

      <Button
        variant="filled"
        className="mt-10 !flex w-full !justify-start !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
        onClick={handleLogout}
      >
        <Logout />
        Logout
      </Button>
    </div>
  );
};
export default Navbar;
