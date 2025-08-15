import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ourWedding from "../assets/ourWedding.png";
import dateImg from "../assets/date.png";
import danyaSofaHome from "../assets/DanyaSofaHero.png";

/* helper for soft reveal on mount/in view */
function RevealOnce({ children, delay = 0, y = 12, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="bg-[#FFF6EF] text-[#1b1412] pt-10 pb-8 overflow-hidden">
      {/* Title */}
      <div className="relative flex flex-col items-center mb-4">
        <RevealOnce y={8}>
          <motion.img
            src={ourWedding}
            alt="Наша Свадьба"
            className="w-[300px] md:w-[420px] select-none pointer-events-none"
            initial={false}
            animate={{ opacity: [0.9, 1], y: [6, 0] }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </RevealOnce>

        {/* Date */}
        <RevealOnce delay={0.15} y={8}>
          <motion.img
            src={dateImg}
            alt="Дата свадьбы"
            className="w-[200px] md:w-[280px] mt-2 select-none pointer-events-none"
            initial={false}
            animate={{ opacity: [0.85, 1], y: [6, 0] }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
        </RevealOnce>
      </div>

      {/* Photo (kept narrow on desktop as you asked) */}
      <div className="flex justify-center">
        <RevealOnce delay={0.25} y={10}>
          <motion.img
            src={danyaSofaHome}
            alt="Даня и Софа детство"
            className="max-w-full h-auto w-[92%] md:w-[200px] lg:w-[400px] object-contain"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            /* delicate perpetual float */
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
        </RevealOnce>
      </div>
    </section>
  );
}
