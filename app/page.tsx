import SearchInput from "./_components/SearchInput";
import TableSongs from "./_components/TableSongs";
import MediaList from "./_components/MediaList";

export default function Home() {
  return (
    <div>
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
