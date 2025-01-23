"use client";
import Loading from "@components/Loading";
import MediaList from "@components/MediaList";
import SearchInput from "@components/SearchInput";
import TableSongs from "@components/TableSongs";
import { useGetPlaylistQuery, useGetSongQuery } from "@services/rootApi";
import Link from "next/link";

export default function Home() {
  const {
    data: songResponse,
    isLoading: songLoading,
    isFetching: songFetching,
  } = useGetSongQuery();
  const {
    data: playlistResponse,
    isLoading: playlistLoading,
    isFetching: playlistFetching,
  } = useGetPlaylistQuery();

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
          <p className="mt-4 px-2 text-center text-lg font-bold">
            You have no playlist yet.{" "}
            <Link
              href={"/playlist"}
              className="cursor-pointer text-main hover:underline"
            >
              Create new here
            </Link>
          </p>
        )}
      </div>

      <div className="mt-8">
        {songLoading || songFetching ? (
          <Loading />
        ) : (
          <TableSongs
            title="Your songs"
            songs={
              songResponse && songResponse.result
                ? songResponse.result.slice(0, 6)
                : []
            }
          />
        )}
        {songResponse?.result.length == 0 && (
          <p className="mt-4 px-2 text-center text-lg font-bold">
            You have no song yet.{" "}
            <Link
              href={"/song"}
              className="cursor-pointer text-main hover:underline"
            >
              Upload now
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
