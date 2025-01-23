"use client";
import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "antd";
import TableSongs from "../_components/TableSongs";
import { useAppDispatch } from "../_libs/hooks";
import { useGetSongQuery } from "../_services/rootApi";
import Loading from "../_components/Loading";
import { openModal } from "../_libs/features/modal/modalSlice";
import { ModalType } from "../define";

const Song = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading } = useGetSongQuery();

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your Songs</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={() => {
            dispatch(
              openModal({
                type: ModalType.UPLOAD_SONG,
                title: "Upload your songs",
              }),
            );
          }}
        >
          <AddCircleOutline />
          Upload your songs
        </Button>
      </div>
      <div className="no-scrollbar mt-2 h-[85%] space-y-4 overflow-scroll">
        {isFetching || isLoading ? (
          <Loading />
        ) : (
          <TableSongs title="" canSeeAll={false} songs={data?.result || []} />
        )}
      </div>
    </>
  );
};
export default Song;
