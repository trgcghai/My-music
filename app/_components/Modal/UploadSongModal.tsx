import DragFileInput from "@components/DragFileInput";
import { closeModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@hooks/hooks";
import { useUploadFilesMutation } from "@services/rootApi";
import { DynamicModalProps } from "_types/component";
import { Modal } from "antd";
import { useState } from "react";

const UploadSongModal = (props: DynamicModalProps) => {
  const dispatch = useAppDispatch();
  const [files, setFiles] = useState<File[]>([]);
  const [uploadFiles] = useUploadFilesMutation();
  const { open, title } = useAppSelector((state) => state.modal);
  const dragFileInputClassName =
    "text-md flex h-[100px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-gray-800 p-3 text-lg text-white hover:bg-bgColorSuperLight";

  const handleCancel = () => {
    setFiles([]);
    dispatch(closeModal());
  };

  const handleConfirm = async () => {
    if (!files) return;
    if (files?.length == 0) return;

    try {
      const formData = new FormData();
      files.forEach((file: File) => {
        formData.append("files", file);
      });

      const result = await uploadFiles(formData).unwrap();

      console.log("upload result", result);

      setFiles([]);
      dispatch(closeModal());
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <Modal
      {...props}
      open={open}
      title={title}
      onOk={handleConfirm}
      onCancel={handleCancel}
    >
      <DragFileInput
        className={dragFileInputClassName}
        files={files}
        setFiles={setFiles}
      />
      ;
    </Modal>
  );
};
export default UploadSongModal;
