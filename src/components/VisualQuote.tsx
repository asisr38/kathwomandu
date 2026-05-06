import { visualQuote } from "@/lib/site-content";

export function VisualQuote() {
  return (
    <section className="visual">
      <div
        className="frame"
        role="img"
        aria-label={visualQuote.imageAlt}
        style={{ backgroundImage: `url(${visualQuote.imageSrc})` }}
      >
        <div className="quote">
          <p className="q">{visualQuote.quote}</p>
          <p className="src">{visualQuote.source}</p>
        </div>
      </div>
    </section>
  );
}
