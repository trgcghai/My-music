"use client";
import { setVolume, toogleMuted } from "@libs/features/queue/queueSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { VolumeDown, VolumeMute, VolumeUp } from "@mui/icons-material";
import { InputNumberProps, Slider } from "antd";

const VolumeSlider = () => {
  const dispatch = useAppDispatch();
  const { muted, volume } = useAppSelector((state) => state.queue);

  const onChange: InputNumberProps["onChange"] = (newValue) => {
    dispatch(setVolume({ volume: newValue as number }));
  };

  return (
    <div className="flex w-2/5 items-center gap-2">
      {volume == 0 || muted ? (
        <button onClick={() => dispatch(toogleMuted({ muted: false }))}>
          <VolumeMute />
        </button>
      ) : volume < 50 ? (
        <button onClick={() => dispatch(toogleMuted({ muted: true }))}>
          <VolumeDown />
        </button>
      ) : (
        <button onClick={() => dispatch(toogleMuted({ muted: true }))}>
          <VolumeUp />
        </button>
      )}

      <div className="w-full">
        <Slider defaultValue={volume} onChange={onChange} />
      </div>
    </div>
  );
};
export default VolumeSlider;
