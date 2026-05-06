import { BrandMark } from "@/components/BrandMark";
import { footerLinks, siteMeta } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="row">
        <div>
          <BrandMark className="mark" />
          <p className="blurb">A home in the making — by woman, for woman.</p>
        </div>
        <nav className="links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="meta">
        <span>© 2026 Kathwomandu — {siteMeta.domain}</span>
        <span>Made with care · काठमाडौं</span>
      </div>
    </footer>
  );
}
