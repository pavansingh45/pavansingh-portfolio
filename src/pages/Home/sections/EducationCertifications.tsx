import { resumeContent } from "../../../content/resumeContent";

export function EducationCertifications() {
  return (
    <section id="education" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-400">Education</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {resumeContent.education.map((e) => (
          <div
            key={`${e.school}-${e.degree}`}
            className="rounded-2xl bg-white p-6 ring-1 ring-violet-200 backdrop-blur dark:bg-white/5 dark:ring-violet-500/20"
          >
            <div className="text-lg font-semibold text-violet-800 dark:text-violet-400">{e.degree}</div>
            <div className="mt-2 text-sm text-violet-700 dark:text-violet-300">
              {e.school} • {e.location}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-16 text-xl font-semibold text-violet-800 dark:text-violet-400">Certifications</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {resumeContent.certifications.map((c) => (
          <span
            key={c}
            className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700 dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

