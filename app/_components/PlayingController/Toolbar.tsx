import {
  PlayArrow,
  Replay,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from "@mui/icons-material";
import { ToggleIcon } from "../ToggleIcon";
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
        <span className="text-sm text-textDark">0:00</span>
        <Progress percent={50} showInfo={false} />
        <span className="text-sm text-textDark">3:00</span>
      </div>
    </>
  );
};
export default Toolbar;