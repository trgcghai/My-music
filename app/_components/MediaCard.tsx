import Image from "next/image";

const MediaCard = () => {
  return (
    <div className="relative cursor-pointer rounded-xl bg-bgDarkColor p-2 hover:bg-bgLightColor">
      <Image
        src="https://placehold.co/200x200"
        width={200}
        height={200}
        className="rounded-xl"
        alt=""
      />
      <p className="mt-1 p-1 text-lg font-bold text-textColor">Your Media</p>
    </div>
  );
};
export default MediaCard;
