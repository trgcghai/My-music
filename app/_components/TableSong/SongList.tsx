import Link from "next/link";
import ContextMenu from "@components/ContextMenu/ContextMenu";
import { SongData, SongInPlaylist } from "_types/entity";
import { useContextMenu } from "@hooks/useContextMenu";
import React from "react";
import TableSongs from "./TableSongs";
import { SongRowProps } from "_types/component";

interface SongListProps {
  title: string;
  canSeeAll?: boolean;
  songs: SongData[] | SongInPlaylist[];
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

      {songs && songs.length !== 0 && (
        <TableSongs
          songs={songs.map((song: SongData | SongInPlaylist, index: number) => {
            const data =
              "metadata" in song ? song.metadata.common : song.common;

            return {
              index: index + 1,
              id: song._id,
              title: data.title,
              year: data.year.toString() || "",
              artist: data.artist,
              album: data.album,
              length: song.duration,
              key: song._id,
              picture: data.picture,
              url: song.url,
            } as SongRowProps;
          })}
          singlePage={singlePage}
          handleContextMenu={handleContextMenu}
        />
      )}

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
