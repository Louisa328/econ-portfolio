export default function About() {
  return (
    <section id="about" className="bg-white border-t border-zinc-200 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left — text */}
          <div className="md:col-span-7">
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-6">
              About
            </p>
            <h2 className="font-serif font-light text-4xl sm:text-5xl text-ink leading-tight mb-8">
              Applied Economist
              <br />
              <span className="text-muted">&amp; Data Scientist</span>
            </h2>
            <div className="space-y-5 text-stone text-[15px] leading-relaxed">
              <p>
                I am a first-year MS Economics student at Northeastern University
                (2025–2027), focused on applied microeconomics, labor economics,
                and the empirical methods that bridge economic theory with
                real-world data.
              </p>
              <p>
                My research interests center on causal inference — specifically
                how machine learning methods like Double Machine Learning can
                sharpen causal estimates in observational settings. I enjoy
                working on projects that combine rigorous econometric frameworks
                with modern ML toolkits.
              </p>
              <p>
                Outside of research, I am interested in health economics, labor
                market policy, and the economic implications of AI-driven
                occupational change.
              </p>
            </div>
          </div>

          {/* Right — stats */}
          <div className="md:col-span-5 grid grid-cols-2 gap-4">
            {[
              { value: "4",    label: "Research Projects"     },
              { value: "3+",   label: "ML Frameworks"         },
              { value: "2027", label: "Expected Graduation"   },
              { value: "NEU",  label: "Northeastern Univ."    },
            ].map((s) => (
              <div
                key={s.label}
                className="border border-zinc-200 rounded-xl p-6 bg-cream"
              >
                <div className="font-serif text-4xl text-ink font-light mb-1.5">
                  {s.value}
                </div>
                <div className="text-[11px] tracking-[0.12em] uppercase text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
