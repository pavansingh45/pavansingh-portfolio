import { Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export function Header() {
  const location = useLocation();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Persisted theme (optional; defaults dark)
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const active = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("section") || "home";
  }, [location.search]);

  const itemBase =
    "px-4 py-2 rounded-full text-sm transition whitespace-nowrap";
  const itemInactive = "text-zinc-200/80 hover:text-white hover:bg-white/5";
  const itemActive = "bg-accent/20 text-white ring-1 ring-accent/40";

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto flex max-w-6xl px-6">
        <div className="mx-auto flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur">
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

          <div className="mx-1 h-6 w-px bg-white/10" />

          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10 hover:text-white transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}