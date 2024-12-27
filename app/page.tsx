"use client";

import DragFileInput from "./_components/DragFileInput";
import SearchInput from "./_components/SearchInput";

export default function Home() {
  return (
    <div>
      <p className="text-lg font-bold">Upload your songs</p>
      <div className="mt-2 flex w-[500px] cursor-pointer items-center justify-center rounded-lg border bg-bgLightColor p-2 hover:border-main hover:text-main">
        <DragFileInput />
      </div>

      <div className="mt-8">
        <SearchInput />
      </div>
    </div>
  );
}
