"use client";

import VolumeSlider from "./VolumeSlider";
import SongInfoCard from "./SongInfoCard";
import Toolbar from "./Toolbar";
import { useState } from "react";
import QueueDrawer from "./QueueDrawer";
import { QueueMusic } from "@mui/icons-material";
import { useAppSelector } from "@hooks/hooks";
import { SongRowProps } from "_types/component";

const PlayingController = () => {
  const [open, setOpen] = useState(false);
  const {
    queue,
    currentIndex,
  }: {
    queue: SongRowProps[];
    currentIndex: number;
  } = useAppSelector((state) => state.queue);

  console.log(queue[currentIndex]);

  const showDrawer = () => {
    setOpen(true);
  };

  return (
    <div className="flex h-20 items-center justify-between bg-bgColorDark px-4 text-textColor">
      <div className="flex w-1/5 items-center gap-2">
        <SongInfoCard song={queue[currentIndex]} />
      </div>

      <div className="w-1/5">
        <Toolbar />
      </div>

      <div className="flex w-1/5 items-center justify-end gap-4">
        <QueueMusic onClick={showDrawer} className="cursor-pointer" />
        <QueueDrawer
          setOpen={setOpen}
          open={open}
          currentSong={queue[currentIndex]}
          queue={queue}
        />
        <VolumeSlider />
      </div>
    </div>
  );
};
export default PlayingController;
