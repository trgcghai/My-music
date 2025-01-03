"use client";
import { VolumeDown, VolumeMute, VolumeUp } from "@mui/icons-material";
import { Slider } from "antd";
import { useState } from "react";

const VolumeSlider = () => {
  const [value, setValue] = useState(100);
  return (
    <div className="flex w-2/5 items-center gap-2">
      {value == 0 ? <VolumeMute /> : value < 50 ? <VolumeDown /> : <VolumeUp />}

      <div className="w-full">
        <Slider defaultValue={value} onChange={(e) => setValue(e)} />
      </div>
    </div>
  );
};
export default VolumeSlider;
