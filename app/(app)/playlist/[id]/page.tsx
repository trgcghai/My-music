"use client";
import Loading from "@components/Loading";
import { useGetPlaylistByIdQuery } from "@services/playlistApi";
import { useParams } from "next/navigation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SongList from "@components/TableSong/SongList";
import { formatTotalLength } from "@utils/formatSongLength";
import { useAppDispatch } from "@libs/hooks";
import { openModal } from "@libs/features/modal/modalSlice";
import { ModalType } from "_types/component";

const Page = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetPlaylistByIdQuery(
    typeof id === "string" ? id : "",
  );

  if (isLoading || isFetching) return <Loading />;

  return (
    <div>
      <div className="space-y-6">
        <p
          className="cursor-pointer text-6xl font-bold text-textColor"
          onClick={() => {
            dispatch(
              openModal({
                title: "Update your playlist",
                type: ModalType.UPDATE_PLAYLIST,
                data: {
                  playlistName: data?.result[0].name,
                },
              }),
            );
          }}
        >
          {data?.result[0].name}
        </p>
        <div>
          <p className="text-md">
            Number of songs: {data?.result[0].songs.length}
          </p>
          <p className="text-md">
            Total length:{" "}
            {formatTotalLength(
              data?.result[0].songs.reduce(
                (acc, song) => acc + song.duration,
                0,
              ),
            )}
          </p>
        </div>
      </div>
      {data?.result[0].songs && data?.result[0].songs.length > 0 && (
        <div className="my-5 flex items-center gap-4">
          <PlayArrowIcon
            fontSize="large"
            className="scale-120 ml-2 w-[70px] cursor-pointer rounded-full bg-main text-white"
          />
          <p className="cursor-pointer text-3xl font-bold text-white">
            Play this playlist
          </p>
        </div>
      )}

      <div className="mt-4">
        {data?.result[0].songs && data?.result[0].songs.length > 0 && (
          <SongList
            songs={data?.result[0].songs || []}
            title=""
            canSeeAll={false}
            singlePage={true}
          />
        )}
      </div>
    </div>
  );
};
export default Page;
