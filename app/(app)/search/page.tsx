"use client";
import Loading from "@components/Loading";
import SearchInput from "@components/SearchInput";
import SongList from "@components/TableSong/SongList";
import { useGetSongByNameQuery } from "@services/songApi";
import { useSearchParams } from "next/navigation";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const { data, isLoading, isFetching } = useGetSongByNameQuery(
    searchParams.get("q") || "",
  );

  return (
    <>
      <SearchInput />
      <div className="flex items-center justify-between">
        <p className="my-3 px-2 text-xl font-bold">
          {data?.result.length} result{data?.result.length > 1 && "s"} found
        </p>
      </div>
      {isFetching || (isLoading && <Loading />)}
      {data?.result && data?.result.length != 0 && (
        <div className="no-scrollbar mt-2 h-[85%] space-y-4 overflow-scroll">
          <SongList
            title=""
            singlePage={true}
            canSeeAll={false}
            songs={data?.result || []}
          />
        </div>
      )}
    </>
  );
};
export default SearchPage;
