import ImageLoader from "@components/ImageLoader";

const SongInfoCard = ({
  name = "",
  author = "",
}: {
  name: string;
  author: string;
}) => {
  return (
    <>
      <ImageLoader
        src="https://placehold.co/60x60"
        width={60}
        height={60}
        className="rounded-md"
        alt=""
      />
      <div>
        <p className="text-lg">{name}</p>
        <p className="text-md text-textDark">{author}</p>
      </div>
    </>
  );
};
export default SongInfoCard;
