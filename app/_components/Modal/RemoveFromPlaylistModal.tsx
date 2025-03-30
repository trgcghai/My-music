import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useRemoveSongFromPlaylistMutation } from "@services/playlistApi";
import { DynamicModalProps } from "_types/component";
import { Modal } from "antd";
import { useParams } from "next/navigation";

const RemoveFromPlaylistModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { open, title, data } = useAppSelector((state) => state.modal);
  const [removeSongFromPlaylist] = useRemoveSongFromPlaylistMutation();

  const handleConfirm = async () => {
    console.log(data);
    const { id: songId } = data;
    const playlistId = typeof id === "string" ? id : "";

    await removeSongFromPlaylist({
      songId,
      playlistId,
    }).unwrap();

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
      <p className="text-lg text-textColor">
        Are you sure to remove the song from this playlist ?
      </p>
    </Modal>
  );
};
export default RemoveFromPlaylistModal;
