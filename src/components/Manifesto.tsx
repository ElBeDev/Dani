"use client";

import { useEffect, useRef, useState } from "react";

/** Texto con **negritas**. Con JavaScript, las palabras se encienden conforme haces scroll; sin él, se lee completo. */
export default function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState<number | null>(null);

  const words = text.split(/\s+/).map((raw) => ({ word: raw.replaceAll("**", ""), bold: raw.includes("**") }));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setProgress(Math.min(1, Math.max(0, (vh * 0.9 - r.top) / (r.height + vh * 0.35))));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const lit = progress === null ? words.length : Math.round(progress * words.length * 1.1);

  return (
    <p ref={ref} className="manifesto text-[1.7rem] leading-[1.25] tracking-[-0.015em] sm:text-4xl lg:text-[3rem]">
      {words.map((w, i) => (
        <span key={i} className={`transition-opacity duration-300 ${w.bold ? "font-700" : "font-300"} ${i < lit ? "opacity-100" : "opacity-30"}`}>
          {w.word}{" "}
        </span>
      ))}
    </p>
  );
}
