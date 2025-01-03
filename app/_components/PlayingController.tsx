"use client";
import {
  PlayArrow,
  Replay,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeDown,
  VolumeMute,
  VolumeUp,
} from "@mui/icons-material";
import { Progress, Slider } from "antd";
import Image from "next/image";
import { ToggleIcon } from "./ToggleIcon";
import { useState } from "react";

const PlayingController = () => {
  const [value, setValue] = useState(100);

  return (
    <div className="flex h-20 items-center justify-between bg-bgDarkColor px-4 text-textColor">
      <div className="flex w-1/5 items-center gap-2">
        <Image
          src="https://placehold.co/60x60"
          width={60}
          height={60}
          className="rounded-md"
          alt=""
        />
        <div>
          <p className="text-lg">Song name</p>
          <p className="text-md text-textDark">Author name</p>
        </div>
      </div>

      <div className="w-1/5">
        <div className="mb-1 flex justify-center gap-2">
          <div className="flex gap-2">
            <ToggleIcon icon={<Shuffle fontSize="medium" />} />
            <SkipPrevious fontSize="medium" />
            <PlayArrow fontSize="medium" />
            <SkipNext fontSize="medium" />
            <ToggleIcon icon={<Replay fontSize="medium" />} />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-textDark">0:00</span>
          <Progress percent={50} showInfo={false} />
          <span className="text-sm text-textDark">3:00</span>
        </div>
      </div>

      <div className="flex w-1/5 items-center justify-end">
        <div className="flex w-2/5 items-center gap-2">
          {value == 0 ? (
            <VolumeMute />
          ) : value < 50 ? (
            <VolumeDown />
          ) : (
            <VolumeUp />
          )}

          <div className="w-full">
            <Slider defaultValue={value} onChange={(e) => setValue(e)} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlayingController;
