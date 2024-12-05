import { getVariantData } from "@/app/data";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { VariantWithData } from "./VariantWithData";
import { CountdownTimer } from "./CountdownTimer";

export const VarinantChecklist = ({ lang }: { lang: string }) => {
  const variantPromise = getVariantData({ lang });

  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <span className="justify-self-center self-center text-sm text-gray-400">
            Fetching Variant Checklist
          </span>
        }
      >
        <VariantWithData vatiantPromise={variantPromise} />

        <CountdownTimer />
      </Suspense>
    </ErrorBoundary>
  );
};
