import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
export function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Header />
      <main className="max-w-6xl mx-auto px-6">{children}</main>
      <Footer />
    </div>
  );
}