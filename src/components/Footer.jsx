// Footer.jsx
import { useEffect, useState } from "react";
import redPaper from "../assets/redpaper.jpg";

const BEIGE = "#FFF6EF";
const TARGET = new Date("2025-09-27T15:00:00");

export default function Footer() {
  const [time, setTime] = useState(getTimeLeft());
  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="bg-[#FFF6EF] text-[#1b1412]">
      <div
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url(${redPaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* put overlay UNDER the curve so it doesn't darken the beige */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />

        {/* beige top that dips into the red (starts a bit higher now) */}
        <svg
          className="absolute top-0 left-0 w-full h-20 md:h-20 z-[2]"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="
              M0,0 
              H1440 
              V100 
              C1100,40 820,160 480,90 
              C300,60 120,110 0,90 
              Z
            "
            fill={BEIGE}
          />
        </svg>

        {/* content sits above everything */}
        <div className="relative z-[3] mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-16 md:pb-20 space-y-8">
          <h3 className="text-center font-title text-2xl md:text-3xl tracking-wide">
            До нашей встречи осталось
          </h3>

          <div className="flex flex-wrap items-end justify-center gap-5 md:gap-8">
            <TimeNumber label="ДНЕЙ" value={time.days} />
            <Dot />
            <TimeNumber label="ЧАСОВ" value={time.hours} />
            <Dot />
            <TimeNumber label="МИНУТ" value={time.minutes} />
            <Dot />
            <TimeNumber label="СЕКУНД" value={time.seconds} />
          </div>

          <p className="max-w-3xl mx-auto text-center font-body text-[15px] md:text-[17px] leading-7 text-white/95">
            Спасибо, что вы с нами. Мы очень ценим вашу заботу, внимание и поддержку —
            и будем счастливы разделить этот день с вами.
          </p>

          <div className="pt-4 text-center text-white/70 text-xs">
            © {new Date().getFullYear()} Даня & Софа
          </div>
        </div>
      </div>
    </footer>
  );
}

/* helpers */

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, TARGET.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function TimeNumber({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-5xl font-mono leading-none">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/85">
        {label}
      </div>
    </div>
  );
}

function Dot() {
  return (
    <span
      className="w-1 h-1 rounded-full self-center mb-2"
      style={{ backgroundColor: "rgba(255,255,255,0.85)" }}
      aria-hidden="true"
    />
  );
}
