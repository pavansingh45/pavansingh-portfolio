import { useMemo, useState } from "react";
import { siteConfig } from "../../../content/siteConfig";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const DEFAULT_STATE: ContactFormState = { name: "", email: "", message: "" };

function encodeMailtoParam(value: string) {
  return encodeURIComponent(value).replace(/%20/g, "+");
}

export function ContactSection() {
  const [form, setForm] = useState<ContactFormState>(DEFAULT_STATE);
  const [copied, setCopied] = useState(false);

  const email = siteConfig.links.email;

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio contact from ${form.name || "someone"}`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      "",
      form.message || "",
    ].join("\n");

    return `mailto:${email}?subject=${encodeMailtoParam(subject)}&body=${encodeMailtoParam(body)}`;
  }, [email, form.email, form.message, form.name]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <section id="contact" className="mt-32 scroll-mt-28 py-16">
      <h2 className="text-2xl font-semibold text-white">Contact</h2>
      <p className="mt-3 max-w-2xl text-zinc-300">
        Want to collaborate or discuss an opportunity? Send a message and I’ll
        get back to you.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold">Email</h3>
          <p className="mt-2 text-zinc-300">
            <a
              className="underline underline-offset-4 hover:text-white"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white/10"
            >
              {copied ? "Copied" : "Copy email"}
            </button>
            <a
              className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accentSoft"
              href={`mailto:${email}`}
            >
              Open mail app
            </a>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Response time</h3>
            <p className="mt-2 text-zinc-300">Typically within 24–48 hours.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-3">
          <h3 className="text-lg font-semibold">Send a message</h3>

          <form
            className="mt-6 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm text-zinc-300">Name</span>
                <input
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, name: e.target.value }))
                  }
                  className="rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none focus:border-accent/60"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm text-zinc-300">Email</span>
                <input
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({ ...s, email: e.target.value }))
                  }
                  className="rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none focus:border-accent/60"
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-zinc-300">Message</span>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                className="min-h-[160px] rounded-xl border border-white/10 bg-[#0b1120] px-4 py-3 text-white outline-none focus:border-accent/60"
                placeholder="Tell me what you’d like to build / analyze…"
              />
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accentSoft"
              >
                Send (opens email)
              </button>

              <button
                type="button"
                onClick={() => setForm(DEFAULT_STATE)}
                className="rounded-xl border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
              >
                Reset
              </button>
            </div>

            <p className="text-xs text-zinc-400">
              This form opens your email client (no backend required).
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
