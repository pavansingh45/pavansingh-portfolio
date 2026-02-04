import { resumeContent } from "../../../content/resumeContent";

export function Projects() {
  return (
    <section id="projects" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-400">Projects</h2>
      <p className="mt-2 text-violet-700 dark:text-violet-300">
        A few highlights pulled directly from my resume.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resumeContent.projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white p-6 ring-1 ring-violet-200 backdrop-blur dark:bg-white/5 dark:ring-violet-500/20"
          >
            <div className="text-lg font-semibold text-violet-800 dark:text-violet-400">{p.title}</div>
            <p className="mt-3 text-sm text-violet-800 dark:text-white">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

