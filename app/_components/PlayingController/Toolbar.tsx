import Loading from "@components/Loading";
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
import { useGetSongByIdQuery } from "@services/songApi";
import { formatSongLength } from "@utils/formatSongLength";
import { Progress } from "antd";
import ReactHowler from "react-howler";

const Toolbar = () => {
  const dispatch = useAppDispatch();
  const { queue, currentIndex, shuffle, loop, volume, muted, status } =
    useAppSelector((state) => state.queue);
  const { data, isFetching, isLoading } = useGetSongByIdQuery(
    queue[currentIndex],
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

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
          <button onClick={() => dispatch(playPrevious())}>
            <SkipPrevious fontSize="medium" />
          </button>
          {status === "playing" ? (
            <button
              onClick={() => {
                dispatch(pauseSong());
              }}
            >
              <Pause fontSize="medium" />
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(playSong());
              }}
            >
              <PlayArrow fontSize="medium" />
            </button>
          )}
          <button onClick={() => dispatch(playNext())}>
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

      <div className="flex items-center gap-4">
        <span className="text-sm text-textColorDark">0:00</span>
        <Progress percent={50} showInfo={false} />
        <span className="text-sm text-textColorDark">
          {formatSongLength(data?.result[0]?.duration)}
        </span>
        <ReactHowler
          key={data?.result[0]?._id}
          src={data?.result[0]?.url || ""}
          playing={status === "playing"}
          volume={volume / 100}
          mute={muted}
          onEnd={() => dispatch(playNext())}
        />
      </div>
    </>
  );
};
export default Toolbar;
