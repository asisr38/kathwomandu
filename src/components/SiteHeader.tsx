import { BrandMark } from "@/components/BrandMark";

export function SiteHeader() {
  return (
    <header className="top">
      <BrandMark className="mark" />
      <div className="pulse">In the making</div>
    </header>
  );
}
