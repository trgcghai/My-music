import DragFileInput from "@components/DragFileInput";
import { setFiles } from "@libs/features/file/fileSlice";
import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@libs/hooks";
import { useUploadFilesMutation } from "@services/rootApi";
import { Modal } from "antd";
import { DynamicModalProps } from "define";

const UploadSongModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const [uploadFiles] = useUploadFilesMutation();
  const { files } = useAppSelector((state) => state.file);
  const { open, title } = useAppSelector((state) => state.modal);
  const dragFileInputClassName =
    "text-md flex h-[100px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-gray-800 p-3 text-lg text-white hover:bg-bgHover";

  const handleCancel = () => {
    dispatch(setFiles([]));
    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    if (!files) return;
    if (files?.length == 0) return;

    uploadFiles(files);

    dispatch(setFiles([]));
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
      <DragFileInput className={dragFileInputClassName} />;
    </Modal>
  );
};
export default UploadSongModal;
