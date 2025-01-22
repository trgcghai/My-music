"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button, Input } from "antd";
import { useState } from "react";
import CustomModal from "../_components/CustomModal";
import PlaylistCard from "../_components/PlaylistCard";

const Playlist = () => {
  const [open, setOpen] = useState(false);
  const [playlist, setPlaylist] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleCancelModal = () => {
    setPlaylist("");
    setOpen(false);
  };

  const handleConfirm = async () => {
    if (!playlist) return;
    const result = await fetch(process.env.NEXT_PUBLIC_API_URL + "/playlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        playlist,
      }),
    });
    const data = await result.json();
    console.log(data);
    setPlaylist("");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your playlist</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={showModal}
        >
          <AddCircleOutline />
          Create new
        </Button>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => {
          return <PlaylistCard key={index} id={index} />;
        })}
      </div>

      <CustomModal
        open={open}
        setOpen={setOpen}
        handleConfirm={handleConfirm}
        handleCancel={handleCancelModal}
        title="Create new playlist"
      >
        <p className="mb-1 text-lg text-textColor">Name your playlist</p>
        <Input
          className="!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main"
          value={playlist}
          onChange={(e) => setPlaylist(e.target.value)}
        />
      </CustomModal>
    </>
  );
};
export default Playlist;
