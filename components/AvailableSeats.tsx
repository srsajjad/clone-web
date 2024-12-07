"use client";

interface AvailableSeatsProps {
  seats: number;
  lang?: string;
  isMobile?: boolean;
}

export const AvailableSeats = ({
  seats,
  lang = "bn",
  isMobile = false,
}: AvailableSeatsProps) => {
  return (
    <div
      className={`w-fit inline-flex items-center gap-1.5 text-xs font-bold bg-gradient-to-r from-[#FF512F] to-[#b936cd] text-white py-1 px-2.5 ${
        isMobile ? "rounded-[10px]" : "rounded-[4px]"
      }`}
    >
      <span>{lang === "en" ? "Available seats:" : "আসন বাকি:"}</span>
      <span className="inline-block animate-[wiggle_1s_ease-in-out_infinite] origin-center">
        {seats}
      </span>
      <style jsx>{`
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-2deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }
        .animate-[wiggle_1s_ease-in-out_infinite] {
          animation: wiggle 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
