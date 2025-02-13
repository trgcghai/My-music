"use client";
import Loading from "@components/Loading";
import PlaylistCard from "@components/PlaylistCard";
import { openModal } from "@libs/features/modal/modalSlice";
import { useAppDispatch } from "@libs/hooks";
import { AddCircleOutline } from "@mui/icons-material";
import { useGetPlaylistQuery } from "@services/playlistApi";
import { ModalType } from "_types/component";
import { Button } from "antd";

const Playlist = () => {
  const {
    data,
    isLoading: getLoading,
    isFetching: getFetching,
  } = useGetPlaylistQuery();
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">Your playlist</p>
        <Button
          variant="filled"
          className="!flex !items-center !gap-4 !border-0 !bg-main !px-4 !py-5 !text-lg !font-bold !text-white"
          onClick={() => {
            dispatch(
              openModal({
                type: ModalType.CREATE_PLAYLIST,
                title: "Create new playlist",
              }),
            );
          }}
        >
          <AddCircleOutline />
          Create new
        </Button>
      </div>
      {getLoading || getFetching ? (
        <Loading />
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {(data?.result || []).map((playlist) => {
            return (
              <PlaylistCard
                key={playlist._id}
                id={playlist._id}
                thumbnail={playlist.thumbnail}
                title={playlist.name}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Playlist;
