import Image from "next/image";
import { visualQuote } from "@/lib/site-content";

export function VisualQuote() {
  return (
    <section className="visual">
      <div className="frame">
        <Image
          src={visualQuote.imageSrc}
          alt={visualQuote.imageAlt}
          fill
          sizes="100vw"
          className="visual-image"
        />
        <div className="quote">
          <p className="q">{visualQuote.quote}</p>
          <p className="src">{visualQuote.source}</p>
        </div>
      </div>
    </section>
  );
}
