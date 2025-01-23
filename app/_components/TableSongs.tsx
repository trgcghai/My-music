import Link from "next/link";
import SongRow from "./SongRow";
import { SongInPlaylist, SongMetadata } from "../define";

const TableSongs = <T extends SongMetadata | SongInPlaylist>({
  title = "",
  canSeeAll = true,
  songs = [],
}: TableSongsProps<T>) => {
  return (
    <>
      <div
        className={`flex items-end ${canSeeAll ? "justify-between" : "justify-start"} px-2`}
      >
        <p className="text-xl font-bold">{title}</p>
        {canSeeAll && (
          <Link href={"/song"} className="text-lg hover:text-main">
            See all
          </Link>
        )}
      </div>
      <div className="mt-2 space-y-4">
        {songs &&
          songs.map((song: SongMetadata | SongInPlaylist) => {
            if ("common" in song) {
              return (
                <SongRow
                  key={song._id}
                  title={song.common.title}
                  artist={song.common.artist}
                  length={song.format.duration}
                />
              );
            } else {
              return (
                <SongRow
                  key={song._id}
                  title={song.title}
                  artist={song.artist}
                  length={song.duration}
                />
              );
            }
          })}
      </div>
    </>
  );
};
export default TableSongs;

interface TableSongsProps<T> {
  title: string;
  canSeeAll?: boolean;
  songs: T[];
}
