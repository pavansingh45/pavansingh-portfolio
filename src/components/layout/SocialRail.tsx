import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "../../content/siteConfig";

export function SocialRail() {
  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-violet-200 bg-violet-50/80 p-2 text-violet-600 backdrop-blur transition hover:bg-violet-100 hover:text-violet-900 dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300 dark:hover:bg-white/10 dark:hover:text-violet-100"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-violet-200 bg-violet-50/80 p-2 text-violet-600 backdrop-blur transition hover:bg-violet-100 hover:text-violet-900 dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300 dark:hover:bg-white/10 dark:hover:text-violet-100"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>

      <div className="mt-2 h-20 w-px bg-violet-200 dark:bg-violet-500/30" />

      <div className="select-none text-xs tracking-[0.25em] text-violet-600 [writing-mode:vertical-rl] rotate-180 dark:text-violet-400">
        FOLLOW&nbsp;ME
      </div>
    </div>
  );
}

