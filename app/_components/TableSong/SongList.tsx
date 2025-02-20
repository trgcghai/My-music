import Link from "next/link";
import ContextMenu from "@components/ContextMenu/ContextMenu";
import { SongData } from "_types/entity";
import { useContextMenu } from "@hooks/useContextMenu";
import React from "react";
import TableSongs from "./TableSongs";

interface SongListProps {
  title: string;
  canSeeAll?: boolean;
  songs: SongData[];
  singlePage?: boolean;
}
const SongList = ({
  title = "",
  canSeeAll = true,
  songs = [],
  singlePage = false,
}: SongListProps) => {
  const { visible, position, additionalData, menuRef, handleContextMenu } =
    useContextMenu();

  return (
    <div className="position-relative">
      <div
        className={`flex items-end ${canSeeAll ? "justify-between" : "justify-start"} px-2`}
      >
        <p className="text-xl font-bold">{title}</p>
        {canSeeAll && (
          <Link href={"/song"} className="text-lg hover:text-main">
            See all
          </Link>
        )}
      </div>

      <TableSongs
        songs={songs.map((song, index) => {
          return {
            index: index + 1,
            id: song._id,
            title: song.metadata.common.title,
            year: song.metadata.common.year,
            artist: song.metadata.common.artist,
            album: song.metadata.common.album,
            length: song.metadata.format.duration,
          };
        })}
        singlePage={singlePage}
        handleContextMenu={handleContextMenu}
      />

      <div
        ref={menuRef}
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <ContextMenu visible={visible} additionalData={additionalData} />
      </div>
    </div>
  );
};

export default SongList;
