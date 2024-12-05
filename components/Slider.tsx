/* eslint-disable @next/next/no-img-element */
"use client";

import { CourseData } from "@/interface/type";
import { useState } from "react";

export const Slider = ({ data }: { data: CourseData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const SLIDES = data.media.filter((media) => media.name === "preview_gallery");

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
        {/* Main Content */}

        {currentSlide.resource_type === "image" ? (
          <img
            src={currentSlide.resource_value}
            alt="Slide"
            className="w-full h-full object-cover"
          />
        ) : isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${currentSlide.resource_value}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            className="relative w-full h-full cursor-pointer thumb-wrap"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={currentSlide.thumbnail_url}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="none"
                viewBox="0 0 56 56"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="28"
                  fill="#fff"
                  fillOpacity="0.5"
                ></circle>
                <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                <path
                  fill="#1CAB55"
                  d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                ></path>
              </svg>
            </div>
          </div>
        )}

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-75 transition-opacity"
          onClick={handlePrevious}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
          </svg>
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:opacity-75 transition-opacity"
          onClick={handleNext}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            color="white"
            style={{ color: "white" }}
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"></path>
          </svg>
        </button>
      </div>

      <div className="flex gap-2 mt-2">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`relative cursor-pointer ${
              currentIndex === index
                ? "border-2 border-[#1CAB55] rounded-[.65rem]"
                : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={slide.thumbnail_url || slide.resource_value}
              alt={`Thumbnail ${index + 1}`}
              className="w-[100px] h-[56px] object-cover rounded-lg"
            />

            {slide.resource_type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 56 56"
                >
                  <circle
                    cx="28"
                    cy="28"
                    r="28"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></circle>
                  <circle cx="27.999" cy="28" r="25.415" fill="#fff"></circle>
                  <path
                    fill="#1CAB55"
                    d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                  ></path>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
