import { resumeContent } from "../../../content/resumeContent";

export function About() {
  return (
    <section id="about" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-violet-800 dark:text-violet-400">About</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-violet-800 dark:text-white">
        {resumeContent.summary}
      </p>
    </section>
  );
}

