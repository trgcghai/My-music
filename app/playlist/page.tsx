import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "antd";
import MediaCard from "../_components/MediaCard";

const Playlist = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Playlist</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
        >
          <AddCircleOutline />
          Create new
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-6 gap-8">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
};
export default Playlist;
