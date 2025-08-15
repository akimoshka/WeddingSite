import { motion } from "framer-motion";
import frameTop from "../assets/frametop.png";
import frameBot from "../assets/framebot.png";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Quote() {
  return (
    <section
      className="
        relative bg-[#FFF6EF] text-[#1b1412]
        px-6 pt-16 md:pt-20
        pb-24 md:pb-28
        overflow-hidden
      "
    >
      {/* Top ribbon */}
      <motion.img
        src={frameTop}
        alt=""
        className="pointer-events-none select-none absolute -top-6 -left-2 w-[200px] md:w-[420px]"
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Bottom ribbon */}
      <motion.img
        src={frameBot}
        alt=""
        className="pointer-events-none select-none absolute bottom-3 md:bottom-6 -right-1 w-[220px] md:w-[460px]"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
      />

      {/* Text block */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl text-center space-y-5 md:space-y-6"
      >
        <p className="font-body text-[12px] leading-5 md:text-[20px] md:leading-9 px-10">
          Более же всего облекитесь в любовь, которая есть
          <br className="hidden md:block" />
          совокупность совершенства.
        </p>

        <p className="font-body text-[11px] md:text-[18px] text-[#1b1412]/80 text-right pr-10 md:pr-12">
          Послание к Колоссянам 3:14
        </p>
      </motion.div>
    </section>
  );
}
