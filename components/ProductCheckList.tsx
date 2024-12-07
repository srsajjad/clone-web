import { CourseData } from "@/interface/type";

export const ProductCheckList = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  const checkList = data.checklist;

  return (
    <div className="rounded-lg py-2 pb-2 md:pb-8">
      <h2 className="text-xl font-semibold mb-4">
        {lang === "en" ? "What's Included" : "এই কোর্সে যা থাকছে"}
      </h2>

      <div className="space-y-2 md:space-y-3">
        {checkList.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.icon} alt="" className="w-6 h-6 flex-shrink-0" />
            <span className={`text-[#111827] font-[500]`}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
