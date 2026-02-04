import { resumeContent } from "../../../content/resumeContent";

export function About() {
  return (
    <section id="about" className="mt-32 scroll-mt-24">
      <h2 className="text-2xl font-semibold text-white">About</h2>
      <p className="mt-4 max-w-3xl text-zinc-300 leading-relaxed">
        {resumeContent.summary}
      </p>
    </section>
  );
}

