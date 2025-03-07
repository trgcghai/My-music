"use client";

import VolumeSlider from "./VolumeSlider";
import SongInfoCard from "./SongInfoCard";
import Toolbar from "./Toolbar";
import { useState } from "react";
import QueueDrawer from "./QueueDrawer";
import { QueueMusic } from "@mui/icons-material";
import { useGetSongByIdQuery } from "@services/songApi";
import { useAppSelector } from "@hooks/hooks";
import Loading from "@components/Loading";

const PlayingController = () => {
  const [open, setOpen] = useState(false);
  const { queue, currentIndex } = useAppSelector((state) => state.queue);
  const { data, isFetching, isLoading } = useGetSongByIdQuery(
    queue[currentIndex],
  );

  const showDrawer = () => {
    setOpen(true);
  };

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <div className="flex h-20 items-center justify-between bg-bgColorDark px-4 text-textColor">
      <div className="flex w-1/5 items-center gap-2">
        <SongInfoCard song={data.result[0]} />
      </div>

      <div className="w-1/5">
        <Toolbar />
      </div>

      <div className="flex w-1/5 items-center justify-end gap-4">
        <QueueMusic onClick={showDrawer} className="cursor-pointer" />
        <QueueDrawer
          setOpen={setOpen}
          open={open}
          currentSong={data.result[0]}
          queue={queue}
        />
        <VolumeSlider />
      </div>
    </div>
  );
};
export default PlayingController;
