import Image from "next/image";

const MdxImage = ({
  src,
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  src: string;
  className: string;
}) => {
  return (
    <Image
      src={src}
      width={width || 500}
      height={height || 500}
      alt="image"
      className={className}
    />
  );
};

export default MdxImage;
