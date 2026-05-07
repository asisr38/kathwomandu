import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const hero = readFileSync(new URL("../src/components/Hero.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const emailCapture = readFileSync(
  new URL("../src/components/EmailCapture.tsx", import.meta.url),
  "utf8",
);
const siteContent = readFileSync(
  new URL("../src/lib/site-content.ts", import.meta.url),
  "utf8",
);

test("hero exposes only the current site sections as first-screen actions", () => {
  assert.match(hero, /aria-label="Primary"/);
  assert.match(hero, /Read the manifesto/);
  assert.match(hero, /or just leave your email/);
  assert.doesNotMatch(hero, /Contact/);
  assert.doesNotMatch(hero, /mailto:hello@kathwomandu\.com/);
});

test("footer navigation only links to current sections", () => {
  assert.match(siteContent, /label: "Manifesto", href: "#manifesto"/);
  assert.match(siteContent, /label: "Join", href: "#join"/);
  assert.doesNotMatch(siteContent, /label: "Contact"/);
  assert.doesNotMatch(siteContent, /mailto:hello@kathwomandu\.com/);
});

test("hero actions have distinct primary and secondary treatments", () => {
  assert.match(hero, /className="cta-primary"/);
  assert.match(hero, /className="arrow"/);
  assert.match(hero, /className="cta-secondary"/);
  assert.doesNotMatch(hero, /className="hero-action(?:\s|")/);
  assert.match(css, /\.cta-primary/);
  assert.match(css, /\.cta-secondary/);
  assert.doesNotMatch(css, /\.hero-action(?:\s|[{:,.#])/);
  assert.doesNotMatch(css, /border-top:\s*1px solid rgba\(216,\s*202,\s*172,\s*0\.72\)/);
  assert.doesNotMatch(css, /border-bottom:\s*1px solid rgba\(216,\s*202,\s*172,\s*0\.72\)/);
});

test("hero wordmark and tagline fit narrow mobile screens", () => {
  assert.match(hero, /<span>for woman<\/span>/);
  assert.match(hero, /<span>by woman<\/span>/);
  assert.match(hero, /aria-hidden="true"/);
  assert.match(css, /font-size:\s*clamp\(2\.6rem,\s*13vw,\s*9\.5rem\)/);
  assert.match(css, /@media \(max-width:\s*420px\)/);
  assert.match(css, /font-size:\s*2\.4rem/);
  assert.match(css, /flex-wrap:\s*wrap/);
});

test("join form has mobile-friendly controls and headline wrap", () => {
  assert.match(emailCapture, /<br className="mobile-only" \/>/);
  assert.match(css, /\.mobile-only\s*{\s*display:\s*none;\s*}/);
  assert.match(css, /form\.signup button[\s\S]*box-shadow:\s*0 2px 0 var\(--sindoor-deep,\s*#8a1422\)/);
  assert.match(css, /form\.signup button:active[\s\S]*transform:\s*translateY\(1px\)/);
  assert.match(css, /form\.signup input\[type="email"\][\s\S]*font-size:\s*1rem/);
  assert.match(css, /form\.signup button[\s\S]*width:\s*100%/);
});
