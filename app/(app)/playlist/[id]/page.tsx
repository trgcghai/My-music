"use client";
import ImageLoader from "@components/ImageLoader";
import Loading from "@components/Loading";
import TableSongs from "@components/TableSongs";
import { useGetPlaylistByIdQuery } from "@services/playlistApi";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetPlaylistByIdQuery(
    typeof id === "string" ? id : "",
  );

  if (isLoading || isFetching) return <Loading />;

  return (
    <div>
      <div className="flex items-center gap-4">
        <ImageLoader
          src={data?.result[0].thumbnail || ""}
          height={250}
          width={250}
          alt=""
          className="rounded-lg"
        />
        <div className="space-y-6">
          <p className="text-6xl font-bold text-textColor">
            {data?.result[0].name}
          </p>
          <div>
            <p className="text-lg">
              Number of songs: {data?.result[0].songs.length}
            </p>
            <p className="text-lg">Total length: 1h30</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <TableSongs
          songs={data?.result[0].songs || []}
          title="Songs"
          canSeeAll={false}
        />
      </div>
    </div>
  );
};
export default Page;
