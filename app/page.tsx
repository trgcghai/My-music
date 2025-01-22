"use client";
import SearchInput from "./_components/SearchInput";
import TableSongs from "./_components/TableSongs";
import MediaList from "./_components/MediaList";
import { useEffect, useState } from "react";

export default function Home() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSong = async () => {
      const result = await fetch("http://localhost:8000/v1/song/", {
        method: "GET",
      });
      const data = await result.json();
      setSongs(data);
    };

    fetchSong();
  }, []);

  return (
    <div>
      <SearchInput />

      <div className="mt-8">
        <MediaList />
      </div>

      <div className="mt-8">
        <TableSongs title="Your songs" songs={songs} />
      </div>
    </div>
  );
}
