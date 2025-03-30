import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useAppSelector } from "@hooks/hooks";

export default function ProfileHeader() {
  const { userInfo } = useAppSelector((state) => state.auth);
  console.log("check userInfo", userInfo);

  return (
    <div className="mb-6 flex items-center gap-4">
      <Avatar
        size={80}
        icon={<UserOutlined />}
        src={userInfo?.avatar || "no_image.jpg"}
      />
      <div>
        <h1 className="text-2xl font-bold text-white">{userInfo.username}</h1>
      </div>
    </div>
  );
}
