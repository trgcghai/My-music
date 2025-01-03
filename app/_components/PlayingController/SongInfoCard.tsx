import Image from "next/image";

const SongInfoCard = ({
  name = "",
  author = "",
}: {
  name: string;
  author: string;
}) => {
  return (
    <>
      <Image
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
