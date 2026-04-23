import { useEffect, useState } from "react";

export function CountdownBlock() {
  const weddingDate = new Date("2026-08-10T00:00:00");

  const calculateTimeLeft = () => {
    const difference = +weddingDate - +new Date();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Item = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-violet-500 rounded-md px-3 py-2 md:px-5 md:py-3 shadow-md">
      <div className="text-2xl md:text-4xl font-semibold text-white tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-xs tracking-widest text-white">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-2 md:gap-4">
      <Item value={timeLeft.days} label="DÍAS" />
      <Item value={timeLeft.hours} label="HS" />
      <Item value={timeLeft.minutes} label="MIN" />
      <Item value={timeLeft.seconds} label="SEG" />
    </div>
  );
}