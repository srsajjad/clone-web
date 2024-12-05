"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now (you can change this later)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <p className="text-gray-400 font-semibold text-sm mb-3 text-[16px]">
        ৯ম ব্যাচের ভর্তি শেষ হবে:
      </p>
      <div className="flex gap-4">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center text-2xl md:text-4xl rounded-[14px] border-[3px] border-[rgb(74,74,74)] bg-[linear-gradient(158deg,rgb(0,0,0)10.11%,rgba(27,27,27,0.79)39.39%,rgb(35,35,35)95.29%)] h-[70px] w-[65px] text-white font-bold">
              {item.value}
            </div>
            <span className="mt-2 text-sm text-center text-gray-300 font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
