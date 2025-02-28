import { openModal } from "@libs/features/modal/modalSlice";
import { addToQueue } from "@libs/features/queue/queueSlice";
import { useAppDispatch } from "@libs/hooks";
import {
  AddCircleOutline,
  DeleteOutline,
  PlayArrow,
} from "@mui/icons-material";
import { ModalType } from "_types/component";
import { ConfigProvider, Menu, MenuProps } from "antd";
import { usePathname } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "play",
    label: "Play this song",
    icon: <PlayArrow />,
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
];

const ContextMenu = ({ visible, additionalData }) => {
  const dispatch = useAppDispatch();
  const path = usePathname();
  const onClick: MenuProps["onClick"] = (e) => {
    switch (e.key) {
      case "play":
        dispatch(
          addToQueue({
            queue: [additionalData],
          }),
        );
        break;
      case "addToPlaylist":
        dispatch(
          openModal({
            type: ModalType.ADD_TO_PLAYLIST,
            title: "Add to playlist",
            data: {
              songId: additionalData,
            },
          }),
        );
        break;
      case "removeFromPlaylist":
        console.log("remove from this playlist");
        dispatch(
          openModal({
            type: ModalType.REMOVE_FROM_PLAYLIST,
            title: "Remove from playlist",
            data: {
              songId: additionalData,
            },
          }),
        );
        break;
      default:
    }
  };

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
          items={
            path.includes("playlist")
              ? items
              : items.filter((item) => item.key !== "removeFromPlaylist")
          }
          style={{
            width: "250px",
            borderRadius: "12px",
          }}
        />
      )}
    </ConfigProvider>
  );
};
export default ContextMenu;
