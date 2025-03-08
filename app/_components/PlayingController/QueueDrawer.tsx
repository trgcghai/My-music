import { Drawer } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import SongInfoCard from "./SongInfoCard";
import { SongData } from "_types/entity";
import { useGetSongByListIdQuery } from "@services/songApi";

const QueueDrawer = ({
  setOpen,
  open,
  currentSong,
  queue,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
  currentSong: SongData;
  queue: string[];
}) => {
  const { data } = useGetSongByListIdQuery(queue);

  const onClose = () => {
    setOpen(false);
  };

  console.log("check result", data);

  return (
    <Drawer
      title="Your queue"
      className="!bg-bgColor !text-textColor"
      onClose={onClose}
      open={open}
      closeIcon={<CloseIcon className="text-textColor" />}
    >
      <div className="no-scrollbar h-[100%] overflow-y-scroll">
        <div>
          <p className="text-lg font-bold">Now playing</p>
          <div className="mt-2 rounded-lg bg-bgColorDark p-4 text-main">
            <SongInfoCard song={currentSong} />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-lg font-bold">Next from your queue</p>
          <div className="mt-2 space-y-4">
            <div className="mt-2 rounded-lg bg-bgColorDark p-4">
              <SongInfoCard song={currentSong} />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};
export default QueueDrawer;
