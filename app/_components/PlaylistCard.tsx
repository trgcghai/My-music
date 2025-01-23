import Link from "next/link";
import ImageLoader from "./ImageLoader";

//"https://placehold.co/200x200"

const PlaylistCard = ({ id, thumbnail, title }: PlaylistCardProps) => {
  return (
    <Link href={"/playlist/" + id}>
      <div className="relative cursor-pointer rounded-xl bg-bgDarkColor p-2 hover:bg-bgLightColor">
        <ImageLoader
          src={thumbnail}
          width={200}
          height={200}
          className="rounded-xl"
          alt=""
        />
        <p className="mt-1 p-1 text-lg font-bold text-textColor">{title}</p>
      </div>
    </Link>
  );
};
export default PlaylistCard;

interface PlaylistCardProps {
  id: string;
  thumbnail: string;
  title: string;
}
