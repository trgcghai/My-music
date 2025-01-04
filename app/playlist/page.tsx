"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button, Input } from "antd";
import MediaCard from "../_components/MediaCard";
import { useState } from "react";
import CustomModal from "../_components/CustomModal";

const Playlist = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Playlist</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={showModal}
        >
          <AddCircleOutline />
          Create new
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-6 gap-8">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return <MediaCard key={index} />;
        })}
      </div>

      <CustomModal open={open} setOpen={setOpen} title="Create new playlist">
        <p className="mb-1 text-lg text-textColor">Name your playlist</p>
        <Input className="!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main" />
      </CustomModal>
    </>
  );
};
export default Playlist;
