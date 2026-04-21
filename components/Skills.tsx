const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "R", "MATLAB", "SQL"],
  },
  {
    category: "Econometrics & Causal Inference",
    skills: [
      "Difference-in-Differences",
      "Double Machine Learning",
      "Instrumental Variables",
      "Panel Data Methods",
      "Regression Discontinuity",
    ],
  },
  {
    category: "Machine Learning",
    skills: ["scikit-learn", "XGBoost", "SHAP", "Random Forest", "Ridge / Lasso"],
  },
  {
    category: "Data & Visualization",
    skills: ["pandas", "NumPy", "statsmodels", "matplotlib", "Stata"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white border-t border-zinc-200 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-5">
            Skills &amp; Methods
          </p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-ink leading-tight">
            Tools &amp; Expertise
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-2xl overflow-hidden">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white p-8"
            >
              <p className="text-[11px] tracking-[0.15em] uppercase text-muted mb-5">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] text-stone border border-zinc-200 rounded-full px-3 py-1.5 hover:border-zinc-400 hover:text-ink transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
