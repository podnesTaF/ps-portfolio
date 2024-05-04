"use client";

import { Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { LottieComponentProps } from "lottie-react";
import { Suspense, lazy } from "react";

const LazyLottieComponent = lazy(() => import("lottie-react"));

interface LottieProps<T extends Record<string, unknown>> {
  id: string;
}
const getAnimationData = () => {
  return import("@/public/animations/fullstack.json");
};
export function LazyLottie<T extends Record<string, unknown>>({
  id,
  ref,
  ...props
}: LottieProps<T> & Omit<LottieComponentProps, "animationData">) {
  const { data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      void import("lottie-react");
      return getAnimationData();
    },
    enabled: typeof window !== "undefined",
  });

  if (!data) return <Skeleton height={props.height} width={props.width} />;

  return (
    <Suspense fallback={<Skeleton height={props.height} width={props.width} />}>
      <LazyLottieComponent animationData={data} {...props} />
    </Suspense>
  );
}
