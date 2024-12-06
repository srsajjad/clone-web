"use client";

import { Value } from "@/interface/type";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import parse from "html-react-parser";

export const FAQ = ({
  questions,
  sectionName,
}: {
  questions: Value[];
  sectionName: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only first 5 questions when not expanded
  const visibleQuestions = isExpanded ? questions : questions.slice(0, 5);

  return (
    <div className="py-4">
      <h2 className="mb-4 text-xl font-bold md:text-2xl">{sectionName}</h2>

      <div className="relative border rounded-lg px-4 pb-1">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {visibleQuestions.map((faq, index) => (
            <AccordionItem
              key={faq.slug || index}
              value={`item-${index}`}
              className="border-b border-dashed border-gray-200 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-black">
                {parse(faq.answer || "")}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {questions.length > 5 && (
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
