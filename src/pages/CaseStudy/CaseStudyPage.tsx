import { useNavigate, useParams } from "react-router-dom";

export function CaseStudyPage() {
  const navigate = useNavigate(); // ✅ must be INSIDE component
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white capitalize">
        {slug?.replaceAll("-", " ")}
      </h1>

      <p className="mt-4 text-zinc-400">
        A detailed breakdown of the business challenge, analytical approach,
        tools used, insights uncovered, and measurable business impact.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:bg-white/5 transition"
      >
        ← Back to Portfolio
      </button>

      {/* Business Problem */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Business Problem</h2>
        <p className="mt-3 text-zinc-400 leading-relaxed">
          Describe the challenge faced by the business, what was not working,
          and why solving this problem mattered for performance, revenue, or
          efficiency.
        </p>
      </section>

      {/* Data & Tools */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Data & Tools Used</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
          <li>Data sources (databases, spreadsheets, APIs, etc.)</li>
          <li>Tools used (SQL, Python, Power BI, Excel, etc.)</li>
          <li>Any data cleaning or transformation steps</li>
        </ul>
      </section>

      {/* Analysis Approach */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Analysis Approach</h2>
        <p className="mt-3 text-zinc-400 leading-relaxed">
          Explain how you analyzed the data: trends, comparisons, KPIs,
          forecasting models, or segmentation methods used to extract insights.
        </p>
      </section>

      {/* Insights */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Key Insights</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-zinc-400">
          <li>Insight #1 that revealed a business opportunity</li>
          <li>Insight #2 that identified inefficiencies or cost drivers</li>
          <li>Insight #3 that improved decision-making</li>
        </ul>
      </section>

      {/* Dashboard & Visuals */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold text-white">Dashboard & Visuals</h2>
        <p className="mt-3 text-zinc-400">
          Key visualizations used to communicate insights and drive decisions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <img
              src="/images/marketing-funnel-dashboard.png"
              alt="Marketing Funnel Dashboard"
              className="h-48 w-full rounded-lg object-cover"
            />
          </div>

          <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
            <div className="h-48 rounded-lg bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-zinc-500 text-sm">
              Chart / KPI Visualization Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-white">Business Impact</h2>
        <p className="mt-3 text-zinc-400 leading-relaxed">
          Highlight measurable improvements such as increased revenue,
          improved conversion rate, cost reduction, or time savings.
        </p>
      </section>

      {/* Metrics */}
      <section className="mt-16 grid gap-6 rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 md:grid-cols-3">
        <div>
          <div className="text-sm text-zinc-400">Conversion Rate</div>
          <div className="mt-1 text-2xl font-semibold text-white">+18%</div>
        </div>
        <div>
          <div className="text-sm text-zinc-400">Cost Reduction</div>
          <div className="mt-1 text-2xl font-semibold text-white">-12%</div>
        </div>
        <div>
          <div className="text-sm text-zinc-400">Reporting Time</div>
          <div className="mt-1 text-2xl font-semibold text-white">-30%</div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="mt-20 flex justify-between text-sm">
        <button
          onClick={() => navigate("/case-study/financial-variance-dashboard")}
          className="text-accent hover:underline"
        >
          ← Previous Case Study
        </button>

        <button
          onClick={() => navigate("/case-study/operations-performance-insights")}
          className="text-accent hover:underline"
        >
          Next Case Study →
        </button>
      </section>
    </div>
  );
}