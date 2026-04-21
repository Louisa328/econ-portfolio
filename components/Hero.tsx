"use client";

export default function Hero() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-[68px] px-6 sm:px-10"
    >
      <div className="max-w-6xl mx-auto w-full py-20 sm:py-28">
        {/* All-caps label */}
        <p className="text-[11px] tracking-[0.18em] uppercase text-muted font-sans mb-7">
          MS Economics &middot; Northeastern University
        </p>

        {/* Name */}
        <h1 className="font-serif font-light text-[clamp(4rem,10vw,8rem)] leading-[0.95] text-ink mb-10">
          Yun
          <br />
          Deng
        </h1>

        {/* Thin rule */}
        <div className="w-16 border-t border-ink/25 mb-8" />

        {/* Subtitle with left border */}
        <p className="border-l-2 border-ink/20 pl-5 text-stone text-[15px] leading-relaxed max-w-md mb-12">
          Applied economist working at the intersection of causal inference,
          machine learning, and labor economics. First-year MS student at
          Northeastern University.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => go("#projects")}
            className="inline-flex items-center gap-2 bg-ink text-white text-[13px] font-medium px-6 py-3 rounded-full hover:bg-stone transition-colors"
          >
            View Projects
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
          <button
            onClick={() => go("#contact")}
            className="inline-flex items-center text-[13px] font-medium text-stone border border-zinc-300 px-6 py-3 rounded-full hover:border-ink hover:text-ink transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="max-w-6xl mx-auto w-full pb-10 flex items-center gap-3 opacity-35">
        <div className="w-px h-8 bg-ink" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-ink font-sans">Scroll</span>
      </div>
    </section>
  );
}
