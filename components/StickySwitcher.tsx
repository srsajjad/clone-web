"use client";

import { useSticky } from "@/hooks/useSticky";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const StickySwitcher = () => {
  const { setShowSticky } = useSticky();

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setShowSticky(!inView);
  }, [inView, setShowSticky]);

  return <div ref={ref} className="h-[10px] w-full bg-none"></div>;
};
