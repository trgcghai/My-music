"use client";
import TableSongs from "@/app/_components/TableSongs";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <div className="flex items-center gap-4">
        <Image
          src={"https://placehold.co/250"}
          height={250}
          width={250}
          alt=""
        />
        <div className="space-y-6">
          <p className="text-6xl font-bold text-textColor">Playlist Name</p>
          <div>
            <p className="text-lg">Number of songs: 30</p>
            <p className="text-lg">Total length: 1h30</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <TableSongs songs={[]} title="Songs" canSeeAll={false} />
      </div>
    </div>
  );
};
export default Page;
