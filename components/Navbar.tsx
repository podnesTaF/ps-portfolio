"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import MenuItem from "./MenuItem";

export const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "My Works",
    href: "/works",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Element name="navbar" className="w-full px-4 relative">
      <div
        className={`w-full bg-navbar rounded-[30px] flex justify-center gap-4 px-4 py-3 2xl:py-4 max-w-[1400px] 2xl:mx-auto  transition-all ${
          showNavbar
            ? "scale-100 opacity-100 translate-y-0"
            : "transform scale-[0.9] opacity-0 -translate-y-12"
        }`}
      >
        {menuItems.map((item, i) => (
          <MenuItem key={i} href={item.href} active={pathname === item.href}>
            {item.name}
          </MenuItem>
        ))}
      </div>
    </Element>
  );
};

export default Navbar;
