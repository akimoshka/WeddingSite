import { motion } from "framer-motion";
import ph1 from "../assets/dress1.jpg";
import ph2 from "../assets/dress2.jpg";
import ph3 from "../assets/dress4.jpg";
import ph4 from "../assets/dress5.jpg";
import dresscodeImg from "../assets/dresscode.png";
import exmark from "../assets/exmark.png";

const RED = "#8C2D2D";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

export default function DressCode() {
  const photos = [ph1, ph2, ph3, ph4];

  return (
    <section className="bg-[#FFF6EF] text-[#1b1412] py-14 px-6">
      {/* Centered Title */}
      <motion.div
        className="flex justify-center mb-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img
          src={dresscodeImg}
          alt="Dress Code"
          className="w-100 md:w-96"
          draggable="false"
        />
      </motion.div>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-10 items-start">
        {/* TEXT */}
        <motion.div
          className="space-y-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p className="font-body text-[16px] md:text-[17px] leading-7" variants={fadeUp}>
            <span className="font-semibold">Чёрно-белый</span>, элегантность с лёгким бунтом — предлагаем надеть{" "}
            <span className="italic">кеды</span> и добавить в образ деталь,
            которая скажет:&nbsp;
            <span className="font-title" style={{ color: RED }}>«Сегодня праздник!»</span>
          </motion.p>

          <motion.p className="font-body text-[16px] md:text-[17px] leading-7" variants={fadeUp}>
            Но помните, что в <span className="font-semibold">белом платье</span> в этот день — только невеста.
          </motion.p>

          {/* Exmark with bullet points */}
          <motion.div className="flex gap-3 items-center" variants={fadeUp}>
            <img src={exmark} alt="!" className="w-10 md:w-20" />
            <div className="space-y-3">
              <p className="font-body text-[15px] md:text-[16px] leading-6">
                Пожалуйста, воздержитесь от букетов; можно принести{" "}
                <span style={{ color: RED, fontWeight: 600 }}>один</span> цветок,
                ассоциирующийся с Софой.
              </p>
              <p className="font-body text-[15px] md:text-[16px] leading-6">
                Формат вечерний: без детей младше 15 лет.
              </p>
            </div>
          </motion.div>

          {/* Color palette */}
          <motion.div className="flex justify-center gap-4 pt-4" variants={fadeUp}>
            {["#000000", "#2b2b2b", "#6f6f6f", "#cfcfcf", "#FFFFFF"].map((c) => (
              <span
                key={c}
                className="w-10 h-10 rounded-full border border-black/10"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* COLLAGE */}
        <motion.div
          className="grid grid-cols-6 auto-rows-[80px] md:auto-rows-[100px] gap-3 md:gap-4"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <CollageItem src={photos[0]} className="col-span-3 row-span-4 rotate-[-1.5deg]" />
          <CollageItem src={photos[1]} className="col-span-3 row-span-3 rotate-[1.2deg]" />
          <CollageItem src={photos[2]} className="col-span-2 row-span-2 translate-y-1 rotate-[2deg]" />
          <CollageItem src={photos[3]} className="col-span-4 row-span-2 -translate-y-1 rotate-[-1.2deg]" />
        </motion.div>
      </div>
    </section>
  );
}

function CollageItem({ src, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`relative rounded-2xl overflow-hidden ${className}`}
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300 ease-out"
        draggable="false"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </motion.div>
  );
}
