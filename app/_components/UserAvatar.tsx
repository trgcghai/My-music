import { Avatar, ConfigProvider, Popover } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@hooks/hooks";

const UserAvatar = () => {
  const user = useAppSelector((state) => state.auth.userInfo);
  console.log("user", user);
  return (
    <div className="flex items-center gap-3">
      <Popover
        placement="bottom"
        arrow={false}
        color="var(--bgColorLight)"
        content={<p className="text-md text-textColor">{user.username}</p>}
      >
        <Avatar
          src={
            user.avatar ? user.avatar : <AccountCircleIcon fontSize="large" />
          }
          size={46}
        />
      </Popover>
    </div>
  );
};
export default UserAvatar;
