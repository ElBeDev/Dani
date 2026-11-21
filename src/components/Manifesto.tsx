"use client";

import { useEffect, useRef, useState } from "react";

/** Texto con **negritas**; las palabras se iluminan conforme haces scroll. */
export default function Manifesto({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  const words = text.split(/\s+/).map((raw) => {
    const bold = raw.includes("**");
    return { word: raw.replaceAll("**", ""), bold };
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.9 - r.top) / (r.height + vh * 0.35);
      setProgress(Math.min(1, Math.max(0, p)));
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

  const lit = Math.round(progress * words.length * 1.1);

  return (
    <p ref={ref} className="manifesto text-balance text-[1.65rem] leading-[1.22] tracking-[-0.02em] sm:text-4xl lg:text-[3.1rem]">
      {words.map((w, i) => (
        <span
          key={i}
          className={`transition-opacity duration-300 ${w.bold ? "font-700" : "font-300"} ${i < lit ? "opacity-100" : "opacity-25"}`}
        >
          {w.word}{" "}
        </span>
      ))}
    </p>
  );
}
