import { ButtonProps, LegacyButtonType } from "antd/es/button/button";
import UploadSongModal from "./UploadSongModal";
import CreatePlaylistModal from "./CreatePlaylistModal";
import { useAppSelector } from "@hooks/hooks";
import { ConfigProvider } from "antd";
import AddToPlaylistModal from "./AddToPlaylistModal";
import UpdatePlaylistModal from "./UpdatePlaylistModal";
import RemoveFromPlaylistModal from "./RemoveFromPlaylistModal";

const DynamicModal = ({ type, ...props }: ModalProps) => {
  switch (type) {
    case "UPLOAD_SONG":
      return <UploadSongModal {...props} />;
    case "CREATE_PLAYLIST":
      return <CreatePlaylistModal {...props} />;
    case "UPDATE_PLAYLIST":
      return <UpdatePlaylistModal {...props} />;
    case "ADD_TO_PLAYLIST":
      return <AddToPlaylistModal {...props} />;
    case "REMOVE_FROM_PLAYLIST":
      return <RemoveFromPlaylistModal {...props} />;
    default:
      return null;
  }
};

const CustomModal = () => {
  const { type } = useAppSelector((state) => state.modal);

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "var(--bgColor)",
            headerBg: "var(--bgColor)",
            titleColor: "var(--textColor)",
            titleFontSize: 20,
          },
        },
      }}
    >
      <DynamicModal
        type={type}
        closable={false}
        okText="Confirm"
        okType="primary"
        okButtonProps={{
          className:
            "!w-[100px] !border-0 !bg-main !text-lg hover:!bg-bgColorSuperLight",
        }}
        cancelText="Cancel"
        cancelButtonProps={{
          className:
            "!w-[100px] !border-0 !bg-bgColorLight !text-lg !text-textColor hover:!bg-red-500 hover:!text-white",
        }}
      />
    </ConfigProvider>
  );
};
export default CustomModal;

interface ModalProps {
  type: string;
  closable: boolean;
  okText: string;
  okType: LegacyButtonType | undefined;
  okButtonProps: ButtonProps;
  cancelText: string;
  cancelButtonProps: ButtonProps;
}
