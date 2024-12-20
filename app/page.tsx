import { getData } from "./data";
import { CourseOverview } from "@/components/CourseOverview";

export async function generateMetadata() {
  const lang = "";
  const data = await getData({ lang });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [],
    },
  };
}

export default async function Home() {
  const lang = "";
  const data = await getData({ lang });

  return (
    <>
      <CourseOverview data={data} lang={lang} />
    </>
  );
}
