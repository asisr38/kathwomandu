export const siteMeta = {
  title: "Kathwomandu — Built to uplift.",
  description:
    "Kathwomandu — a place in the making. Built to uplift. Supporting Nepali women, in spirit and in practice.",
  domain: "kathwomandu.com",
  url: "https://kathwomandu.com",
};

export const brand = {
  prefix: "Kath",
  emphasis: "woman",
  suffix: "du",
};

export const pillars = [
  {
    number: "i.",
    title: "Roots",
    nepali: "jara",
    body: "To honor a heritage that is older than any border drawn on a map. The languages, the rituals, the recipes, the songs.",
  },
  {
    number: "ii.",
    title: "Hands",
    nepali: "haat",
    body: "To celebrate the work of Nepali women — the textile, the trade, the labor that has carried families and continents.",
  },
  {
    number: "iii.",
    title: "Voice",
    nepali: "awaaj",
    body: "To make a place where stories that were once whispered can be told aloud, in the languages they were lived in.",
  },
  {
    number: "iv.",
    title: "Together",
    nepali: "sangai",
    body: "To build a sisterhood that crosses villages, valleys, and oceans — and a future none of us has to walk alone.",
  },
] as const;

export const footerLinks = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Join", href: "#join" },
  { label: "Contact", href: "mailto:hello@kathwomandu.com" },
] as const;

export const visualQuote = {
  imageSrc: "/himalayaBG.png",
  imageAlt: "Sunrise over the Himalayan range in Nepal",
  quote: "\"The mountain is tall because so many shoulders have held it up.\"",
  source: "— A saying we are giving back its mothers",
};
