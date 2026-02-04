import { resumeContent } from "../../../content/resumeContent";

export function Skills() {
  return (
    <section id="skills" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {Object.entries(resumeContent.skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur"
          >
            <div className="text-sm font-semibold text-white">{group}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

