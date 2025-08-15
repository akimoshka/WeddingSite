import { motion } from "framer-motion";
import mapImg from "../assets/map.png";
import whereImg from "../assets/where.png";

const RED = "#8C2D2D";
const ADDRESS = "Лаврентьева 17, первый этаж";
const TIME = "15:00";
const MAP_URL = `https://yandex.ru/maps/?text=${encodeURIComponent(ADDRESS)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

export default function Location() {
  return (
    <section className="bg-[#FFF6EF] text-[#1b1412] py-8 px-5 font-body">
      <div className="mx-auto w-full max-w-[420px]">
        {/* Handwritten "Где?" */}
        <motion.img
          src={whereImg}
          alt="Где?"
          className="w-[180px] mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* Address + time block */}
        <motion.div
          className="text-right space-y-1"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="text-[11px] uppercase tracking-wider text-neutral-500"
            variants={fadeUp}
          >
            адрес
          </motion.div>
          <motion.div className="text-[16px] leading-6" variants={fadeUp}>
            {ADDRESS}
          </motion.div>

          <motion.div
            className="text-[11px] uppercase tracking-wider text-neutral-500 mt-3"
            variants={fadeUp}
          >
            время
          </motion.div>
          <motion.div
            className="font-title leading-none"
            style={{ fontSize: "40px", color: RED }}
            variants={fadeUp}
          >
            {TIME}
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4"
        >
          <img src={mapImg} alt="Карта" className="w-full h-auto rounded-[16px]" />
        </motion.div>

        {/* Pill button */}
        <motion.div
          className="flex justify-center mt-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href={MAP_URL}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full text-white text-[12.5px]"
            style={{ backgroundColor: RED }}
          >
            Посмотреть на карте!
          </a>
        </motion.div>
      </div>
    </section>
  );
}
