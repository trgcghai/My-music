"use client";
import { AddCircleOutline } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragFileInput = () => {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mb-2 flex items-center gap-4 p-2">
      <p className="mb-2 w-[200px] text-xl font-bold">Upload your song</p>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className="text-md flex w-[500px] cursor-pointer items-center justify-center gap-2 rounded-md border bg-bgLightColor p-3 hover:bg-bgHover">
            <AddCircleOutline />
            <p>Chose your files or Drag n drop it here</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default DragFileInput;
