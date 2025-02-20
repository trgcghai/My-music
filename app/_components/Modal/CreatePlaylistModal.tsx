import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@libs/hooks";
import { useCreatePlaylistMutation } from "@services/playlistApi";
import { DynamicModalProps } from "_types/component";
import { Input, Modal } from "antd";
import { useState } from "react";

const CreatePlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState("");
  const { open, title } = useAppSelector((state) => state.modal);
  const { userInfo } = useAppSelector((state) => state.auth);
  const [createPlaylist] = useCreatePlaylistMutation();

  const handleCancel = () => {
    setPlaylist("");
    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    if (!playlist) return;
    const result = await createPlaylist({ playlist, userInfo }).unwrap();
    console.log("create playlist result:", result);
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
      <p className="mb-1 text-lg text-textColor">Name your playlist</p>
      <Input
        className="!bg-bgColorLight !h-[40px] !rounded-lg !text-lg !text-textColor hover:border-main"
        value={playlist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
    </Modal>
  );
};
export default CreatePlaylistModal;
