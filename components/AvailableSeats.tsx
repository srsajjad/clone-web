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
      <span>{seats}</span>
      <style jsx>{`
        .shake-button {
          animation: shake 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
