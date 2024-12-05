import { fetcher } from "@/utils/fetcher";
import { baseUrl } from "@/utils/baseUrl";
import { VariantData } from "@/interface/type";
import useSWR from "swr/immutable";

export const useLoadVariantData = (lang: string) => {
  const url =
    lang === "en"
      ? `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch/variants`
      : `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch/variants?lang=bn`;

  const { data, error, isLoading } = useSWR(url, fetcher);

  const variantData = data?.data as VariantData;

  return {
    variantData,
    isLoading,
    isError: error,
  };
};
