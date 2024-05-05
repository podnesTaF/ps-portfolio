import { Button } from "@mui/material";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  imageUrl: string;
  title: string;
  inProgress?: boolean;
  tags?: string;
  disabled?: boolean;
}

export function MdxCard({
  href,
  imageUrl,
  title,
  inProgress,
  tags,
  className,
  children,
  disabled,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        "max-w-xl flex flex-col w-full relative p-2 border-2 border-white text-white hover:border-primary hover:bg-white hover:text-black transition-all delay-100 overflow-hidden",
        disabled && "cursor-not-allowed opacity-60",
        className
      )}
      {...props}
    >
      <Image
        src={imageUrl}
        width={600}
        height={250}
        className="object-center object-contain w-full max-h-[250px] flex-1"
        alt="project image"
      />
      <div className="my-3">
        <h4 className="text-lg lg:text-xl">{title}</h4>
        <hr className="h-1" />
        <p>
          {tags?.split(",").map((tag, index) => (
            <span key={index} className="text-sm lg:text-base px-2 py-1">
              #{tag}
            </span>
          ))}
        </p>
      </div>
      <Button
        variant={"contained"}
        className="!rounded-none !w-full !font-semibold !text-white"
        LinkComponent={Link}
        href={href}
      >
        Read More
      </Button>
    </div>
  );
}
