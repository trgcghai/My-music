import { Avatar, Popover } from "antd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAppSelector } from "@hooks/hooks";
import Link from "next/link";

const UserAvatar = () => {
  const user = useAppSelector((state) => state.auth.userInfo);
  return (
    <div className="flex items-center gap-3">
      <Popover
        placement="bottom"
        arrow={false}
        color="var(--bgColorLight)"
        content={<p className="text-md text-textColor">{user.username}</p>}
      >
        <Link href="/profile">
          <Avatar
            src={
              user.avatar ? user.avatar : <AccountCircleIcon fontSize="large" />
            }
            size={46}
          />
        </Link>
      </Popover>
    </div>
  );
};
export default UserAvatar;
