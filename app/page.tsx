import SearchInput from "./_components/SearchInput";
import DragFileInput from "./_components/DragFileInput";
import TableSongs from "./_components/TableSongs";
import MediaList from "./_components/MediaList";

export default function Home() {
  return (
    <div>
      <DragFileInput
        title="Upload your songs"
        className="text-md flex w-[500px] cursor-pointer items-center justify-center gap-2 rounded-md border-0 bg-main p-3 text-lg font-bold text-white hover:bg-bgHover"
      />
      <SearchInput />

      <div className="mt-8">
        <MediaList />
      </div>

      <div className="mt-8">
        <TableSongs title="Your songs" songs={[]} />
      </div>
    </div>
  );
}
