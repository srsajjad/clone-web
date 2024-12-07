"use client";

import { OfferMobile } from "./OfferMobile";
import { SocialShare } from "./SocialShare";

export const OfferDrawer = ({
  lang,
  drawerOpen,
}: {
  lang: string;
  drawerOpen: boolean;
}) => {
  return (
    <div
      className={`fixed left-0 right-0 z-50 bg-white border-t px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out ${
        drawerOpen
          ? "bottom-0 translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end mb-2">
        <SocialShare />
      </div>
      <OfferMobile lang={lang} insideDrawer={true} />
    </div>
  );
};
