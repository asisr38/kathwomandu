import { EmailCapture } from "@/components/EmailCapture";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Pillars } from "@/components/Pillars";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisualQuote } from "@/components/VisualQuote";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <Pillars />
        <VisualQuote />
        <EmailCapture />
      </main>
      <SiteFooter />
    </>
  );
}
