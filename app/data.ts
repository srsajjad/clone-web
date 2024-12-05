import { CourseData, VariantData } from "@/interface/type";
import { baseUrl } from "@/utils/baseUrl";

export async function getData({ lang }: { lang: string }) {
  const url =
    lang === "en"
      ? `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch?lang=${lang}`
      : `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const dataResponse = await res.json();
  const data: CourseData = await dataResponse.data;

  return data;
}

export async function getVariantData({ lang }: { lang: string }) {
  const url =
    lang === "en"
      ? `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch/variants`
      : `${baseUrl}/discovery-service/api/v1/products/ielts-live-batch/variants?lang=bn`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const dataResponse = await res.json();
  const data: VariantData = await dataResponse.data;

  return data;
}
