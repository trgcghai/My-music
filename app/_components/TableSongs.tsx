import Link from "next/link";
import SongRow from "./SongRow";
import { SongData, SongInPlaylist } from "_types/entity";

const TableSongs = <T extends SongData | SongInPlaylist>({
  title = "",
  canSeeAll = true,
  songs = [],
}: TableSongsProps<T>) => {
  console.log("songs", songs);
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
        <div className="flex cursor-pointer items-center justify-between rounded-md p-2 hover:bg-bgLightColor">
          <p className="flex-[3] border-r border-r-bgLightColor">Title</p>
          <p className="flex-1 border-r border-r-bgLightColor text-center">
            Year
          </p>
          <p className="flex-1 border-r border-r-bgLightColor text-center">
            Artist
          </p>
          <p className="flex-[3] border-r border-r-bgLightColor text-center">
            Album
          </p>
          <p className="flex-1 text-center">Length</p>
        </div>
        {songs &&
          songs.map((song: SongData | SongInPlaylist) => {
            if ("metadata" in song) {
              return (
                <SongRow
                  key={song._id}
                  title={song.metadata.common.title}
                  artist={song.metadata.common.artist}
                  length={song.metadata.format.duration}
                  year={parseInt(song.metadata.common.year)}
                  album={song.metadata.common.album}
                />
              );
            } else {
              return (
                <SongRow
                  key={song._id}
                  title={song.title}
                  artist={song.artist}
                  length={song.duration}
                  year={1000}
                  album={"album"}
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
