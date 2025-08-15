import { motion } from "framer-motion";
import redPaper from "../assets/redpaper.jpg";
import whenImg from "../assets/when.png";
import ringPng from "../assets/circle.png";

const RED = "#8C2D2D";

const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
const weekNums  = [22, 23, 24, 25, 26, 27, 28];

// Reusable variants
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Schedule() {
  return (
    <section className="bg-[#FFF6EF] text-[#1b1412] py-8 pb-16 px-5">
      <div className="mx-auto w-full max-w-[420px] space-y-8 font-body">
        {/* Red paper card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[18px] overflow-hidden shadow-sm"
          style={{
            backgroundImage: `url(${redPaper})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="p-4 md:p-5">
            <h3 className="font-title text-[18px] md:text-[20px] text-white/95 mb-1">
              Да, мы женимся!
            </h3>
            <p className="text-[12.5px] md:text-[13.5px] leading-6 text-white/90">
              И очень ждём вас на нашем торжестве. Нам важно разделить этот тёплый
              момент вместе с близкими — вашим смехом, поддержкой и объятиями.
              Ниже — дата и время встречи. Будем счастливы видеть вас!
            </p>
          </div>
        </motion.div>

        {/* Handwritten "Когда?" */}
        <motion.img
          src={whenImg}
          alt="Когда?"
          className="w-[200px]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Month line */}
        <motion.div
          className="text-[16px] text-center tracking-[0.16em] text-neutral-700"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Сентябрь | 2025
        </motion.div>

        {/* Week calendar (stagger children) */}
        <motion.div
          className="space-y-3"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Weekday row */}
          <div className="grid grid-cols-7 text-[12px] text-neutral-600">
            {weekDays.map((d) => (
              <motion.div key={d} variants={fadeUp} className="text-center">
                {d}
              </motion.div>
            ))}
          </div>

          {/* Date row */}
          <div className="relative grid grid-cols-7 text-center items-center">
            {weekNums.map((n) => {
              const is27 = n === 27;
              return (
                <motion.div key={n} variants={fadeUp} className="relative py-3">
                  {is27 && (
                    <img
                      src={ringPng}
                      alt=""
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] select-none pointer-events-none"
                    />
                  )}
                  <span className={`text-[18px] ${is27 ? "font-semibold" : "font-normal"}`}>
                    {n}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
