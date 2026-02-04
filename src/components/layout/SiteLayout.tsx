import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SocialRail } from "./SocialRail";
export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen text-white bg-[#0b1120]">
      {/* Ambient blue background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_30%_10%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_70%_15%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_80%,rgba(59,130,246,0.08),transparent_55%)]" />
      </div>

      <Header />
      <SocialRail />
      <main className="max-w-6xl mx-auto px-6 pt-24">{children}</main>
      <Footer />
    </div>
  );
}