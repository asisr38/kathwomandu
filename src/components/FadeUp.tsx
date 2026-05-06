"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type FadeUpProps = {
  as?: "article" | "div";
  className?: string;
  children: ReactNode;
};

export function FadeUp({ as, className, children }: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const combinedClassName = `${className ?? ""} fade-up ${visible ? "in" : ""}`;

  function setNode(node: HTMLElement | null) {
    ref.current = node;
  }

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  if (as === "article") {
    return (
      <article ref={setNode} className={combinedClassName}>
        {children}
      </article>
    );
  }

  return (
    <div ref={setNode} className={combinedClassName}>
      {children}
    </div>
  );
}
