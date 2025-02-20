import React from "react";
import { Card, Typography, Dropdown, Button } from "antd";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import type { MenuProps } from "antd";
import { useRouter } from "next/navigation";
import { useDeletePlaylistMutation } from "@services/playlistApi";
import Loading from "./Loading";

const { Title, Text } = Typography;

const PlaylistCard: React.FC<PlaylistCardProps> = ({
  id,
  title,
  songCount,
  duration,
}) => {
  const router = useRouter();
  const [deletePlaylist, { isLoading }] = useDeletePlaylistMutation();

  const style = {
    dropdownStyle: {
      backgroundColor: "#19272e",
      borderColor: "#2a3942",
    },
    menuItemStyle: {
      backgroundColor: "#19272e",
      color: "white",
    },
  };

  const onClick: MenuProps["onClick"] = async ({ key, domEvent }) => {
    domEvent.stopPropagation();
    if (key === "delete") {
      await deletePlaylist(id).unwrap();
    }
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "delete",
      label: "Delete Playlist",
      icon: isLoading ? (
        <Loading />
      ) : (
        <DeleteIcon className="!text-md text-red-500" />
      ),
      className: "!text-md !text-red-500",
    },
  ];

  const handleDropdownRender = (menu: React.ReactNode) => (
    <div style={style.dropdownStyle}>
      {React.cloneElement(
        menu as React.ReactElement,
        {
          style: style.menuItemStyle,
        } as React.HTMLAttributes<HTMLElement>,
      )}
    </div>
  );

  const navigateToPlaylistPage = () => {
    router.push(`/playlist/${id}`);
  };

  return (
    <Card
      className="bg-bgColorLight w-full min-w-[200px] cursor-pointer border-[#2a3942] text-white"
      onClick={navigateToPlaylistPage}
    >
      <Title level={4} className="mb-2 !text-white">
        {title}
      </Title>
      <div className="flex items-center justify-between">
        <div>
          <Text className="text-gray-300">
            {songCount} {songCount === 1 ? "song" : "songs"}
          </Text>
          <br />
          <Text className="text-gray-300">{duration} total</Text>
        </div>

        <Dropdown
          menu={{
            items: menuItems,
            style: style.dropdownStyle,
            onClick,
          }}
          placement="bottomRight"
          dropdownRender={handleDropdownRender}
        >
          <Button
            type="text"
            icon={<MoreVertOutlinedIcon style={{ color: "white" }} />}
            style={{ color: "white" }}
          />
        </Dropdown>
      </div>
    </Card>
  );
};

export default PlaylistCard;

interface PlaylistCardProps {
  id: string;
  title: string;
  songCount: number;
  duration: string;
}
