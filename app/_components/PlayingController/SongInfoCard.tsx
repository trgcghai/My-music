import { SongRowProps } from "_types/component";

const SongInfoCard = ({ song }: { song: SongRowProps }) => {
  return (
    <div>
      <p className="text-[16px]">{song?.title || ""}</p>
      <p className="text-md text-textColorDark">{song?.artist || ""}</p>
    </div>
  );
};
export default SongInfoCard;
