export function Hero() {
  return (
    <section className="hero">
      <span className="eyebrow">A new home for Nepali women</span>

      <h1 className="wordmark fade-up in">
        <span className="kath">Kath</span>
        <span className="wo">woman</span>
        <span className="mandu">du</span>
      </h1>

      <p className="tagline">Built to uplift</p>
      <p className="tagline-sub">
        for woman <span className="dot" /> by woman <span className="dot" /> to
        woman
      </p>

      <div className="hero-actions">
        <a className="scroll-cue" href="#manifesto">
          Read the manifesto
        </a>
        <span className="hero-actions-divider">·</span>
        <a className="scroll-cue alt" href="#join">
          Or just leave your email
        </a>
      </div>

      <svg
        className="mountains"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,100 L0,70 L120,30 L210,55 L320,15 L430,50 L540,20 L660,55 L780,25 L880,55 L990,18 L1100,48 L1200,25 L1200,100 Z"
          fill="#1f1612"
        />
      </svg>
    </section>
  );
}
