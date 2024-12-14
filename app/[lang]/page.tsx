import { CourseOverview } from "@/components/CourseOverview";
import { getData } from "../data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

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
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang = "" } = await params;
  const data = await getData({ lang });

  return (
    <>
      <CourseOverview data={data} lang={lang} />
    </>
  );
}
