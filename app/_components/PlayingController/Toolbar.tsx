import {
  pauseSong,
  playNext,
  playPrevious,
  playSong,
  toggleShuffle,
  toogleLoop,
} from "@libs/features/queue/queueSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
  Pause,
  PlayArrow,
  Repeat,
  RepeatOne,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { formatSongLength } from "@utils/formatSongLength";
import CustomSlider from "@components/CustomSlider";
import { useEffect, useRef, useState } from "react";
import { InputNumberProps } from "antd";

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const [currentTime, setCurrentTime] = useState(0);
  const { queue, currentIndex, shuffle, loop, volume, muted, status } =
    useAppSelector((state) => state.queue);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = volume / 1000;
    audioRef.current.muted = muted;
  }, [volume, muted]);

  useEffect(() => {
    if (audioRef.current && queue[currentIndex]) {
      audioRef.current.src = queue[currentIndex].url;
      audioRef.current.play();
      dispatch(playSong());
    }
  }, [currentIndex, dispatch, queue]);

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(pauseSong());
  };

  const handleEnded = () => {
    dispatch(playNext());
    setCurrentTime(0);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handlePlay = () => {
    audioRef.current.play();
    dispatch(playSong());
  };

  const handlePlayNext = () => {
    dispatch(playNext());
  };

  const handlePlayPrevious = () => {
    dispatch(playPrevious());
  };

  const handleSeek: InputNumberProps["onChange"] = (newValue) => {
    const audio = audioRef.current;
    const seekTime = parseFloat(newValue as string);
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <>
      <div className="mb-1 flex justify-center gap-2">
        <div className="flex gap-2">
          <button onClick={() => dispatch(toggleShuffle())}>
            <Shuffle
              fontSize="medium"
              style={{ color: shuffle ? "var(--main)" : "" }}
            />
          </button>
          <button onClick={handlePlayPrevious}>
            <SkipPrevious fontSize="medium" />
          </button>
          {status === "playing" ? (
            <button onClick={handleStop}>
              <Pause fontSize="medium" />
            </button>
          ) : (
            <button onClick={handlePlay}>
              <PlayArrow fontSize="medium" />
            </button>
          )}
          <button onClick={handlePlayNext}>
            <SkipNext fontSize="medium" />
          </button>
          <button onClick={() => dispatch(toogleLoop())}>
            {loop === "none" ? (
              <Repeat fontSize="medium" />
            ) : loop === "one" ? (
              <RepeatOne fontSize="medium" style={{ color: "var(--main)" }} />
            ) : (
              <Repeat fontSize="medium" style={{ color: "var(--main)" }} />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="flex-1 text-sm text-textColorDark">
          {queue[currentIndex] ? "0:00" : "-:--"}
        </span>
        <CustomSlider
          onChange={handleSeek}
          value={currentTime}
          className="flex-[8]"
          step={0.01}
          minValue={0}
          maxValue={queue[currentIndex]?.length || 0}
        />

        <span className="flex-1 text-sm text-textColorDark">
          {formatSongLength(queue[currentIndex]?.length) == "NaN:NaN"
            ? "-:--"
            : formatSongLength(queue[currentIndex]?.length)}
        </span>
        <audio
          ref={audioRef}
          src={queue[currentIndex]?.url || [""]}
          onEnded={handleEnded}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    </>
  );
};
export default Toolbar;
