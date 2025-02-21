import Loading from "@components/Loading";
import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@libs/hooks";
import {
  useAddSongToPlaylistMutation,
  useGetPlaylistByEmailQuery,
} from "@services/playlistApi";
import { DynamicModalProps } from "_types/component";
import { Checkbox, Modal } from "antd";
import { useState } from "react";

const AddToPlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const { open, title } = useAppSelector((state) => state.modal);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [selectedPlaylists, setSelectedPlaylists] = useState<string[]>([]);
  const {
    data: playlistData,
    isLoading: loadingPlaylist,
    isFetching: fetchingPlaylist,
  } = useGetPlaylistByEmailQuery(userInfo.email);
  const [addSongToPlaylist, { data }] = useAddSongToPlaylistMutation();

  const handleConfirm = async () => {
    const songId = localStorage.getItem("additionalData");
    const setPlaylists = [...new Set(selectedPlaylists)];
    console.log("selected playlists:", [...new Set(selectedPlaylists)]);
    console.log("song id:", songId);

    if (setPlaylists.length === 0) {
      return;
    }

    await addSongToPlaylist({
      songId,
      listPlaylists: setPlaylists,
    }).unwrap();

    console.log("add song to playlist result:", data);
    dispatch(closeModal());
  };

  const handleCancel = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      {...props}
      open={open}
      title={title}
      onOk={handleConfirm}
      onCancel={handleCancel}
    >
      {(fetchingPlaylist || loadingPlaylist) && <Loading />}
      {playlistData?.result &&
        playlistData?.result.length > 0 &&
        playlistData?.result.map((playlist) => {
          return (
            <div key={playlist._id}>
              <Checkbox
                className="text-lg text-textColor"
                checked={playlist.songs
                  .map((song) => song._id)
                  .includes(localStorage.getItem("additionalData"))}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedPlaylists([...selectedPlaylists, playlist._id]);
                  } else {
                    setSelectedPlaylists(
                      selectedPlaylists.filter((id) => id !== playlist._id),
                    );
                  }
                }}
              >
                {playlist.name}
              </Checkbox>
            </div>
          );
        })}
    </Modal>
  );
};
export default AddToPlaylistModal;
