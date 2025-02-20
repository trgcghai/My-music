import { formatSongLength } from "@utils/formatSongLength";

const SongRow = ({
  title,
  artist,
  length,
  year,
  album,
}: {
  title: string;
  artist: string;
  length: number;
  year: number;
  album: string;
}) => {
  return (
    <div className="text-textColorDark hover:bg-bgColorLight flex cursor-pointer items-center justify-between rounded-md p-2">
      <p className="border-r-bgColorLight flex-[3] border-r">{title}</p>
      <p className="border-r-bgColorLight flex-1 border-r text-center">
        {year}
      </p>
      <p className="border-r-bgColorLight flex-[2] border-r text-center">
        {artist}
      </p>
      <p className="border-r-bgColorLight flex-[3] border-r text-center">
        {album}
      </p>
      <p className="flex-1 text-center">{formatSongLength(length)}</p>
    </div>
  );
};
export default SongRow;
