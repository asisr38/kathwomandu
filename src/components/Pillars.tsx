import { FadeUp } from "@/components/FadeUp";
import { pillars } from "@/lib/site-content";

export function Pillars() {
  return (
    <section className="pillars">
      <div className="container">
        <p className="label">What we hold</p>
        <h3 className="section-title">Four threads we are weaving from</h3>

        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <FadeUp as="article" className="pillar" key={pillar.title}>
              <div className="number">{pillar.number}</div>
              <h4>
                {pillar.title} <span className="nepali">{pillar.nepali}</span>
              </h4>
              <p>{pillar.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
