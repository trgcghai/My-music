"use client";
import { Input } from "antd";
import { FormEvent, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const fetchSongQuery = async () => {
    const queryParam = new URLSearchParams({
      name: search,
    }).toString();
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/song?${queryParam}`,
      {
        method: "GET",
      },
    );
    const data = await result.json();
    console.log(data);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    fetchSongQuery();

    setSearch("");
  };

  return (
    <div className="flex items-center gap-4 p-2">
      <p className="mb-2 w-[200px] text-xl font-bold">Search song</p>
      <form onSubmit={handleSubmit}>
        <Input
          variant="outlined"
          className="!h-[40px] !w-[500px] !rounded-lg !bg-bgLightColor !text-lg !text-textColor hover:border-main"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
export default SearchInput;
