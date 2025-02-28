"use client";

import VolumeSlider from "./VolumeSlider";
import SongInfoCard from "./SongInfoCard";
import Toolbar from "./Toolbar";

const PlayingController = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-bgColorDark px-4 text-textColor">
      <div className="flex w-1/5 items-center gap-2">
        <SongInfoCard />
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
