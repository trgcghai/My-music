"use client";
import Image from "next/image";
import { useState } from "react";

const ImageLoader = ({
  src,
  alt,
  width,
  height,
  className,
}: ImageLoaderProps) => {
  const [imgSrc] = useState(src || "/no_image.jpg");

  return (
    <Image
      width={width}
      height={height}
      className={className}
      src={imgSrc}
      alt={alt}
    />
  );
};
export default ImageLoader;

interface ImageLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}
