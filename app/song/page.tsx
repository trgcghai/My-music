import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "antd";

const Song = () => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl font-bold">Your Songs</p>
      <Button
        variant="filled"
        className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
      >
        <AddCircleOutline />
        Create new
      </Button>
    </div>
  );
};
export default Song;
