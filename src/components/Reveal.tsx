"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Para contenido arriba del pliegue: anima con CSS al cargar, sin esperar JS. */
  instant?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || instant) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [instant]);

  if (instant) {
    return (
      <div className={`reveal-now ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
