"use client";

import { useEffect, useRef } from "react";
import TagCloud from "TagCloud";

const container: string = ".content";

const texts = [
  "NextJS",
  "React",
  "NestJs",
  "NodeJS",
  "Redux",
  "React Query",
  "React Native",
  "JS",
  "Expo",
  "TypeScript",
  "Php",
  "mongoDB",
  "MySQl",
  "TypeORM",
  "Git",
  "Python",
  "Tailwind",
  "MUI",
  "Google Cloud",
  "Git",
  "Docker",
  "Remix Js",
];

const WordCloud = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      TagCloud(container as any, texts, {
        radius: 300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
      });
      initialized.current = true;
    }
  }, []);
  return <span className="content !text-primary"></span>;
};

export default WordCloud;
