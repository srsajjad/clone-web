import { CourseData } from "@/interface/type";
import { CourseDetails } from "./CourseDetails";
import { Slider } from "./Slider";
import { Offer } from "./Offer";
import { ProductCheckList } from "./ProductCheckList";
import { OfferMobileWrapper } from "./OfferMobileWrapper";
import { CourseInstructors } from "./CourseInstructors";
import { ClassRoutine } from "./ClassRoutine";
import { FAQ } from "./FAQ";
import { StickyProductCheckList } from "./StickyProductCheckList";
import { StickySwitcher } from "./StickySwitcher";
import { SectionTab } from "./SectionTab";
import { DemoClass } from "./DemoClass";
import { Testimonials } from "./Testimonials";
import { Pointers } from "./Pointers";

export const CourseOverview = ({
  data,
  lang,
}: {
  data: CourseData;
  lang: string;
}) => {
  const sections = data.sections;

  return (
    <>
      <div
        className="w-full min-h-[900px] md:min-h-[300px] bg-cover bg-center 
                  bg-[url('https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg')]
                  text-[#111827] font-sans border-0 border-solid border-[#dbe1eb] box-border pt-[34px] md:pt-[72px]"
      >
        <div className="w-full flex flex-col gap-4 md:flex-row md:gap-12 container mx-auto p-4 py-12 md:px-12 md:py-8 relative">
          <div className="md:hidden">
            <Slider data={data} />
          </div>

          <div className="order-2 md:order-1 flex-1 md:max-w-[60%]">
            <CourseDetails data={data} lang={lang} />
          </div>

          <div
            className="hidden md:block order-1 md:order-2 w-full md:w-[640px] shrink-0 bg-white p-1 rounded-md md:max-w-[330px] 
                  lg:max-w-[400px] absolute right-[-20px] lg:right-0 xl:right-[60] md:top-8 border"
          >
            <Slider data={data} />

            <StickySwitcher>
              <div className="px-3">
                <Offer lang={lang} />
                <ProductCheckList data={data} lang={lang} />
              </div>
            </StickySwitcher>
          </div>
        </div>
      </div>

      <div className="md:hidden p-4 flex flex-col">
        <div className="order-2">
          <ProductCheckList data={data} lang={lang} />
        </div>

        <OfferMobileWrapper lang={lang} />
      </div>

      <div className="flex w-full gap-4 container mx-auto p-4 md:px-12 pb-[200px] md:pb-8 relative">
        <div className="w-full md:w-[60%] flex flex-col">
          <SectionTab
            sections={sections.filter((sections) => !!sections.name)}
          />

          {sections.map((section) => {
            if (section.type === "demo_class_book_engagement") {
              return (
                <DemoClass key="demo_class" sectionInfo={section.values[0]} />
              );
            }

            if (section.type === "instructors") {
              return (
                <CourseInstructors
                  key={section.name}
                  instructors={section.values}
                  sectionName={section.name}
                />
              );
            }

            if (section.type === "pointers") {
              return (
                <Pointers
                  key={section.name}
                  sectionName={section.name}
                  pointers={section.values}
                />
              );
            }

            if (section.type === "routine") {
              return (
                <ClassRoutine
                  key={section.name}
                  sectionName={section.name}
                  html={section.values[0].html as string}
                  downloadLink={section.values[0].download_link as string}
                />
              );
            }

            if (section.type === "testimonials") {
              return (
                <Testimonials
                  key={section.name}
                  sectionName={section.name}
                  testimonials={section.values}
                />
              );
            }

            if (section.type === "faq") {
              return (
                <FAQ
                  key={section.name}
                  questions={section.values}
                  sectionName={section.name}
                />
              );
            }

            return null;
          })}
        </div>
        <div className="hidden md:block w-[40%] pl-10">
          <StickyProductCheckList data={data} lang={lang} />
        </div>
      </div>
    </>
  );
};
