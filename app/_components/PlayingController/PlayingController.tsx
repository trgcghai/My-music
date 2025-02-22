"use client";

import VolumeSlider from "@components/VolumeSlider";
import SongInfoCard from "./SongInfoCard";
import Toolbar from "./Toolbar";

const PlayingController = () => {
  return (
    <div className="bg-bgColorDark flex h-20 items-center justify-between px-4 text-textColor">
      <div className="flex w-1/5 items-center gap-2">
        <SongInfoCard name="fdsa" author="fds" />
      </div>

      <div className="w-1/5">
        <Toolbar />
      </div>

      <div className="flex w-1/5 items-center justify-end">
        <VolumeSlider />
      </div>
    </div>
  );
};
export default PlayingController;
