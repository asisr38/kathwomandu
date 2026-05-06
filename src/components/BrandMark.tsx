import { brand } from "@/lib/site-content";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span className={className}>
      {brand.prefix}
      <em>{brand.emphasis}</em>
      {brand.suffix}
    </span>
  );
}
