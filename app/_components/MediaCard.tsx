import Image from "next/image";

const MediaCard = () => {
  return (
    <div className="relative cursor-pointer rounded-xl">
      <Image
        src="https://placehold.co/200x200"
        width={200}
        height={200}
        className="rounded-xl"
        alt=""
      />
      <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-lg font-bold text-textColor">
        Your playlists
      </p>
    </div>
  );
};
export default MediaCard;
