'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
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
    <div className='w-auto'>
      <div
        className='flex items-center gap-4'
      >
        {includeAll && (
          <div
            className={twMerge("flex-1 py-3 px-4 flex justify-center cursor-pointer transition-all", !activeTab ? "bg-primary hover:bg-primary/80" : "bg-dark hover:bg-primary/80")}
            onClick={() => onTabChange("")}
          >
            <h4 className="text-xl font-semibold text-white">All</h4>
          </div>
        )}
        {options.map((option) => (
          <div
            key={option}
            className={twMerge("flex-1 py-3 px-4 flex justify-center cursor-pointer transition-all", activeTab === option ? "bg-primary hover:bg-primary/80" : "bg-dark hover:bg-primary/80")}
            onClick={() => onTabChange(option)}
          >
            <h4 className="text-xl font-semibold text-white">{option}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs