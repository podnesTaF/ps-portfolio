"use client";

import { skills } from "@/lib/home/skills";
import { useEffect, useRef } from "react";
import SkillCard from "./SkillCard";

const TechStack = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("heroElem");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen my-10 md:my-0 max-w-6xl pl-3 md:pl-12 xl:pl-6 pr-3 mx-auto flex flex-col justify-center">
      <div id="what-i-offer" className="mb-5 lg:mb-10 xl:mb-12 scroll-mt-32">
        <h5 className="text-white font-medium mb-2 text-lg lg:text-xl">
          Introduction
        </h5>
        <h3 className="text-white text-2xl md:text-3xl xl:text-4xl">
          What I <span className="text-primary">offer</span>
        </h3>
      </div>
      <div className="flex flex-col w-full gap-12 md:flex-row lg:gap-12 relative items-center justify-center">
        {skills.map((skill) => (
          <SkillCard {...skill} key={skill.id} />
        ))}
        <div className="absolute max-w-6xl overflow-hidden w-full bottom-1/2 translate-y-1/2 md:bottom-0 flex justify-center">
          <h1
            ref={ref}
            className="font-bold text-center text-white text-5xl md:text-7xl lg:text-8xl opacity-70 -z-10"
          >
            FULL STACK DEV
          </h1>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
