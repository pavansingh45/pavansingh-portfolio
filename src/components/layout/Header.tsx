export function Header() {
  return (
    <header className="border-b border-white/10 py-4">
      <div className="max-w-6xl mx-auto flex justify-between text-sm">
        <div className="font-semibold">Pavansingh Thongar</div>
        <nav className="flex gap-6 text-zinc-400">
          <a href="#" className="hover:text-accent">Work</a>
          <a href="#" className="hover:text-accent">About</a>
          <a href="#" className="hover:text-accent">Contact</a>
        </nav>
      </div>
    </header>
  );
}