import Link from "next/link";
import SongRow from "./SongRow";
import { Song } from "../define";

const TableSongs = ({
  title = "",
  canSeeAll = true,
  songs = [],
  numberDisplayed = 5,
}: {
  title: string;
  canSeeAll?: boolean;
  songs: Song[];
  numberDisplayed?: number;
}) => {
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
          songs.map((song, index) => {
            return <SongRow key={index} />;
          })}

        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
          .slice(0, numberDisplayed)
          .map((_, index) => (
            <SongRow key={index} />
          ))}
      </div>
    </>
  );
};
export default TableSongs;
