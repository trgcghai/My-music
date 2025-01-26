import Link from "next/link";
import PlaylistCard from "./PlaylistCard";
import { Playlist } from "_types/entity";

const MediaList = <T extends Playlist>({ playlist }: MediaListProps<T>) => {
  return (
    <>
      <div className="flex items-end justify-between px-2">
        <p className="text-xl font-bold">Your playlists</p>
        <Link href={"/playlist"} className="text-lg hover:text-main">
          See all
        </Link>
      </div>
      <div className="mt-2 flex items-center gap-6 p-2">
        {playlist.map((playlist) => {
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
    </>
  );
};
export default MediaList;

interface MediaListProps<T> {
  playlist: T[];
}
