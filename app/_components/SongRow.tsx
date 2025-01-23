import { formatSongLength } from "../_utils/formatSongLength";

const SongRow = ({
  title,
  artist,
  length,
}: {
  title: string;
  artist: string;
  length: number;
}) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-md p-2 text-textDark hover:bg-bgLightColor">
      <p className="flex-[3] border-r border-r-bgLightColor">{title}</p>
      <p className="flex-1 border-r border-r-bgLightColor text-center">
        {artist}
      </p>
      <p className="flex-1 text-center">{formatSongLength(length)}</p>
    </div>
  );
};
export default SongRow;
