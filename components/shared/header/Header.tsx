"use client";
import { headerLinks } from "@/lib";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SocialIcons } from "../SocialIcons";
import { SpeedDials } from "../SpeedDials";
import MobileTabs from "./MobileTabs";
import SideNavigation from "./SideNavigation";

const Header = () => {
  const [navColour, updateNavbar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full transition-all ease-in shadow-md backdrop-blur-md z-20`}
        style={{
          backgroundColor: navColour ? "#1b1a2ea9" : "transparent",
        }}
      >
        <div className="py-3 px-5 w-full flex  justify-between gap-5 items-center ">
          <h2
            onClick={() => router.push("/")}
            className="text-primary font-bold text-2xl lg:text-3xl cursor-pointer"
          >
            O.P Portfolio
          </h2>
          <nav className="hidden md:flex gap-4 lg:gap-6">
            {headerLinks.map((link) => (
              <Link
                key={link.id}
                className={`flex items-center gap-2 lg:gap-3 px-3 py-2 rounded-md ${
                  pathname === link.href
                    ? "text-primary hover:text-primary/80"
                    : "text-white hover:text-gray-300"
                }`}
                href={link.href}
              >
                <link.icon />
                <h4 className="text-base font-medium">{link.title}</h4>
              </Link>
            ))}
          </nav>
          <SpeedDials />
        </div>
      </header>
      <SocialIcons />
      <MobileTabs />
      <SideNavigation />
    </>
  );
};

export default Header;
