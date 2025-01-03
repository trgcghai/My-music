"use client";
import {
  PlayArrow,
  Replay,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Progress } from "antd";
import { ToggleIcon } from "../ToggleIcon";
import VolumeSlider from "../VolumeSlider";
import SongInfoCard from "./SongInfoCard";
import Toolbar from "./Toolbar";

const PlayingController = () => {
  return (
    <div className="flex h-20 items-center justify-between bg-bgDarkColor px-4 text-textColor">
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
