export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <p className="font-serif text-xl text-ink font-light leading-none mb-1.5">
            Yun Deng
          </p>
          <p className="text-[11px] tracking-[0.1em] uppercase text-muted">
            MS Economics · Northeastern University · 2025–2027
          </p>
        </div>

        {/* Links */}
        <nav className="flex items-center gap-6">
          <a
            href="https://github.com/Louisa328"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <span className="text-zinc-300 text-xs select-none">·</span>
          <a
            href="mailto:deng.y3@northeastern.edu"
            className="text-[11px] tracking-[0.14em] uppercase text-muted hover:text-ink transition-colors"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
