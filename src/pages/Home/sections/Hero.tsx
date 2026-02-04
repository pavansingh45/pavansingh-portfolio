import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const fullName = "Pavansingh Thongar";
  const [displayedName, setDisplayedName] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative py-32">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />

      <h1 className="text-5xl font-bold md:text-6xl">
        <span className="text-zinc-300">Hi, I’m </span>
        <span className="text-white">
          {displayedName}
          <span className="animate-pulse text-white">|</span>
        </span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 max-w-xl text-lg text-zinc-300"
      >
        Business & Data Analyst focused on transforming raw data into measurable
        business impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <button className="rounded-xl bg-accent px-6 py-3 font-semibold text-midnight hover:bg-accentSoft transition">
          View Case Studies
        </button>

        <button className="rounded-xl border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}