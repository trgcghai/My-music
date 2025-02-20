const SongInfoCard = ({
  name = "",
  author = "",
}: {
  name: string;
  author: string;
}) => {
  return (
    <div>
      <p className="text-lg">{name}</p>
      <p className="text-md text-textColorDark">{author}</p>
    </div>
  );
};
export default SongInfoCard;
