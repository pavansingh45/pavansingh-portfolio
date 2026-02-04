import { AnimatePresence, motion } from "framer-motion";
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

const greetings = [
  "Hello,",
  "Xin chào,",
  "Hola,",
  "Bonjour,",
  "Namaste,",
  "Ciao,",
  "Konnichiwa,",
  "Olá,",
];

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
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative pt-24 pb-16 scroll-mt-28">
      {/* Soft background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-3xl" />

      <div className="text-center">
        <div className="min-h-[2.5rem] text-2xl font-semibold tracking-tight text-accent md:min-h-[3rem] md:text-3xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={greetingIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {greetings[greetingIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <h1 className="mt-2 text-5xl font-bold tracking-tight md:text-6xl">
          <span className="text-violet-800 dark:text-violet-400">I'm </span>
          <span className="text-violet-800 dark:text-violet-400">
            {displayedName}
            <span className="animate-pulse text-violet-600 dark:text-violet-300">|</span>
          </span>
        </h1>

        <div className="mt-3 text-2xl font-semibold text-violet-700 md:text-3xl dark:text-violet-300">
          {siteConfig.title}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto mt-6 max-w-3xl text-balance text-base leading-relaxed text-violet-800 md:text-lg dark:text-white"
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
          className="inline-block rounded-full bg-violet-900 px-8 py-3.5 text-base font-bold shadow-xl ring-2 ring-violet-950 transition [color:#fff] hover:bg-violet-800 hover:shadow-2xl dark:bg-accent dark:ring-violet-400/50 dark:hover:bg-accentSoft"
        >
          Download Resume
        </a>

        <Link
          to="/?section=contact"
          className="rounded-full border border-accent px-7 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50 dark:border-violet-400/50 dark:text-violet-300 dark:hover:bg-white/5"
        >
          Let's Connect
        </Link>
      </motion.div>

      <section className="mt-16">
        <div className="text-center text-xs tracking-[0.35em] text-violet-700 dark:text-violet-300">
          TECH STACK
        </div>

        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-violet-200 bg-white/80 p-6 backdrop-blur dark:border-violet-500/25 dark:bg-white/5">
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {stack.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm text-violet-800 dark:border-violet-500/25 dark:bg-white/5 dark:text-violet-300"
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