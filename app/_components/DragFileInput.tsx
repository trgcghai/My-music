"use client";
import { AddCircleOutline } from "@mui/icons-material";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useCounterStore } from "../_providers/counter-store-provider";
import { FileProps } from "../define";

const DragFileInput = ({
  className = "",
}: {
  title?: string;
  className: string;
}) => {
  const { files, setFiles } = useCounterStore((state) => state);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const mappedFiles = acceptedFiles.map((file: File) => {
      console.log(file);
      return {
        name: file.name,
        path: "./" + file.name,
        relativePath: "./" + file.name,
        lastModifiedDate: new Date(file.lastModified).toISOString(),
        lastModified: file.lastModified,
        size: file.size,
        type: file.type,
        webkitRelativePath: file.webkitRelativePath,
      };
    }) as unknown as FileProps[];
    setFiles(mappedFiles);
  }, []);

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
                className="cursor-default rounded-md bg-bgLightColor px-2 py-1 text-textColor"
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
