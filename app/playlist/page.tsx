"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button, Input } from "antd";
import { useState } from "react";
import CustomModal from "../_components/CustomModal";
import PlaylistCard from "../_components/PlaylistCard";
import {
  useCreatePlaylistMutation,
  useGetPlaylistQuery,
} from "../_services/rootApi";
import Loading from "../_components/Loading";

const Playlist = () => {
  const [open, setOpen] = useState(false);
  const [playlist, setPlaylist] = useState("");
  const {
    data,
    isLoading: getLoading,
    isFetching: getFetching,
  } = useGetPlaylistQuery();
  const [createPlaylist] = useCreatePlaylistMutation();

  const showModal = () => {
    setOpen(true);
  };

  const handleCancelModal = () => {
    setPlaylist("");
    setOpen(false);
  };

  const handleConfirm = async () => {
    if (!playlist) return;
    await createPlaylist(playlist).unwrap();
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
      {getLoading || getFetching ? (
        <Loading />
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {(data?.result || []).map((playlist) => {
            return (
              <PlaylistCard
                key={playlist._id}
                id={playlist._id}
                thumbnail={playlist.thumbnail}
                title={playlist.name}
              />
            );
          })}
        </div>
      )}

      <CustomModal
        open={open}
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
