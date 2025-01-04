"use client";
import { AddCircleOutline } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragFileInput = ({
  title = "",
  className = "",
}: {
  title?: string;
  className: string;
}) => {
  const onDrop = useCallback((acceptedFiles: Array<File>) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (!title) {
    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className={className}>
            <AddCircleOutline />
            <p>Chose your files or Drag n drop it here</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mb-2 flex items-center gap-4 p-2">
      {title && <p className="mb-2 w-[200px] text-xl font-bold">{title}</p>}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div className={className}>
            <AddCircleOutline />
            <p>Chose your files or Drag n drop it here</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default DragFileInput;

// text-md flex w-[500px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-main p-3 text-lg font-bold text-white hover:bg-bgHover
