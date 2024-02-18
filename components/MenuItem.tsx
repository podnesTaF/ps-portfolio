import Link from "next/link";
import React from "react";

type MenuItemProps = {
  children: React.ReactNode;
  href: string;
  className?: string;
  active?: boolean;
};

const MenuItem = ({
  href,
  children,
  className,
  active,
}: MenuItemProps): JSX.Element => {
  return (
    <Link className={`h-full`} href={href}>
      <div
        className={`hover:bg-gray-100 rounded-sm h-full px-3 flex items-center ${
          className ?? ""
        }`}
      >
        <h4
          className={`font-semibold text-xl  ${
            active ? "text-gray-900" : "text-gray-400"
          }`}
        >
          {children}
        </h4>
      </div>
    </Link>
  );
};

export default MenuItem;
