import Link from "next/link";
import PlaylistCard from "./PlaylistCard";

const MediaList = () => {
  return (
    <>
      <div className="flex items-end justify-between px-2">
        <p className="text-xl font-bold">Your playlists</p>
        <Link href={"/playlist"} className="text-lg hover:text-main">
          See all
        </Link>
      </div>
      <div className="mt-2 flex items-center justify-between p-2">
        {[1, 1, 1, 1, 1, 1].map((_, index) => {
          return <PlaylistCard key={index} id={index} />;
        })}
      </div>
    </>
  );
};
export default MediaList;
