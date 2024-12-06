"use client";

import { Value } from "@/interface/type";
import { useState } from "react";
import parse from "html-react-parser";

export const CourseInstructors = ({
  instructors,
  sectionName,
}: {
  instructors: Value[];
  sectionName: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 4 instructors when not expanded
  const visibleInstructors = isExpanded ? instructors : instructors.slice(0, 4);

  return (
    <div className="py-4">
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">{sectionName}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 rounded-lg border border-gray-200 relative">
        {visibleInstructors.map((instructor, index) => (
          <div
            key={instructor.slug || index}
            className="flex items-start gap-4 bg-white"
          >
            <div className="w-24 h-24 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold">{instructor.name}</h3>
              <div className="text-gray-600 text-sm">
                {parse(instructor.description || "")}
              </div>
            </div>
          </div>
        ))}

        {instructors.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 
            rounded-full bg-white px-4 py-1 text-sm text-gray-500 
            shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700"
          >
            {isExpanded ? "কম দেখুন" : "বিস্তারিত দেখুন"}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="18"
              width="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                points={isExpanded ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}
              ></polyline>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};
