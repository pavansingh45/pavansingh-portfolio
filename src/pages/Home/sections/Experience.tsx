import { resumeContent } from "../../../content/resumeContent";

export function Experience() {
  return (
    <section id="experience" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-400">Experience</h2>

      <div className="mt-8 grid gap-6">
        {resumeContent.experience.map((role) => (
          <div
            key={`${role.company}-${role.title}`}
            className="rounded-2xl bg-white p-6 ring-1 ring-violet-200 backdrop-blur dark:bg-white/5 dark:ring-violet-500/20"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <div>
                <div className="text-lg font-semibold text-violet-800 dark:text-violet-400">
                  {role.title}
                </div>
                <div className="text-sm text-violet-700 dark:text-violet-300">
                  {role.company}
                  {role.location ? ` • ${role.location}` : ""}
                </div>
              </div>
              <div className="text-sm text-violet-700 dark:text-violet-300">{role.dates}</div>
            </div>

            <ul className="mt-4 grid gap-2 text-sm text-violet-800 dark:text-white">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-[6px] h-1.5 w-1.5 flex-none rounded-full bg-accent/80" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

