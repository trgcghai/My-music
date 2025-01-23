"use client";
import { VolumeDown, VolumeMute, VolumeUp } from "@mui/icons-material";
import { InputNumberProps, Slider } from "antd";
import { useState } from "react";

const VolumeSlider = () => {
  const [value, setValue] = useState(100);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    setValue(newValue as number);
  };

  return (
    <div className="flex w-2/5 items-center gap-2">
      {value == 0 ? <VolumeMute /> : value < 50 ? <VolumeDown /> : <VolumeUp />}

      <div className="w-full">
        <Slider defaultValue={value} onChange={onChange} />
      </div>
    </div>
  );
};
export default VolumeSlider;
