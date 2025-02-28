import Loading from "@components/Loading";
import { useAppSelector } from "@libs/hooks";
import { useGetSongByIdQuery } from "@services/songApi";

const SongInfoCard = () => {
  const { queue, currentIndex } = useAppSelector((state) => state.queue);
  const { data, isFetching, isLoading } = useGetSongByIdQuery(
    queue[currentIndex],
  );

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <div>
      <p className="text-lg">{data?.result[0]?.metadata.common.title || ""}</p>
      <p className="text-md text-textColorDark">
        {data?.result[0]?.metadata.common.artist || ""}
      </p>
    </div>
  );
};
export default SongInfoCard;
