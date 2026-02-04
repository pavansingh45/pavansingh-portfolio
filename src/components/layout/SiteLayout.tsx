import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SocialRail } from "./SocialRail";
export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-violet-50 text-violet-900 dark:bg-[#0f0a14] dark:text-violet-200">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_10%,rgba(126,34,206,0.08),transparent_60%)] dark:bg-[radial-gradient(800px_circle_at_30%_10%,rgba(139,92,246,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_80%,rgba(126,34,206,0.05),transparent_55%)] dark:bg-[radial-gradient(900px_circle_at_50%_80%,rgba(139,92,246,0.06),transparent_55%)]" />
      </div>

      <Header />
      <SocialRail />
      <main className="max-w-6xl mx-auto px-6 pt-24">{children}</main>
      <Footer />
    </div>
  );
}