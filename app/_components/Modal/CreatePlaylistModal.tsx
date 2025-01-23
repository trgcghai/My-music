import { closeModal } from "@/app/_libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/app/_libs/hooks";
import { useCreatePlaylistMutation } from "@/app/_services/rootApi";
import { DynamicModalProps } from "@/app/define";
import { Input, Modal } from "antd";
import { useState } from "react";

const CreatePlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const [playlist, setPlaylist] = useState("");
  const { open, title } = useAppSelector((state) => state.modal);
  const [createPlaylist] = useCreatePlaylistMutation();

  const handleCancel = () => {
    setPlaylist("");
    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    if (!playlist) return;
    await createPlaylist(playlist).unwrap();
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
        className="!h-[40px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main"
        value={playlist}
        onChange={(e) => setPlaylist(e.target.value)}
      />
    </Modal>
  );
};
export default CreatePlaylistModal;
