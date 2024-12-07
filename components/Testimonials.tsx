"use client";

import { Value } from "@/interface/type";
import { useRef, useState } from "react";

const styles = {
  scrollContainer: {
    msOverflowStyle: "none",
    scrollbarWidth: "none",
    "&::WebkitScrollbar": {
      display: "none",
    },
  } as React.CSSProperties,
} as const;

export const Testimonials = ({
  sectionName,
  testimonials,
}: {
  sectionName: string;
  testimonials: Value[];
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [playingVideos, setPlayingVideos] = useState<{
    [key: string]: boolean;
  }>({});

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 372 + 16; // card width + gap
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleVideoPlay = (videoId: string) => {
    setPlayingVideos((prev) => ({ ...prev, [videoId]: true }));
  };

  return (
    <div className="py-4 my-4" id={sectionName}>
      <h2 className="mb-1 text-xl font-bold md:text-2xl">{sectionName}</h2>

      <div className="tenms-carousel relative light right">
        <div className="w-full overflow-hidden">
          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`hidden md:block cursor-pointer absolute right-0 top-1/2 z-[3] -translate-y-1/2 ${
              !canScrollRight && "pointer-events-none opacity-10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              fill="none"
              viewBox="0 0 33 32"
              className="xl:mr-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
              />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`hidden md:block cursor-pointer absolute left-0 top-1/2 z-[2] -translate-y-1/2 ${
              !canScrollLeft && "pointer-events-none opacity-10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="32"
              fill="none"
              viewBox="0 0 33 32"
              className="rotate-180 xl:ml-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
          style={styles.scrollContainer}
        >
          {testimonials.map((t) => {
            const {
              description,
              id,
              name,
              profile_image,
              //   testimonial,
              //   thumb,
              //   video_type,
              video_url,
            } = t;

            return (
              <div key={id} className="mr-4">
                <div className="relative mt-5 w-[372px] rounded-lg border p-6 flex min-h-[297px] flex-col justify-between bg-white">
                  <div>
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 30"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                          />
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="none"
                          viewBox="0 0 20 30"
                        >
                          <path
                            fill="#D33242"
                            d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Video Section */}
                    <div className="w-full mb-4 overflow-hidden rounded-md aspect-video relative">
                      {video_url && !playingVideos[video_url] && (
                        <span
                          className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                          onClick={() => handleVideoPlay(video_url)}
                        >
                          <div
                            className="opacity-0 transition-opacity duration-300 ease-in-out"
                            style={{
                              fontSize: "0px",
                              opacity: 1,
                            }}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              alt="Play The Video"
                              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                              width={100}
                              height={100}
                              fetchPriority="high"
                              decoding="async"
                              draggable="false"
                              className="max-w-[20vw]"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </span>
                      )}
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video_url}${
                          video_url && playingVideos[video_url]
                            ? "?autoplay=1"
                            : ""
                        }`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex gap-4">
                    <div className="w-[50px] h-[50px]">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt={name}
                          src={profile_image}
                          width={50}
                          height={50}
                          loading="lazy"
                          decoding="async"
                          draggable="false"
                          className="w-full h-full object-cover"
                          style={{ color: "transparent" }}
                        />
                      </div>
                    </div>
                    <div>
                      <h3>{name}</h3>
                      <p className="text-sm text-gray-400">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
