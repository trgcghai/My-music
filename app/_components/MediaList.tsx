import Link from "next/link";
import MediaCard from "./MediaCard";

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
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </>
  );
};
export default MediaList;
