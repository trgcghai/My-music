"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button, Modal } from "antd";
import SongRow from "../_components/SongRow";
import { useState } from "react";
import { Footer } from "antd/es/layout/layout";
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

      <Modal
        open={open}
        title="Upload your songs"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button type="primary" loading={loading} onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      ></Modal>
    </>
  );
};
export default Song;
