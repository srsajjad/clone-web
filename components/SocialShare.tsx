"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const SocialShare = () => {
  const { toast } = useToast();
  const [isMobile, setIsMobile] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /mobile|android|iphone|ipad|phone/i.test(userAgent);
    };
    setIsMobile(checkMobile());
  }, []);

  const handleShare = async () => {
    const url = window.location.href;

    if (isMobile && navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check out this amazing course!",
          url,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error sharing:", error);
          toast({
            variant: "destructive",
            description: "Failed to share. Please try again.",
          });
        }
      }
    }
  };

  const handleCopy = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast({
        description: "Link copied to clipboard!",
        className: "bg-[#1CAB55] text-white border-none",
      });
      setShowOptions(false);
    } catch (error) {
      console.error("Error copying link:", error);
      toast({
        variant: "destructive",
        description: "Failed to copy link",
      });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="flex items-center gap-1.5 text-gray-500 hover:text-[#1CAB55] transition-all duration-200 group"
      >
        <div className="relative">
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#E7F7EE] transition-colors">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform md:w-4 md:h-4"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#1CAB55] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="text-xs md:text-sm font-medium">Share</span>
      </button>

      {showOptions && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
          {isMobile && (
            <button
              onClick={handleShare}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-gray-700 flex items-center gap-2"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                <polyline points="16 6 12 2 8 6" />
                <line x1="12" y1="2" x2="12" y2="15" />
              </svg>
              Share
            </button>
          )}
          <button
            onClick={handleCopy}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 text-gray-700 flex items-center gap-2"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy link
          </button>
        </div>
      )}
    </div>
  );
};
