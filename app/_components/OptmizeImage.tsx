"use server";
import Image from "next/image";

const OptmizeImage = ({
  src,
  width,
  height,
  className = "",
  alt = "",
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
  alt?: string;
}): React.ReactNode => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      className={className}
      unoptimized
      alt={alt}
    />
  );
};
export default OptmizeImage;
