import { Button, ConfigProvider, Modal } from "antd";
import { Dispatch, ReactElement, SetStateAction, useState } from "react";

const CustomModal = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactElement;
}) => {
  const [loading, setLoading] = useState(false);

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
      <Modal
        open={open}
        title="Upload your songs"
        onOk={handleOk}
        closable={false}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            className="!w-[100px] !border-0 !bg-bgLightColor !text-lg !text-textColor hover:!bg-red-500 hover:!text-white"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
            className="!w-[100px] !border-0 !bg-main !text-lg hover:!bg-bgHover"
          >
            Confirm
          </Button>,
        ]}
      >
        {children}
      </Modal>
    </ConfigProvider>
  );
};
export default CustomModal;