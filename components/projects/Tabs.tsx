'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from 'tailwind-merge';


interface TabsProps {
  options: string[];
  defaultTab: string;
  paramName?: string;
  includeAll?: boolean
}

function Tabs({ options, defaultTab, paramName, includeAll }: TabsProps) {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(defaultTab);
  const pathname = usePathname()
  const router = useRouter()


  useEffect(() => {
    const tabParam = searchParams.get(paramName || 'tab');

    setActiveTab(tabParam || "")
  }, [searchParams]);


  const onTabChange = (tab: string) => {
    const params = new URLSearchParams();
    params.set(paramName || 'tab', tab);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }


  return (
    <div className='max-w-full'>
      <Swiper
        spaceBetween={30}
        slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {includeAll && (
          <SwiperSlide>
            <div
              className={twMerge("w-full py-3 px-4 flex justify-center cursor-pointer transition-all", !activeTab ? "bg-primary hover:bg-primary/80" : "bg-dark hover:bg-primary/80")}
              onClick={() => onTabChange("")}
            >
              <h4 className="text-xl font-semibold text-white">All</h4>
            </div>
          </SwiperSlide>
        )}
        {options.map((option, i) => (
          <SwiperSlide key={i}>
            <div
              className={twMerge("w-full py-3 px-4 flex justify-center cursor-pointer transition-all", activeTab === option ? "bg-primary hover:bg-primary/80" : "bg-dark hover:bg-primary/80")}
              onClick={() => onTabChange(option)}
            >
              <h4 className="text-xl font-semibold text-white">{option}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Tabs