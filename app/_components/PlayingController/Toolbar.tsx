import { ToggleIcon } from "@components/ToggleIcon";
import {
  PlayArrow,
  Replay,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { Progress } from "antd";

const Toolbar = () => {
  return (
    <>
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
        <span className="text-textColorDark text-sm">0:00</span>
        <Progress percent={50} showInfo={false} />
        <span className="text-textColorDark text-sm">3:00</span>
      </div>
    </>
  );
};
export default Toolbar;
