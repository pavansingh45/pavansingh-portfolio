import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "../../content/siteConfig";

export function SocialRail() {
  return (
    <div className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
      <a
        href={siteConfig.links.github}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-200 backdrop-blur hover:bg-white/10 hover:text-white transition"
        aria-label="GitHub"
      >
        <Github size={18} />
      </a>
      <a
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-200 backdrop-blur hover:bg-white/10 hover:text-white transition"
        aria-label="LinkedIn"
      >
        <Linkedin size={18} />
      </a>

      <div className="mt-2 h-20 w-px bg-white/15" />

      <div className="select-none text-xs tracking-[0.25em] text-zinc-400 [writing-mode:vertical-rl] rotate-180">
        FOLLOW&nbsp;ME
      </div>
    </div>
  );
}

