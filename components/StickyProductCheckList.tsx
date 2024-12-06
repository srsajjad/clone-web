"use client";

import { CourseData } from "@/interface/type";
import { Offer } from "./Offer";
import { ProductCheckList } from "./ProductCheckList";
import { useSticky } from "@/hooks/useSticky";

export const StickyProductCheckList = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  const { showSticky } = useSticky();

  if (!showSticky) return null;

  return (
    <div
      className="hidden md:block order-1 md:order-2 w-full md:w-[640px] shrink-0 bg-white p-4 rounded-md md:max-w-[330px] 
    lg:max-w-[400px] md:sticky md:top-[100px] border"
    >
      <Offer lang={lang} />
      <ProductCheckList data={data} lang={lang} />
    </div>
  );
};
