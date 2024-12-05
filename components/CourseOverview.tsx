import { CourseData } from "@/interface/type";
import { CourseDetails } from "./CourseDetails";

export const CourseOverview = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  return (
    <div className="w-full min-h-[900px] md:min-h-[300px] bg-cover bg-center bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')] text-[#111827] font-sans border-0 border-solid border-[#dbe1eb] box-border">
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-12 container mx-auto px-4 py-8">
        <CourseDetails data={data} lang={lang} />
      </div>
    </div>
  );
};
