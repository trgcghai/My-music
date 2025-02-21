import { openModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch } from "@libs/hooks";
import { AddCircleOutline, PlayArrow } from "@mui/icons-material";
import { ModalType } from "_types/component";
import { ConfigProvider, Menu, MenuProps } from "antd";

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
];

const ContextMenu = ({ visible, additionalData }) => {
  const dispatch = useAppDispatch();
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("additional data", additionalData);
    switch (e.key) {
      case "play":
        console.log("play this song");
        break;
      case "addToPlaylist":
        console.log("add to playlist");
        localStorage.setItem("additionalData", additionalData);
        dispatch(
          openModal({
            type: ModalType.ADD_TO_PLAYLIST,
            title: "Add to playlist",
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
          },
        },
      }}
    >
      {visible && (
        <Menu
          onClick={onClick}
          items={items}
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
