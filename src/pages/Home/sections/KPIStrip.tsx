import { motion } from "framer-motion";

const kpis = [
  { title: "Experience", value: "2.5+ years" },
  { title: "Domains", value: "Marketing • Finance • Operations" },
  { title: "Core Tools", value: "SQL • Python • Power BI • Excel" },
  { title: "Strengths", value: "Dashboards • KPIs • Forecasting" },
];

export function KPIStrip() {
  return (
    <section className="mt-24 grid gap-6 md:grid-cols-4">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-6 ring-1 ring-violet-200 backdrop-blur transition hover:ring-accent/40 dark:bg-white/5 dark:ring-violet-500/20 dark:hover:ring-accent/40"
        >
          <div className="text-sm text-violet-700 dark:text-violet-300">{kpi.title}</div>
          <div className="mt-2 text-lg font-semibold text-violet-800 dark:text-violet-400">
            {kpi.value}
          </div>
        </motion.div>
      ))}
    </section>
  );
}