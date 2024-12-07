"use client";

import { Section } from "@/interface/type";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const scrollbarHideStyles = {
  "::WebkitScrollbar": {
    display: "none",
  },
  msOverflowStyle: "none",
  scrollbarWidth: "none",
} as const;

export const SectionTab = ({ sections }: { sections: Section[] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollRight(
        container.scrollWidth > container.clientWidth &&
          container.scrollLeft <
            container.scrollWidth - container.clientWidth - 10
      );
      setCanScrollLeft(container.scrollLeft > 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 300;
      const targetScroll =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-[64px] z-50 w-full bg-white hidden md:block min-h-[60px] pt-2">
      <div className="relative flex items-center w-full]">
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className={cn(
            "absolute left-0 z-10 transition-opacity duration-200",
            canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-50",
            "xl:ml-[-40px]"
          )}
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            fill="none"
            viewBox="0 0 33 32"
            className="rotate-180"
          >
            <path
              fill="#000"
              fillOpacity="0.5"
              fillRule="evenodd"
              d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex w-full overflow-x-auto scroll-smooth pl-0"
          style={scrollbarHideStyles}
        >
          {sections.map((section, index) => (
            <button
              key={section.type}
              onClick={() => setActiveTab(index)}
              className={cn(
                "relative p-2 text-base font-semibold whitespace-nowrap transition-all duration-200",
                "hover:text-[#1CAB55]",
                activeTab === index
                  ? "text-[#1CAB55] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1CAB55]"
                  : "text-gray-600"
              )}
            >
              {section.name}
            </button>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className={cn(
            "absolute right-0 z-10 transition-opacity duration-200",
            canScrollRight ? "opacity-100 cursor-pointer" : "opacity-50",
            "xl:mr-[-40px]"
          )}
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="32"
            fill="none"
            viewBox="0 0 33 32"
          >
            <path
              fill="#000"
              fillOpacity="0.5"
              fillRule="evenodd"
              d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />
    </div>
  );
};
