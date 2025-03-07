"use client";
import Loading from "@components/Loading";
import MediaList from "@components/MediaList";
import SearchInput from "@components/SearchInput";
import SongList from "@components/TableSong/SongList";
import { useAppSelector } from "@hooks/hooks";
import { useGetPlaylistByEmailQuery } from "@services/playlistApi";
import { useGetSongQuery } from "@services/songApi";
import Link from "next/link";

export default function Home() {
  const { userInfo } = useAppSelector((state) => state.auth);
  const {
    data: songResponse,
    isLoading: songLoading,
    isFetching: songFetching,
  } = useGetSongQuery();
  const {
    data: playlistResponse,
    isLoading: playlistLoading,
    isFetching: playlistFetching,
  } = useGetPlaylistByEmailQuery(userInfo.email);

  return (
    <div>
      <SearchInput />

      <div className="mt-8">
        {playlistLoading || playlistFetching ? (
          <Loading />
        ) : (
          <MediaList playlist={playlistResponse?.result.slice(0, 6) || []} />
        )}
        {playlistResponse?.result.length == 0 && (
          <p className="my-4 text-center text-lg text-textColorDark">
            You have no playlist yet !{" "}
            <Link href={"/playlist"} className="cursor-pointer text-main">
              Create new here
            </Link>
          </p>
        )}
      </div>

      <div className="mt-8">
        {songLoading || songFetching ? (
          <Loading />
        ) : (
          <SongList
            title="Latest songs"
            singlePage={true}
            songs={
              songResponse && songResponse.result
                ? songResponse.result.slice(0, 7)
                : []
            }
          />
        )}
        {songResponse?.result.length == 0 && (
          <p className="my-4 text-center text-lg text-textColorDark">
            You have no song yet !{" "}
            <Link href={"/song"} className="cursor-pointer text-main">
              Upload now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
