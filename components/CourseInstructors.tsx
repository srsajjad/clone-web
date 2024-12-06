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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">{sectionName}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleInstructors.map((instructor, index) => (
          <div
            key={instructor.slug || index}
            className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm"
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
              <h3 className="text-xl font-semibold mb-2">{instructor.name}</h3>
              <div className="text-gray-600">
                {parse(instructor.description || "")}
              </div>
            </div>
          </div>
        ))}
      </div>

      {instructors.length > 4 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-8 mx-auto block px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        >
          {isExpanded ? "কম দেখুন" : "বিস্তারিত দেখুন"}
        </button>
      )}
    </div>
  );
};
