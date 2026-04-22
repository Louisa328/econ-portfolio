/* ------------------------------------------------------------------ */
/*  SVG card illustrations                                              */
/* ------------------------------------------------------------------ */

function NetworkSVG() {
  // AI exposure → self-employment network
  const edges: [number, number, number, number, number][] = [
    [80, 68, 160, 48, 0.12], [80, 150, 162, 128, 0.12],
    [160, 48, 262, 78, 0.15], [162, 128, 258, 158, 0.15],
    [162, 128, 262, 78, 0.1], [160, 48, 258, 158, 0.08],
    [262, 78, 392, 104, 0.25], [258, 158, 392, 104, 0.22],
    [392, 104, 488, 52, 0.1], [392, 104, 500, 168, 0.1],
    [392, 104, 555, 104, 0.12],
  ];
  const nodes: [number, number, number, number][] = [
    [80, 68, 4, 0.22], [80, 150, 5, 0.22],
    [115, 30, 3, 0.15], [115, 185, 3, 0.15],
    [160, 48, 7, 0.32], [162, 128, 7, 0.32],
    [220, 195, 4, 0.2],
    [262, 78, 11, 0.55], [258, 158, 10, 0.48],
    [310, 38, 4, 0.2], [310, 190, 4, 0.2],
    [488, 52, 5, 0.22], [500, 168, 5, 0.22],
    [555, 104, 6, 0.28],
  ];
  return (
    <svg
      viewBox="0 0 640 220"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {edges.map(([x1, y1, x2, y2, op], i) => (
        <line
          key={i}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#1b1b1c"
          strokeWidth="0.9"
          strokeOpacity={op}
        />
      ))}
      {nodes.map(([cx, cy, r, op], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#1b1b1c" fillOpacity={op} />
      ))}
      {/* Hub: self-employment */}
      <circle cx="392" cy="104" r="22" fill="#1b1b1c" fillOpacity="0.06" />
      <circle cx="392" cy="104" r="15" fill="#1b1b1c" fillOpacity="0.10" />
      <circle cx="392" cy="104" r="9"  fill="#1b1b1c" fillOpacity="0.75" />
      <text
        x="420" y="108"
        fill="#1b1b1c" fillOpacity="0.45"
        fontSize="8.5" fontFamily="Inter, sans-serif"
        letterSpacing="0.07em"
      >
        SELF-EMP.
      </text>
    </svg>
  );
}

function DiDSVG() {
  // Difference-in-differences: NJ vs PA, treatment at x=165
  const nj = "M 55,148 L 95,143 L 135,138 L 165,134 L 200,124 L 240,117 L 280,108";
  const pa = "M 55,160 L 95,162 L 135,164 L 165,166 L 200,170 L 240,174 L 280,178";
  const pts = [[55,148],[95,143],[135,138],[165,134],[200,124],[240,117],[280,108],
               [55,160],[95,162],[135,164],[165,166],[200,170],[240,174],[280,178]];
  return (
    <svg
      viewBox="0 0 340 220"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Grid */}
      {[60,110,160].map(y => (
        <line key={y} x1="42" y1={y} x2="295" y2={y} stroke="#1b1b1c" strokeWidth="0.5" strokeOpacity="0.08"/>
      ))}
      {/* Axes */}
      <line x1="42" y1="195" x2="295" y2="195" stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      <line x1="42" y1="40"  x2="42"  y2="195" stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      {/* Treatment line */}
      <line x1="165" y1="40" x2="165" y2="190"
        stroke="#1b1b1c" strokeWidth="1" strokeOpacity="0.3"
        strokeDasharray="4 3"
      />
      <text x="168" y="52" fill="#1b1b1c" fillOpacity="0.4" fontSize="7.5" fontFamily="Inter, sans-serif" letterSpacing="0.05em">
        POLICY
      </text>
      {/* Lines */}
      <path d={nj} stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={pa} stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="5 3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Dots */}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#1b1b1c" fillOpacity={i < 7 ? 0.65 : 0.3}/>
      ))}
      {/* Labels */}
      <text x="284" y="104" fill="#1b1b1c" fillOpacity="0.65" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">NJ</text>
      <text x="284" y="182" fill="#1b1b1c" fillOpacity="0.35" fontSize="9" fontFamily="Inter, sans-serif">PA</text>
    </svg>
  );
}

function ROCSvg() {
  // ROC curves for three models
  const xgb = "M 55,200 C 55,100 75,58 90,52 S 150,40 290,40";
  const rf  = "M 55,200 C 60,120 90,72 110,62 S 175,42 290,40";
  const lr  = "M 55,200 C 65,140 105,88 135,74 S 210,46 290,40";
  const diag = "M 55,200 L 290,40";
  return (
    <svg
      viewBox="0 0 340 220"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Axes */}
      <line x1="55" y1="200" x2="290" y2="200" stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      <line x1="55" y1="200" x2="55"  y2="40"  stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      {/* Diagonal baseline */}
      <path d={diag} stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.15" strokeDasharray="4 3"/>
      {/* LR */}
      <path d={lr}  stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.28" strokeLinecap="round"/>
      {/* RF */}
      <path d={rf}  stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.50" strokeLinecap="round"/>
      {/* XGBoost */}
      <path d={xgb} stroke="#1b1b1c" strokeWidth="2"   strokeOpacity="0.75" strokeLinecap="round"/>
      {/* Legend */}
      <line x1="170" y1="195" x2="185" y2="195" stroke="#1b1b1c" strokeWidth="2"   strokeOpacity="0.75"/>
      <line x1="170" y1="175" x2="185" y2="175" stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.50"/>
      <line x1="170" y1="155" x2="185" y2="155" stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.28"/>
      <text x="189" y="198" fill="#1b1b1c" fillOpacity="0.65" fontSize="8" fontFamily="Inter, sans-serif">XGBoost</text>
      <text x="189" y="178" fill="#1b1b1c" fillOpacity="0.45" fontSize="8" fontFamily="Inter, sans-serif">RF</text>
      <text x="189" y="158" fill="#1b1b1c" fillOpacity="0.28" fontSize="8" fontFamily="Inter, sans-serif">LR</text>
      {/* Axis labels */}
      <text x="155" y="215" fill="#1b1b1c" fillOpacity="0.3" fontSize="7.5" fontFamily="Inter, sans-serif" letterSpacing="0.05em">FALSE POSITIVE RATE</text>
      <text x="40"  y="125" fill="#1b1b1c" fillOpacity="0.3" fontSize="7.5" fontFamily="Inter, sans-serif" letterSpacing="0.05em"
        transform="rotate(-90, 40, 125)">TPR</text>
    </svg>
  );
}

function ScatterSVG() {
  // Scatter: log house price vs log size with OLS line
  const dots: [number, number][] = [
    [65,178],[85,168],[102,172],[120,158],[138,150],[152,145],[170,152],
    [188,135],[206,140],[222,126],[240,120],[258,122],[274,112],[296,115],
    [312,103],[335,98],[355,90],[372,94],[390,83],[410,79],[432,70],
    [455,67],[478,61],[508,56],[535,52],[558,48],
  ];
  return (
    <svg
      viewBox="0 0 630 220"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Grid lines */}
      {[65,105,145,185].map(y => (
        <line key={y} x1="52" y1={y} x2="586" y2={y} stroke="#1b1b1c" strokeWidth="0.5" strokeOpacity="0.07"/>
      ))}
      {/* Axes */}
      <line x1="52" y1="200" x2="586" y2="200" stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      <line x1="52" y1="200" x2="52"  y2="36"  stroke="#1b1b1c" strokeWidth="0.8" strokeOpacity="0.25"/>
      {/* Regression line */}
      <line x1="60" y1="185" x2="570" y2="44"
        stroke="#1b1b1c" strokeWidth="1.5" strokeOpacity="0.55" strokeLinecap="round"
      />
      {/* Dots */}
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#1b1b1c" fillOpacity="0.45"/>
      ))}
      {/* Axis labels */}
      <text x="295" y="215" fill="#1b1b1c" fillOpacity="0.3" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.05em" textAnchor="middle">
        LOG SQUARE FOOTAGE
      </text>
      <text x="32" y="125" fill="#1b1b1c" fillOpacity="0.3" fontSize="8" fontFamily="Inter, sans-serif" letterSpacing="0.05em"
        transform="rotate(-90, 32, 125)" textAnchor="middle">
        LOG PRICE
      </text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects = [
  {
    number: "01",
    title: "Does Higher Occupational AI Exposure Cause Higher Probability of Self-Employment?",
    subtitle: null,
    description:
      "Causal inference analysis using Double Machine Learning (DML) and difference-in-differences (DID) to estimate the effect of AI occupational exposure on self-employment probability.",
    tags: ["Causal Inference", "Double ML", "Labor Economics", "Python"],
    github: "https://github.com/Louisa328/DA-final-project",
    large: true,
    bg: "#f0ebe3",
    Illustration: NetworkSVG,
  },
  {
    number: "02",
    title: "Minimum Wages and Employment",
    subtitle: "Card & Krueger Replication",
    description:
      "Replication and extension of Card & Krueger (1994) using difference-in-differences. Explores heterogeneous treatment effects by restaurant ownership structure.",
    tags: ["DiD", "Labor Economics", "statsmodels"],
    github: "https://github.com/Louisa328/DA-Midterm-Project-Minimum-Wages-and-Employment",
    large: false,
    bg: "#e9e4dc",
    Illustration: DiDSVG,
  },
  {
    number: "03",
    title: "Depression Risk Prediction",
    subtitle: "NHANES 2015–2023",
    description:
      "Predictive modeling of depression risk using 8 years of NHANES data. Compares Logistic Regression, Random Forest, and XGBoost with SHAP-based feature interpretation.",
    tags: ["XGBoost", "Random Forest", "SHAP"],
    github: undefined,
    large: false,
    bg: "#ede8e8",
    Illustration: ROCSvg,
  },
  {
    number: "04",
    title: "House Price Prediction",
    subtitle: "AHS 2023",
    description:
      "Hedonic pricing models using AHS 2023 microdata. Benchmarks OLS against Ridge, Lasso, and Random Forest with log-space modeling to handle skewed price distributions.",
    tags: ["OLS", "Lasso/Ridge", "Random Forest", "scikit-learn"],
    github: undefined,
    large: true,
    bg: "#e4e8e1",
    Illustration: ScatterSVG,
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ArrowUpRight() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Card                                                               */
/* ------------------------------------------------------------------ */

function ProjectCard({
  number, title, subtitle, description, tags, github, large, bg, Illustration,
}: (typeof projects)[0]) {
  return (
    <article
      className={`bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col group
        hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300
        ${large ? "lg:col-span-8" : "lg:col-span-4"}
        col-span-1`}
    >
      {/* Illustration */}
      <div
        className="h-52 flex-none flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: bg }}
      >
        <Illustration />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Number + link row */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] tracking-[0.14em] uppercase text-muted font-sans">
            {number}
          </span>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase text-stone hover:text-ink border border-zinc-200 hover:border-zinc-400 rounded-full px-3 py-1 transition-colors"
            >
              GitHub <ArrowUpRight />
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif font-light text-[1.1rem] leading-snug text-ink mb-1 group-hover:opacity-80 transition-opacity">
          {title}
        </h3>
        {subtitle && (
          <p className="text-[11px] tracking-[0.1em] uppercase text-muted mb-3">{subtitle}</p>
        )}

        {/* Description */}
        <p className="text-[13.5px] text-stone leading-relaxed mt-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-muted border border-zinc-200 rounded-full px-2.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  return (
    <section id="projects" className="bg-cream border-t border-zinc-200 py-24 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] tracking-[0.18em] uppercase text-muted mb-5">
            Selected Projects
          </p>
          <h2 className="font-serif font-light text-4xl sm:text-5xl text-ink leading-tight">
            Research &amp; Work
          </h2>
        </div>

        {/* Bento grid: 8+4 / 4+8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.number} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
