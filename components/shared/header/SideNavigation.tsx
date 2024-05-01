"use client";

import { pageSections } from "@/content/page-sections";
import { Link } from "@mui/material";
import { usePathname } from "next/navigation";

const SideNavigation = () => {
  const pathname = usePathname();

  if (!pageSections[pathname as keyof typeof pageSections]) {
    return null;
  }

  return (
    <div className="fixed top-1/2  flex gap-4 -rotate-90 left-[-140px] md:left-[-140px]">
      {pageSections[pathname as keyof typeof pageSections]?.map((section) => (
        <Link
          href={section.href}
          key={section.id}
          className={`!text-white text-sm sm:text-base !font-medium hover:!text-primary transition-all cursor-pointer`}
          rel="noopener noreferrer"
          underline="none"
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default SideNavigation;
