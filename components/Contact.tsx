export default function Contact() {
  return (
    <section id="contact" className="bg-cream border-t border-zinc-200 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left */}
          <div className="md:col-span-6">
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-6">
              Contact
            </p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-ink leading-tight mb-6">
              Let&apos;s Connect
            </h2>
            <p className="text-stone text-[15px] leading-relaxed max-w-sm">
              I am open to research collaborations, internships, and conversations
              about applied economics. Feel free to reach out.
            </p>
          </div>

          {/* Right — links */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <a
              href="mailto:deng.y3@northeastern.edu"
              className="group flex items-center justify-between bg-white border border-zinc-200 rounded-xl px-6 py-5 hover:border-zinc-400 transition-colors"
            >
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">Email</p>
                <p className="text-[15px] text-ink font-medium">deng.y3@northeastern.edu</p>
              </div>
              <svg className="w-4 h-4 text-muted group-hover:text-ink transition-colors" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>

            <a
              href="https://github.com/Louisa328"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white border border-zinc-200 rounded-xl px-6 py-5 hover:border-zinc-400 transition-colors"
            >
              <div>
                <p className="text-[11px] tracking-[0.14em] uppercase text-muted mb-1">GitHub</p>
                <p className="text-[15px] text-ink font-medium">github.com/Louisa328</p>
              </div>
              <svg className="w-4 h-4 text-muted group-hover:text-ink transition-colors" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
