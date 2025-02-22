"use client";
import { AddCircleOutline } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DragFileInput = ({
  className = "",
  files,
  setFiles,
}: {
  title?: string;
  className: string;
  files?: File[];
  setFiles?: (files: File[]) => void;
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(setFiles)],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "audio/*": [
        ".mp3",
        ".wav",
        ".flac",
        ".mkv",
        ".m4a",
        ".aac",
        ".ogg",
        ".flac",
      ],
    },
    maxSize: 20 * 1024 * 1024,
  });

  return (
    <>
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
      <div>
        <p className="mt-2 text-lg text-textColor">
          Total songs: {files?.length}
        </p>
        <div className="no-scrollbar my-3 max-h-80 space-y-2 overflow-scroll">
          {files &&
            files.map((file) => (
              <p
                className="bg-bgColorLight cursor-default rounded-md px-2 py-1 text-textColor"
                key={file.name}
              >
                {file.name}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};
export default DragFileInput;
