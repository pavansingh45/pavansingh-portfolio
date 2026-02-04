import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../../content/siteConfig";
import type { ReactNode } from "react";
import {
  BarChart3,
  Braces,
  Cloud,
  Database,
  GitBranch,
  Github,
  LineChart,
  Server,
} from "lucide-react";

type StackItem = {
  label: string;
  icon: ReactNode;
};

const stack: StackItem[] = [
  { label: "SQL", icon: <Database size={18} /> },
  { label: "Power BI", icon: <BarChart3 size={18} /> },
  { label: "Excel", icon: <LineChart size={18} /> },
  { label: "Python", icon: <Braces size={18} /> },
  { label: "Azure Data Factory", icon: <Cloud size={18} /> },
  { label: "SSIS", icon: <Server size={18} /> },
  { label: "Git", icon: <GitBranch size={18} /> },
  { label: "GitHub", icon: <Github size={18} /> },
];

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
    <section id="home" className="relative pt-24 pb-16 scroll-mt-28">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="text-center">
        <div className="text-2xl font-semibold tracking-tight text-accent md:text-3xl">
          Xin chào,
        </div>

        <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-6xl">
          <span className="text-white">I'm </span>
          <span className="text-white">
            {displayedName}
            <span className="animate-pulse text-white/80">|</span>
          </span>
        </h1>

        <div className="mt-3 text-2xl font-semibold text-zinc-200 md:text-3xl">
          {siteConfig.title}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-zinc-300 md:text-lg"
      >
        {siteConfig.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a
          href={`${import.meta.env.BASE_URL}resume/Pavan_Singh_Thongar_Resume.pdf`}
          download="Pavan_Singh_Thongar_Resume.pdf"
          className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition hover:bg-accentSoft"
        >
          Download Resume
        </a>

        <Link
          to="/?section=contact"
          className="rounded-full border border-accent/50 px-7 py-3 text-sm font-semibold text-zinc-100 transition hover:bg-white/5"
        >
          Let's Connect
        </Link>
      </motion.div>

      <section className="mt-16">
        <div className="text-center text-xs tracking-[0.35em] text-accent/80">
          TECH STACK
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-accent/30 bg-white/5 p-6 backdrop-blur">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stack.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-accent/25 bg-white/5 px-4 py-3 text-sm text-zinc-100"
              >
                <div className="text-accent">{item.icon}</div>
                <div className="font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}