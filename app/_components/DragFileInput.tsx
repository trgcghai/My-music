import { AddCircleOutline } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragFileInput = () => {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex items-center gap-2">
          <AddCircleOutline />
          <p>Chose your files or Drag n drop it here</p>
        </div>
      )}
    </div>
  );
};
export default DragFileInput;
