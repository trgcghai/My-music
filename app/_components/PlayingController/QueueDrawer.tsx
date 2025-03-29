import { Drawer } from "antd";
import CloseIcon from "@mui/icons-material/Close";
import SongInfoCard from "./SongInfoCard";
import { SongRowProps } from "_types/component";

const QueueDrawer = ({
  setOpen,
  open,
  currentSong,
  queue,
}: {
  setOpen: (value: boolean) => void;
  open: boolean;
  currentSong: SongRowProps;
  queue: SongRowProps[];
}) => {
  const onClose = () => {
    setOpen(false);
  };

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
            {queue.slice(queue.indexOf(currentSong) + 1).map((song) => {
              return (
                <div
                  key={song.id}
                  className="mt-2 rounded-lg bg-bgColorDark p-4"
                >
                  <SongInfoCard song={song} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Drawer>
  );
};
export default QueueDrawer;
