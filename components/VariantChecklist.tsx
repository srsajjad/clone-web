import { getVariantData } from "@/app/data";
import { VariantData } from "@/interface/type";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense, use } from "react";

export const VarinantChecklist = ({ lang }: { lang: string }) => {
  const variantPromise = getVariantData({ lang });

  return (
    <ErrorBoundary
      fallback={
        <span className="text-sm text-red-600">
          Failed to load stock data from Kraken — please try later
        </span>
      }
    >
      <Suspense
        fallback={
          <span className="justify-self-center self-center text-sm text-gray-400">
            Fetching Variant Checklist
          </span>
        }
      >
        <VariantWithData vatiantPromise={variantPromise} />
      </Suspense>
    </ErrorBoundary>
  );
};

export const VariantWithData = ({
  vatiantPromise,
}: {
  vatiantPromise: Promise<VariantData>;
}) => {
  const variantData = use(vatiantPromise);

  const { items } = variantData;
  const variant = items[0];
  const checkList =
    variant.meta.find((meta) => meta.key === "checklist")?.values || [];

  return (
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
  );
};
