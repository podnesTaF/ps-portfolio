"use client";

import { Skeleton } from "@mui/material";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
  loading: () => <Skeleton variant="rectangular" width={200} height={200} />,
});

// simple in-module cache
const animationCache: Record<string, unknown> = {};

interface LazyLottieProps {
  id: string; // name of JSON file (e.g. "fullstack")
  height?: number;
  width?: number;
  loop?: boolean;
  autoplay?: boolean;
}

export function LazyLottie({
  id,
  height = 200,
  width = 200,
  loop = true,
  autoplay = true,
}: LazyLottieProps) {
  // initialize with cached data if present
  const [animationData, setAnimationData] = useState<any>(animationCache[id] || null);

  useEffect(() => {
    if (!animationCache[id]) {
      import(`@/public/animations/${id}.json`)
        .then((mod) => {
          const data = mod.default || mod;
          animationCache[id] = data;
          setAnimationData(data);
        })
        .catch((err) => console.error("Lottie JSON load failed:", err));
    }
  }, [id]);

  if (!animationData) {
    return <Skeleton variant="rectangular" width={width} height={height} />;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
    />
  );
}
