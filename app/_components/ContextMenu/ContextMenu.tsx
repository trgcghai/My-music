import { AddCircleOutline, PlayArrow } from "@mui/icons-material";
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
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click key", e.key);
    console.log("additional data", additionalData);
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
