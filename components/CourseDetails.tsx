import { CourseData } from "@/interface/type";
import { VarinantChecklist } from "./VariantChecklist";

export const CourseDetails = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  const { title, description } = data;

  return (
    <div className="order-2 md:order-1 flex flex-col justify-center flex-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={data.media[0].resource_value}
        alt="live"
        className="w-[105px] h-[40px] mb-2"
      />

      <h1 className="text-white mb-2 text-[21px] font-semibold md:text-4xl">
        {title}
      </h1>

      <div className="mb-2"></div>

      <div
        className="text-gray-400 whitespace-pre-wrap"
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <VarinantChecklist lang={lang} />
    </div>
  );
};
