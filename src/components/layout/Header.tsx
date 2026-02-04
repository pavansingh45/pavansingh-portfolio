import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLayoutEffect, useMemo, useState } from "react";

export function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const s = window.localStorage.getItem("theme");
    if (s === "light" || s === "dark") return s;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const active = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("section") || "home";
  }, [location.search]);

  const itemBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const itemInactive =
    "text-violet-600 hover:text-violet-900 hover:bg-violet-50 dark:text-violet-300 dark:hover:text-violet-100 dark:hover:bg-white/5";
  const itemActive =
    "bg-violet-900 font-semibold text-white ring-2 ring-violet-950 shadow-lg [color:#fff] dark:bg-accent dark:ring-accent/60 dark:shadow-none";

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex max-w-6xl px-6">
        <div className="mx-auto flex items-center gap-2 rounded-full border-2 border-violet-200 bg-white px-2 py-2 shadow-md backdrop-blur dark:border-violet-500/30 dark:bg-black/60">
          <Link
            to="/?section=home"
            className={[
              itemBase,
              active === "home" ? itemActive : itemInactive,
            ].join(" ")}
          >
            Home
          </Link>
          <Link
            to="/?section=about"
            className={[
              itemBase,
              active === "about" ? itemActive : itemInactive,
            ].join(" ")}
          >
            About
          </Link>
          <Link
            to="/?section=experience"
            className={[
              itemBase,
              active === "experience" ? itemActive : itemInactive,
            ].join(" ")}
          >
            Experience
          </Link>
          <Link
            to="/?section=projects"
            className={[
              itemBase,
              active === "projects" ? itemActive : itemInactive,
            ].join(" ")}
          >
            Projects
          </Link>
          <Link
            to="/?section=contact"
            className={[
              itemBase,
              active === "contact" ? itemActive : itemInactive,
            ].join(" ")}
          >
            Contact
          </Link>

          <div className="mx-1 h-6 w-px bg-violet-200 dark:bg-violet-500/30" />

          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="grid h-9 w-9 place-items-center rounded-full border border-violet-200 bg-violet-50 text-violet-600 transition hover:bg-violet-100 hover:text-violet-900 dark:border-violet-500/30 dark:bg-white/5 dark:text-violet-300 dark:hover:bg-white/10 dark:hover:text-violet-100"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}