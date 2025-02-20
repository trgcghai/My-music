"use client";
import Loading from "@components/Loading";
import TableSongs from "@components/TableSong/OldTableSongs";
import { useGetPlaylistByIdQuery } from "@services/playlistApi";
import { getPlaylistLength } from "@utils/getPlaylistLength";
import { useParams } from "next/navigation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetPlaylistByIdQuery(
    typeof id === "string" ? id : "",
  );

  if (isLoading || isFetching) return <Loading />;

  return (
    <div>
      <div className="space-y-6">
        <p className="text-6xl font-bold text-textColor">
          {data?.result[0].name}
        </p>
        <div>
          <p className="text-md">
            Number of songs: {data?.result[0].songs.length}
          </p>
          <p className="text-md">
            Total length: {getPlaylistLength(data?.result[0].songs)}
          </p>
        </div>
      </div>
      <div className="my-5 flex items-center gap-4">
        <PlayArrowIcon
          fontSize="large"
          className="ml-2 w-[70px] scale-150 cursor-pointer rounded-full bg-main text-white"
        />
        <p className="cursor-pointer text-3xl font-bold text-white">
          Play this playlist
        </p>
      </div>
      <div className="mt-4">
        <TableSongs
          songs={data?.result[0].songs || []}
          title=""
          canSeeAll={false}
        />
      </div>
    </div>
  );
};
export default Page;
