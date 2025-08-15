import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anketaImg from "../assets/anketa.png";

const RED = "#8C2D2D";
// Formspark endpoint you provided:
const FORMSPARK_URL = "https://submit-form.com/TFNVvhXOf";

// Animations (unchanged)
const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};
const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

export default function RSVP() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Convert to JSON payload for Formspark
    const payload = Object.fromEntries(fd.entries());

    // Optional email meta (configure in Formspark dashboard if you want):
    // payload._email = { subject: `RSVP — ${payload.name || "Гость"}`, from: "Wedding RSVP" };

    try {
      const res = await fetch(FORMSPARK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus({ state: "success", message: "Спасибо! Мы получили вашу анкету 💌" });
        form.reset();
      } else {
        setStatus({ state: "error", message: "Не удалось отправить. Попробуйте позже." });
      }
    } catch {
      setStatus({ state: "error", message: "Ошибка сети. Попробуйте позже." });
    }
  }

  return (
    <section className="bg-[#FFF6EF] text-[#1b1412] py-8 px-5 font-body">
      <div className="mx-auto w-full max-w-[760px]">
        {/* Title image */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={anketaImg}
            alt="Анкета для гостя"
            className="w-100 md:w-96 select-none"
            draggable="false"
          />
        </motion.div>

        {/* Form (now posts to Formspark) */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Honeypot (spam protection) */}
          <input
            type="text"
            name="_honeypot"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* Name */}
          <motion.div variants={fadeUp}>
            <Field label="Имя / Имена + Фамилия">
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-[14px] border border-black/15 bg-transparent px-4 py-3 text-[16px] outline-none focus:border-black/30"
                placeholder="Например: Иван и Анна Ивановы"
              />
            </Field>
          </motion.div>

          {/* Will come */}
          <motion.div variants={fadeUp}>
            <Field label="Сможете ли вы прийти?">
              <div className="flex flex-col gap-4 mt-2">
                <Radio name="attending" value="Да" label="Да, с удовольствием!" required />
                <Radio name="attending" value="Нет" label="К сожалению, нет." />
              </div>
            </Field>
          </motion.div>

          {/* Submit */}
          <motion.div variants={fadeUp}>
            <button
              type="submit"
              disabled={status.state === "loading"}
              className="w-full rounded-full px-6 py-3 text-white font-medium disabled:opacity-70"
              style={{ backgroundColor: RED }}
            >
              {status.state === "loading" ? "Отправка…" : "Отправить"}
            </button>
          </motion.div>

          {/* Toast */}
          <AnimatePresence>
            {status.state !== "idle" && (
              <motion.div
                key={status.state}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`mt-2 rounded-[14px] px-4 py-3 text-[14px] border ${
                  status.state === "success"
                    ? "bg-[#FDF1EF] text-[#5a1c1c] border-[#E3C2C2]"
                    : "bg-[#FFF2F2] text-[#7a1f1f] border-[#E8BABA]"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <div className="uppercase tracking-wider text-[11px] text-neutral-500">{label}</div>
      {children}
    </div>
  );
}

function Radio({ name, value, label, required = false }) {
  return (
    <label className="flex items-center gap-4 cursor-pointer select-none">
      {/* Actual input */}
      <input type="radio" name={name} value={value} required={required} className="peer sr-only" />
      {/* Visual circle */}
      <span
        className="grid place-items-center w-11 h-11 rounded-full border border-black/40 bg-transparent
                   transition-all duration-200 peer-checked:border-transparent peer-checked:bg-[color:var(--r)]"
        style={{ ["--r"]: RED }}
      >
        <span className="w-3.5 h-3.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity" />
      </span>
      <span className="text-[16px] leading-6">{label}</span>
    </label>
  );
}
