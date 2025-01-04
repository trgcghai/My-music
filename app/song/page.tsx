"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button, ConfigProvider, Modal } from "antd";
import SongRow from "../_components/SongRow";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import DragFileInput from "../_components/DragFileInput";

const Song = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

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
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Songs</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={showModal}
        >
          <AddCircleOutline />
          Upload your songs
        </Button>
      </div>
      <div className="no-scrollbar mt-2 h-[85%] space-y-4 overflow-scroll">
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
      </div>

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
          <DragFileInput className="text-md flex cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-gray-800 p-3 text-lg text-white hover:bg-bgHover" />
        </Modal>
      </ConfigProvider>
    </>
  );
};
export default Song;
