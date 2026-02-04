import { resumeContent } from "../../../content/resumeContent";

export function Skills() {
  return (
    <section id="skills" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-400">Skills</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {Object.entries(resumeContent.skills).map(([group, items]) => (
          <div
            key={group}
            className="rounded-2xl bg-white p-6 ring-1 ring-violet-200 backdrop-blur dark:bg-white/5 dark:ring-violet-500/20"
          >
            <div className="text-sm font-semibold text-violet-800 dark:text-violet-400">{group}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700 dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300"
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

