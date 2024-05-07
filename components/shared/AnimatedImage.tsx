"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

const AnimatedImage = ({
  src,
  alt,
  width,
  height,
  ...props
}: AnimatedImageProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Image
      src={src}
      width={(width as number) || 500}
      height={(height as number) || 500}
      {...props}
      alt={alt ?? "image"}
      className={`overflow-hidden bg-primary/60 rounded-full max-w-[80%] 3xl:h-[600px] 2xl:w-[500px] 3xl:w-[600px] absolute right-0 bottom-0 transition-all delay-500 object-cover -z-10`}
    />
  );
};

export default AnimatedImage;
