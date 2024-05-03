"use client";

import Experience from "@/components/home/Experience";
import GitHub from "@/components/home/GitHub";
import Skills from "@/components/home/Skills";
import TechStack from "@/components/home/TechStack";
import AnimatedImage from "@/components/shared/AnimatedImage";

export default function Home() {
  return (
    <>
      <section id="welcome" className="overflow-hidden relative">
        <div className="heroElem overflow-hidden w-full pt-20 pb-40 px-3 h-screen  m-auto flex justify-center text-center flex-col items-center">
          <p className="text-xl lg:text-2xl mb-5 text-white">
            Hi, I&apos;m Oleksii.
          </p>
          <h1 className="text-white inline-block sm:max-w-2xl lg:max-w-4xl 2xl:max-w-5xl    w-auto relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl tracking-tighter mb-10 font-bold">
            I enjoy building <span className="text-primary">services</span> and{" "}
            <span className="text-primary">applications</span> for the web.
          </h1>
          <h4 className="text-lg lg:text-xl xl:text-2xl text-white">
            Welcome to my <span className="text-primary">portfolio</span>!
          </h4>
          <AnimatedImage src="/images/main-me.png" alt="hero" />
        </div>
      </section>
      <TechStack />
      <Experience />
      <Skills />
      <GitHub />
    </>
  );
}

