"use client";

import { OfferMobile } from "./OfferMobile";

export const OfferDrawer = ({
  lang,
  drawerOpen,
}: {
  lang: string;
  drawerOpen: boolean;
}) => {
  if (!drawerOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t px-4 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <OfferMobile lang={lang} />
    </div>
  );
};
