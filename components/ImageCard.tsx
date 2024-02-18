import Image from "next/image";
import React from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  children?: React.ReactNode;
};

const ImageCard = ({ src, alt, children }: ImageCardProps): JSX.Element => {
  return (
    <div className="bg-white/10 rounded-xl p-7 max-w-2xl h-full">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="object-cover mb-6 rounded-sm w-full h-auto"
      />
      {children}
    </div>
  );
};

export default ImageCard;
