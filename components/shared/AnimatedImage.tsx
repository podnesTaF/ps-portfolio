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
      className={`overflow-hidden max-w-[80%] 3xl:h-[600px] 3xl:w-[600px] fixed right-0 bottom-0 object-cover -z-10 ${
        isScrolled ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
      style={{ transition: "all 0.5s ease-in-out" }}
    />
  );
};

export default AnimatedImage;
