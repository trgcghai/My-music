"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "antd";
import { useState } from "react";
import DragFileInput from "../_components/DragFileInput";
import CustomModal from "../_components/CustomModal";
import TableSongs from "../_components/TableSongs";
import { useAppDispatch, useAppSelector } from "../_libs/hooks";
import { setFiles } from "../_libs/features/file/fileSlice";

const Song = () => {
  const [open, setOpen] = useState(false);
  const { files } = useAppSelector((state) => state.file);
  const dispatch = useAppDispatch();

  console.log(files);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancelModal = () => {
    dispatch(setFiles([]));
    setOpen(false);
  };

  const handleConfirm = async () => {
    if (!files) return;
    if (files?.length == 0) return;

    const result = await fetch(process.env.NEXT_PUBLIC_API_URL + "/song", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        songs: files,
      }),
    });
    const data = await result.json();
    console.log(data);

    dispatch(setFiles([]));
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Songs</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={showModal}
        >
          <AddCircleOutline />
          Upload your songs
        </Button>
      </div>
      <div className="no-scrollbar mt-2 h-[85%] space-y-4 overflow-scroll">
        <TableSongs
          title=""
          canSeeAll={false}
          songs={[]}
          numberDisplayed={100}
        />
      </div>

      <CustomModal
        open={open}
        handleConfirm={handleConfirm}
        handleCancel={handleCancelModal}
        setOpen={setOpen}
        title="Upload your songs"
      >
        <DragFileInput className="text-md flex h-[100px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-gray-800 p-3 text-lg text-white hover:bg-bgHover" />
      </CustomModal>
    </>
  );
};
export default Song;
