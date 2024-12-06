import { getData } from "./data";
import { CourseOverview } from "@/components/CourseOverview";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang: string }>;
}) {
  const { lang = "" } = await searchParams;
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
  searchParams: Promise<{ lang: string }>;
}) {
  const { lang = "" } = await searchParams;
  const data = await getData({ lang });

  return (
    <>
      <CourseOverview data={data} lang={lang} />
    </>
  );
}
