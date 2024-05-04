"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

interface HobbieCardProps {
  title: string;
  id: number;
  subtitle: string;
  imageUrl: string;
  Icon: React.ElementType;
}

const HobbieCard = ({
  id,
  title,
  subtitle,
  imageUrl,
  Icon,
}: HobbieCardProps): JSX.Element => {
  return (
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor="#aaa6c3"
    >
      <div className="bg-[#1b1a2ea9] backdrop-blur-lg overflow-hidden h-full w-full rounded-lg">
        <div className="relative h-[250px] w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
            className="absolute left-0 top-0 w-full h-full object-cover object-center z-0"
          />
          <div className="absolute inset-0 m-3 flex justify-end">
            <div className="black-gradient flex h-10 w-10 cursor-pointer bg-slate-700 items-center justify-center rounded-full">
              <Icon className="h-1/2 w-1/2 text-white" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-3xl text-white">{title}</h3>
          <p className="mt-2 text-lg md:text-xl text-gray-300 font-medium">
            {subtitle}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

export default HobbieCard;
