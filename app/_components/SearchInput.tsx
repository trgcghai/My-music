"use client";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    router.push(`/search?q=${encodeURIComponent(search)}`);

    setSearch("");
  };

  return (
    <div className="flex items-center gap-4 p-2">
      <p className="mb-2 w-[200px] text-xl font-bold">Search song</p>
      <form onSubmit={handleSubmit}>
        <Input
          variant="outlined"
          className="!bg-bgColorLight !h-[40px] !w-[500px] !rounded-lg !text-lg !text-textColor hover:border-main"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};
export default SearchInput;
