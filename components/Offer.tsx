"use client";

import { useLoadVariantData } from "@/hooks/useLoadVariantData";
import { SocialShare } from "./SocialShare";
import { AvailableSeats } from "./AvailableSeats";

export const Offer = ({ lang }: { lang: string }) => {
  const { variantData, isLoading } = useLoadVariantData(lang);

  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-8 w-24 bg-gray-700 rounded"></div>
          <div className="h-8 w-24 bg-gray-700 rounded"></div>
          <div className="h-8 w-20 bg-gray-700 rounded"></div>
        </div>
        <div className="h-6 w-64 bg-gray-700 rounded mb-4"></div>
        <div className="h-12 bg-gray-700 rounded"></div>
      </div>
    );
  }

  const offer = variantData.items[0];

  const finalPriceAfterDiscount = offer.final_price;
  const originalPrice = offer.price;
  const discount = offer.discount_amount;
  const label = offer.name;
  const availableSeats = offer.available_stock;

  const end = offer.meta.find((each) => each.key === "timer")?.values[0];
  const { text: endLabel, end_at } = end as { text: string; end_at: string };

  const formattedDate = new Intl.DateTimeFormat(
    lang === "en" ? "en-US" : "bn-BD",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  ).format(new Date(end_at));

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="inline-block text-2xl font-semibold">
            ৳{finalPriceAfterDiscount}
          </div>

          <div className="ml-2 text-base font-normal md:text-xl text-gray-500 line-through">
            ৳{originalPrice}
          </div>

          <div className="inline-block ml-[15px] relative">
            <p
              className="inline-block h-[25px] bg-[rgb(249,123,83)] rounded-[3px_4px_4px_3px] border-l border-[rgb(249,123,83)] text-white font-semibold text-[14px] py-[3px] px-[7px] relative 
              before:content-[''] before:absolute before:block before:left-[-12px] before:top-[1px] before:w-0 before:h-0 before:border-t-[12px] before:border-t-transparent before:border-b-[12px] before:border-b-transparent before:border-r-[12px] before:border-r-[rgb(249,123,83)]
              after:content-[''] after:bg-white after:rounded-full after:w-1 after:h-1 after:block after:absolute after:left-[-2px] after:top-[13px]"
            >
              {discount} ৳ ছাড়
            </p>
          </div>
        </div>
        <SocialShare />
      </div>

      <div className="text-gray-400 mt-1 mb-4 font-semibold">{label}</div>

      <button
        className="w-full whitespace-nowrap text-center text-white bg-[rgb(28,171,85)] py-1 px-4 rounded-md text-lg font-semibold 
        border border-[#158F44] border-b-[#116b34] border-b-4
        transition-colors duration-150 ease-in-out 
        hover:bg-[#158F44] 
        select-none"
      >
        {lang === "en" ? "Enroll" : "কোর্সটি কিনুন"}
      </button>

      <div className="text-[#FF6B6B] text-sm font-semibold mt-2">
        {endLabel} {formattedDate}
      </div>

      <div className="mt-2">
        <AvailableSeats seats={availableSeats} lang={lang} />
      </div>
    </div>
  );
};
