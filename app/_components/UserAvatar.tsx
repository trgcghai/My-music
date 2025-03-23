import { Avatar } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@hooks/hooks";

const UserAvatar = () => {
  const user = useAppSelector((state) => state.auth.userInfo);
  return (
    <div className="flex items-center gap-3">
      <Avatar icon={<AccountCircleIcon fontSize="large" />} size={46} />
      <p className="text-md text-textColor">{user.username}</p>
    </div>
  );
};
export default UserAvatar;
