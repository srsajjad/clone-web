import { CourseData } from "@/interface/type";
import { CourseDetails } from "./CourseDetails";
import { Slider } from "./Slider";
import { Offer } from "./Offer";
import { ProductCheckList } from "./ProductCheckList";

export const CourseOverview = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  return (
    <div
      className="w-full min-h-[900px] md:min-h-[300px] bg-cover bg-center 
    bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')]
     text-[#111827] font-sans border-0 border-solid border-[#dbe1eb] box-border"
    >
      <div className="w-full flex flex-col gap-4 md:flex-row md:gap-12 container mx-auto px-12 py-8 relative">
        <div className="order-2 md:order-1 flex-1 max-w-[60%]">
          <CourseDetails data={data} lang={lang} />
        </div>

        <div
          className="order-1 md:order-2 w-full md:w-[640px] shrink-0 bg-white p-1 rounded-md md:max-w-[330px] 
         lg:max-w-[400px] md:absolute md:right-0 md:top-8"
        >
          <Slider data={data} />

          <div className="px-2">
            <Offer lang={lang} />
            <ProductCheckList data={data} lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
};
