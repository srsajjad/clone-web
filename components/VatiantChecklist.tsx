"use client";

import { CountdownTimer } from "./CountdownTimer";
import { useLoadVariantData } from "@/hooks/useLoadVariantData";

export const VariantChecklist = ({ lang }: { lang: string }) => {
  const { variantData, isLoading } = useLoadVariantData(lang);

  if (isLoading) {
    return (
      <>
        <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 mt-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex col-auto gap-2 py-1">
              <div className="w-[25px] h-[25px] bg-gray-300 animate-pulse rounded-md" />
              <div className="h-6 bg-gray-300 animate-pulse rounded-md w-3/4" />
            </div>
          ))}
        </div>

        {/* Countdown Timer Skeleton */}
        <div className="flex flex-col">
          <div className="h-6 bg-gray-300 animate-pulse rounded-md w-48 mb-3" />
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center">
                <div className="h-[70px] w-[65px] bg-gray-300 animate-pulse rounded-[14px]" />
                <div className="mt-2 h-4 bg-gray-300 animate-pulse rounded-md w-16" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  const { items } = variantData;

  const variant = items[0];
  const checkList =
    variant.meta.find((meta) => meta.key === "checklist")?.values || [];

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 mt-4 mb-6">
        {checkList.map((item) => (
          <div key={item.id} className="flex col-auto gap-2 py-1 text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.icon}
              alt={item.meta_value}
              className="w-[25px] h-[25px]"
            />

            <p className="text-base md:text-lg">{item.meta_value}</p>
          </div>
        ))}
      </div>

      <CountdownTimer variantData={variantData} />
    </>
  );
};
