import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Marketing Funnel Analysis",
    description:
      "Identified conversion drop-offs and improved funnel efficiency using cohort and retention analysis.",
    tag: "Growth Analytics",
  },
  {
    title: "Financial Variance Dashboard",
    description:
      "Built an executive dashboard tracking budget vs actuals, uncovering cost drivers and forecasting gaps.",
    tag: "Finance Analytics",
  },
  {
    title: "Operations Performance Insights",
    description:
      "Analyzed process bottlenecks and delivery delays using KPI tracking and trend modeling.",
    tag: "Operations Analytics",
  },
];

export function FeaturedCaseStudies() {
  const navigate = useNavigate(); 
    return (
    <section id="featured" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Featured Case Studies</h2>
      <p className="mt-2 text-zinc-400">
        A selection of projects where data drove measurable business impact.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, i) => (
          <motion.div
          key={study.title}
          onClick={() =>
            navigate(`/case-study/${study.title.toLowerCase().replaceAll(" ", "-")}`)
          }
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
            className="group cursor-pointer rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur transition hover:ring-accent/50 hover:-translate-y-1"
          >
            <div className="text-xs uppercase tracking-wide text-accent/80">
              {study.tag}
            </div>
            <div className="mt-3 text-lg font-semibold text-white">
              {study.title}
            </div>
            <p className="mt-3 text-sm text-zinc-400">{study.description}</p>

            <div className="mt-6 text-sm font-medium text-accent opacity-0 transition group-hover:opacity-100">
              View case study →
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}