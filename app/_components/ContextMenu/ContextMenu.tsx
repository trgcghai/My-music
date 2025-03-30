import { openModal } from "@libs/features/modal/modalSlice";
import { addToQueue, removeFromQueue } from "@libs/features/queue/queueSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import {
  AddCircleOutline,
  DeleteOutline,
  PlayArrow,
  PlaylistAdd,
} from "@mui/icons-material";
import { ModalType } from "_types/component";
import { ConfigProvider, Menu, MenuProps } from "antd";
import { useMemo } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "play",
    label: "Play this song",
    icon: <PlayArrow />,
    className: "text-[16px]",
  },
  {
    key: "addToQueue",
    label: "Add to queue",
    icon: <PlaylistAdd />,
    className: "text-[16px]",
  },
  {
    key: "addToPlaylist",
    label: "Add to playlist",
    icon: <AddCircleOutline />,
    className: "text-[16px]",
  },
  {
    key: "removeFromPlaylist",
    label: "Remove from this playlist",
    icon: <DeleteOutline />,
    className: "text-[16px]",
    danger: true,
  },
  {
    key: "removeFromQueue",
    label: "Remove from queue",
    icon: <DeleteOutline />,
    className: "text-[16px]",
  },
];

const ContextMenu = ({
  visible,
  additionalData,
  showRemoveFromPlaylist = false,
  showRemoveFromQueue = false,
}: {
  visible: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  additionalData: any;
  showRemoveFromPlaylist?: boolean;
  showRemoveFromQueue?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { queue } = useAppSelector((state) => state.queue);

  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "play":
        dispatch(
          addToQueue({
            song: additionalData,
            type: "addByPlay",
          }),
        );
        break;
      case "addToQueue":
        dispatch(
          addToQueue({
            song: additionalData,
            type: "addByAddToQueue",
          }),
        );
        break;
      case "addToPlaylist":
        dispatch(
          openModal({
            type: ModalType.ADD_TO_PLAYLIST,
            title: "Add to playlist",
            data: additionalData,
          }),
        );
        break;
      case "removeFromPlaylist":
        dispatch(
          openModal({
            type: ModalType.REMOVE_FROM_PLAYLIST,
            title: "Remove from playlist",
            data: additionalData,
          }),
        );
        break;
      case "removeFromQueue":
        console.log("removeFromQueue", additionalData);
        console.log("queue: ", queue);
        dispatch(
          removeFromQueue({
            song: additionalData,
          }),
        );
        break;
      default:
    }
  };

  const filteredItems = useMemo(() => {
    let res = [...items];

    if (!showRemoveFromPlaylist) {
      res = res.filter((item) => item.key !== "removeFromPlaylist");
    }
    if (!showRemoveFromQueue) {
      res = res.filter((item) => item.key !== "removeFromQueue");
    }

    return res;
  }, [showRemoveFromPlaylist, showRemoveFromQueue]);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: "var(--bgColorLight)",
            itemColor: "var(--textColor)",
            itemHoverColor: "var(--main)",
            itemBorderRadius: 12,
            itemSelectedBg: "var(--bgColorSuperLight)",
            itemSelectedColor: "var(--main)",
            dangerItemSelectedBg: "var(--bgColorSuperLight)",
          },
        },
      }}
    >
      {visible && (
        <Menu
          onClick={onClick}
          items={filteredItems}
          style={{
            width: "250px",
            borderRadius: "12px",
            zIndex: 9999,
          }}
        />
      )}
    </ConfigProvider>
  );
};
export default ContextMenu;
