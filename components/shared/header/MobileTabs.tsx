import { headerLinks } from "@/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const MobileTabs = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden w-full mobileTabs transition-all flex fixed bottom-0 left-0 justify-between py-2 px-2 bg-[#1b1a2ea9] backdrop-blur-lg z-10">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          480: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {headerLinks.map((link) => (
          <SwiperSlide key={link.id}>
            <Link
              key={link.id}
              className={`flex items-center justify-center gap-2 hover:text-white/80  px-3 py-2 rounded-md `}
              style={{
                color: pathname === link.href ? "#915EFF" : "#fff",
              }}
              href={link.href}
            >
              <link.icon />
              <h4 className="text-base font-medium">{link.title}</h4>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileTabs;
