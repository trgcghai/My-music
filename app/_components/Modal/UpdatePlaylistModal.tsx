import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@libs/hooks";
import { useUpdatePlaylistMutation } from "@services/playlistApi";
import { DynamicModalProps } from "_types/component";
import { Input, Modal } from "antd";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const UpdatePlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [playlist, setPlaylist] = useState("");
  const { open, title, data } = useAppSelector((state) => state.modal);
  const [updatePlaylist] = useUpdatePlaylistMutation();

  useEffect(() => {
    setPlaylist(data.playlistName || "");
  }, [data.playlistName]);

  const handleCancel = () => {
    setPlaylist("");
    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    if (!playlist) return;

    await updatePlaylist({
      playlist,
      id: typeof id === "string" ? id : "",
    }).unwrap();

    setPlaylist("");
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
      <p className="mb-1 text-lg text-textColor">Playlist name</p>
      <Input
        className="!h-[40px] !rounded-lg !bg-bgColorLight !text-lg !text-textColor hover:border-main"
        value={playlist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
    </Modal>
  );
};
export default UpdatePlaylistModal;
