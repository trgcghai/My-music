import Link from "next/link";
import SongRow from "./SongRow";

const TableSongs = () => {
  return (
    <>
      <div className="flex items-end justify-between px-2">
        <p className="text-xl font-bold">Your songs</p>
        <Link href={"/songs"} className="text-lg hover:text-main">
          See all
        </Link>
      </div>
      <div className="mt-2 space-y-4">
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
        <SongRow />
      </div>
    </>
  );
};
export default TableSongs;
