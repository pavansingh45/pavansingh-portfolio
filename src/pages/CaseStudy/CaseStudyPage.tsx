import { useNavigate, useParams } from "react-router-dom";

export function CaseStudyPage() {
  const navigate = useNavigate(); // ✅ must be INSIDE component
  const { slug } = useParams();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Title */}
      <h1 className="text-4xl font-bold capitalize text-violet-700 dark:text-violet-400">
        {slug?.replaceAll("-", " ")}
      </h1>

      <p className="mt-4 text-violet-900 dark:text-violet-200">
        A detailed breakdown of the business challenge, analytical approach,
        tools used, insights uncovered, and measurable business impact.
      </p>

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 inline-flex items-center gap-2 rounded-lg border border-violet-200 px-4 py-2 text-sm text-violet-700 transition hover:bg-violet-50 dark:border-violet-500/20 dark:text-violet-400 dark:hover:bg-white/5"
      >
        ← Back to Portfolio
      </button>

      {/* Business Problem */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Business Problem</h2>
        <p className="mt-3 leading-relaxed text-violet-900 dark:text-violet-200">
          Describe the challenge faced by the business, what was not working,
          and why solving this problem mattered for performance, revenue, or
          efficiency.
        </p>
      </section>

      {/* Data & Tools */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Data & Tools Used</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-violet-900 dark:text-violet-200">
          <li>Data sources (databases, spreadsheets, APIs, etc.)</li>
          <li>Tools used (SQL, Python, Power BI, Excel, etc.)</li>
          <li>Any data cleaning or transformation steps</li>
        </ul>
      </section>

      {/* Analysis Approach */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Analysis Approach</h2>
        <p className="mt-3 leading-relaxed text-violet-900 dark:text-violet-200">
          Explain how you analyzed the data: trends, comparisons, KPIs,
          forecasting models, or segmentation methods used to extract insights.
        </p>
      </section>

      {/* Insights */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Key Insights</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-violet-900 dark:text-violet-200">
          <li>Insight #1 that revealed a business opportunity</li>
          <li>Insight #2 that identified inefficiencies or cost drivers</li>
          <li>Insight #3 that improved decision-making</li>
        </ul>
      </section>

      {/* Dashboard & Visuals */}
      <section className="mt-16">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Dashboard & Visuals</h2>
        <p className="mt-3 text-violet-900 dark:text-violet-200">
          Key visualizations used to communicate insights and drive decisions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-4 ring-1 ring-violet-200 dark:bg-white/5 dark:ring-violet-500/20">
            <img
              src="/images/marketing-funnel-dashboard.png"
              alt="Marketing Funnel Dashboard"
              className="h-48 w-full rounded-lg object-cover"
            />
          </div>

          <div className="rounded-xl bg-violet-50/50 p-4 ring-1 ring-violet-200 dark:bg-white/5 dark:ring-violet-500/20">
            <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-200 text-sm text-violet-700 dark:from-white/5 dark:to-white/10 dark:text-violet-400">
              Chart / KPI Visualization Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-violet-700 dark:text-violet-400">Business Impact</h2>
        <p className="mt-3 leading-relaxed text-violet-900 dark:text-violet-200">
          Highlight measurable improvements such as increased revenue,
          improved conversion rate, cost reduction, or time savings.
        </p>
      </section>

      {/* Metrics */}
      <section className="mt-16 grid gap-6 rounded-2xl bg-white p-8 ring-1 ring-violet-200 md:grid-cols-3 dark:bg-white/5 dark:ring-violet-500/20">
        <div>
          <div className="text-sm text-violet-700 dark:text-violet-400">Conversion Rate</div>
          <div className="mt-1 text-2xl font-semibold text-violet-900 dark:text-violet-200">+18%</div>
        </div>
        <div>
          <div className="text-sm text-violet-700 dark:text-violet-400">Cost Reduction</div>
          <div className="mt-1 text-2xl font-semibold text-violet-900 dark:text-violet-200">-12%</div>
        </div>
        <div>
          <div className="text-sm text-violet-700 dark:text-violet-400">Reporting Time</div>
          <div className="mt-1 text-2xl font-semibold text-violet-900 dark:text-violet-200">-30%</div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="mt-20 flex justify-between text-sm">
        <button
          onClick={() => navigate("/case-study/financial-variance-dashboard")}
          className="text-violet-700 hover:underline dark:text-violet-400"
        >
          ← Previous Case Study
        </button>

        <button
          onClick={() => navigate("/case-study/operations-performance-insights")}
          className="text-violet-700 hover:underline dark:text-violet-400"
        >
          Next Case Study →
        </button>
      </section>
    </div>
  );
}