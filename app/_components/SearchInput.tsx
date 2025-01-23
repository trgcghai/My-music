"use client";
import { useLazyGetSongByNameQuery } from "@services/rootApi";
import { Input } from "antd";
import { FormEvent, useEffect, useState } from "react";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const [searchSongByName, { data }] = useLazyGetSongByNameQuery();

  useEffect(() => {
    if (data && data.code == 200 && data.status == "success") {
      localStorage.setItem("searchResult", JSON.stringify(data.result));

      // navigate to search result page which is not implemented yet
    }
  }, [data]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    searchSongByName(search);

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
