import { resumeContent } from "../../../content/resumeContent";

export function EducationCertifications() {
  return (
    <section id="education" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Education</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {resumeContent.education.map((e) => (
          <div
            key={`${e.school}-${e.degree}`}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <div className="text-lg font-semibold text-white">{e.degree}</div>
            <div className="mt-2 text-sm text-zinc-400">
              {e.school} • {e.location}
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-16 text-xl font-semibold text-white">Certifications</h3>
      <div className="mt-6 flex flex-wrap gap-2">
        {resumeContent.certifications.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  );
}

