import { SongData } from "_types/entity";

const SongInfoCard = ({ song }: { song: SongData }) => {
  return (
    <div>
      <p className="text-[16px]">{song.metadata.common.title || ""}</p>
      <p className="text-md text-textColorDark">
        {song.metadata.common.artist || ""}
      </p>
    </div>
  );
};
export default SongInfoCard;
