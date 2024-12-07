import { Value } from "@/interface/type";
import Image from "next/image";

export const DemoClass = ({ sectionInfo }: { sectionInfo: Value }) => {
  const {
    title,
    description,
    background,
    top_left_icon_img,
    thumbnail,
    title_color,
    description_color,
    cta,
  } = sectionInfo;

  const { image } = background || {};
  const { clicked_url, text } = cta || {};

  return (
    <div className="relative w-full px-4 md:px-8 py-8 md:py-12 mb-8 rounded-xl overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          {/* Top Icon */}
          {top_left_icon_img && (
            <div className="h-10">
              <Image
                src={top_left_icon_img}
                alt="icon"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>
          )}

          {/* Title and Description */}
          <div className="space-y-2">
            <h2
              className="text-xl md:text-2xl font-semibold"
              style={{ color: title_color || "#ffffff" }}
            >
              {title}
            </h2>
            <p
              className="text-base"
              style={{ color: description_color || "#f1eded" }}
            >
              {description}
            </p>
          </div>

          {/* CTA Button */}
          {cta && (
            <a
              href={clicked_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 w-full md:w-auto whitespace-nowrap text-center text-white bg-[rgb(28,171,85)] py-2 px-6 rounded-md text-lg font-semibold 
              border border-[#158F44] border-b-[#116b34] border-b-4
              transition-colors duration-150 ease-in-out 
              hover:bg-[#158F44] 
              select-none"
            >
              {text}
            </a>
          )}
        </div>

        {/* Right Content - Thumbnail */}
        <div className="w-full md:w-1/2 hidden md:flex items-center justify-center">
          {thumbnail && (
            <div className="relative w-full h-[200px]">
              <Image
                src={thumbnail}
                alt="demo class"
                fill
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
