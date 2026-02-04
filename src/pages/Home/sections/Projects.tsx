import { resumeContent } from "../../../content/resumeContent";

export function Projects() {
  return (
    <section id="projects" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Projects</h2>
      <p className="mt-2 text-zinc-400">
        A few highlights pulled directly from my resume.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {resumeContent.projects.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <div className="text-lg font-semibold text-white">{p.title}</div>
            <p className="mt-3 text-sm text-zinc-300">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

