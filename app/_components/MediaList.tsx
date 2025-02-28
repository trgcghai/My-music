import Link from "next/link";
import PlaylistCard from "./PlaylistCard";
import { Playlist } from "_types/entity";
import { getPlaylistLength } from "@utils/getPlaylistLength";

const MediaList = <T extends Playlist>({ playlist }: MediaListProps<T>) => {
  return (
    <>
      <div className="flex items-end justify-between px-2">
        <p className="text-xl font-bold">Your playlists</p>
        <Link href={"/playlist"} className="text-lg hover:text-main">
          See all
        </Link>
      </div>
      {playlist && playlist.length !== 0 && (
        <div className="mt-2 grid grid-cols-2 items-center gap-6 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {playlist.map((playlist) => {
            return (
              <PlaylistCard
                key={playlist._id}
                id={playlist._id}
                title={playlist.name}
                songCount={playlist.songs.length}
                duration={getPlaylistLength(playlist.songs).toString()}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default MediaList;

interface MediaListProps<T> {
  playlist: T[];
}
