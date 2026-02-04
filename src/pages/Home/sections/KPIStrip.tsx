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
          className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur hover:ring-accent/40 transition"
        >
          <div className="text-sm text-zinc-400">{kpi.title}</div>
          <div className="mt-2 text-lg font-semibold text-white">
            {kpi.value}
          </div>
        </motion.div>
      ))}
    </section>
  );
}