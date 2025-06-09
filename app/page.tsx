'use client'
import Experience from "@/components/home/Experience";
import GitHub from "@/components/home/GitHub";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import TechStack from "@/components/home/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Experience />
      <Skills />
      <GitHub />
    </>
  );
}

