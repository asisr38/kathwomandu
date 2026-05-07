import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const layout = readFileSync(new URL("../src/app/layout.tsx", import.meta.url), "utf8");
const siteContent = readFileSync(
  new URL("../src/lib/site-content.ts", import.meta.url),
  "utf8",
);
const robotsPath = new URL("../src/app/robots.ts", import.meta.url);
const sitemapPath = new URL("../src/app/sitemap.ts", import.meta.url);

test("home page exposes canonical and indexable metadata", () => {
  assert.match(siteContent, /siteName:\s*"Kathwomandu"/);
  assert.match(layout, /alternates:\s*{/);
  assert.match(layout, /canonical:\s*siteMeta\.url/);
  assert.match(layout, /robots:\s*{/);
  assert.match(layout, /index:\s*true/);
  assert.match(layout, /follow:\s*true/);
});

test("home page includes website structured data for brand identity", () => {
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /"@type": "WebSite"/);
  assert.match(layout, /"name": siteMeta\.siteName/);
  assert.match(layout, /"url": siteMeta\.url/);
});

test("robots and sitemap routes expose the canonical home page", () => {
  assert.equal(existsSync(robotsPath), true);
  assert.equal(existsSync(sitemapPath), true);

  const robots = readFileSync(robotsPath, "utf8");
  const sitemap = readFileSync(sitemapPath, "utf8");

  assert.match(robots, /rules:\s*{/);
  assert.match(robots, /userAgent:\s*"\*"/);
  assert.match(robots, /allow:\s*"\/"/);
  assert.match(robots, /sitemap:\s*`\$\{siteMeta\.url\}\/sitemap\.xml`/);

  assert.match(sitemap, /url:\s*siteMeta\.url/);
  assert.match(sitemap, /changeFrequency:\s*"monthly"/);
  assert.match(sitemap, /priority:\s*1/);
});
