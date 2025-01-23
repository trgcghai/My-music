import { ButtonProps, ConfigProvider } from "antd";
import { useAppSelector } from "../../_libs/hooks";
import UploadSongModal from "./UploadSongModal";
import { LegacyButtonType } from "antd/es/button/button";
import CreatePlaylistModal from "./CreatePlaylistModal";

const DynamicModal = ({ type, ...props }: ModalProps) => {
  switch (type) {
    case "UPLOAD_SONG":
      return <UploadSongModal {...props} />;
    case "CREATE_PLAYLIST":
      return <CreatePlaylistModal {...props} />;
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
          className: "!w-[100px] !border-0 !bg-main !text-lg hover:!bg-bgHover",
        }}
        cancelText="Cancel"
        cancelButtonProps={{
          className:
            "!w-[100px] !border-0 !bg-bgLightColor !text-lg !text-textColor hover:!bg-red-500 hover:!text-white",
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
