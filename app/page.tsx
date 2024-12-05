import { getData } from "./data";
import { CourseOverview } from "@/components/CourseOverview";
import { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}): Promise<Metadata> {
  const lang = (await searchParams)?.lang || "";
  const data = await getData({ lang });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [],
    },
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const lang = (await searchParams)?.lang || "";
  const data = await getData({ lang });

  return (
    <>
      <CourseOverview data={data} lang={lang} />
    </>
  );
}
