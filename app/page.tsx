import SearchInput from "./_components/SearchInput";
import PlaylistCard from "./_components/PlaylistCard";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <p className="text-xl font-bold">Upload your songs</p>
      <div className="mt-2 flex w-[500px] cursor-pointer items-center justify-center rounded-lg border bg-bgLightColor p-2 hover:border-main hover:text-main">
        <DragFileInput />
      </div> */}

      <SearchInput />

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <p className="text-xl font-bold">Your playlists</p>
          <Link href={"/playlist"} className="text-lg hover:text-main">
            See all
          </Link>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <p className="text-xl font-bold">Your songs</p>
          <Link href={"/songs"} className="text-lg hover:text-main">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
}
