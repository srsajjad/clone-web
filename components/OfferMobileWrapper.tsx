"use client";

import { OfferMobile } from "./OfferMobile";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const OfferDrawer = dynamic(() =>
  import("./OfferDrawer").then((mod) => mod.OfferDrawer)
);

export const OfferMobileWrapper = ({ lang }: { lang: string }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { ref, inView, entry } = useInView({
    threshold: 0,
    rootMargin: "-40px 0px 0px 0px",
  });

  useEffect(() => {
    if (
      !inView &&
      entry?.boundingClientRect.top &&
      entry.boundingClientRect.top < 0
    ) {
      setDrawerOpen(true);
    } else {
      setDrawerOpen(false);
    }
  }, [inView, entry]);

  return (
    <>
      <div className="order-1" ref={ref}>
        <OfferMobile lang={lang} />
      </div>

      <OfferDrawer lang={lang} drawerOpen={drawerOpen} />
    </>
  );
};
