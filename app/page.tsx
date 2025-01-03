import SearchInput from "./_components/SearchInput";
import DragFileInput from "./_components/DragFileInput";
import TableSongs from "./_components/TableSongs";
import MediaList from "./_components/MediaList";

export default function Home() {
  return (
    <div>
      <DragFileInput />
      <SearchInput />

      <div className="mt-8">
        <MediaList />
      </div>

      <div className="mt-8">
        <TableSongs />
      </div>
    </div>
  );
}
