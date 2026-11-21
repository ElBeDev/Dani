"use client";

import { useState } from "react";
import { steps, wa } from "@/lib/data";
import { Arrow, WhatsApp } from "./icons";

export default function StepsAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 md:h-[30rem] md:flex-row">
      {steps.map((s, i) => {
        const on = i === active;
        return (
          <div
            key={s.title}
            onMouseEnter={() => setActive(i)}
            className={`relative overflow-hidden rounded-[1.75rem] transition-[flex-grow,background-color] duration-500 ease-out md:min-w-[5.5rem] ${
              on ? "bg-gold-metal md:flex-[6]" : "bg-navy-2 md:flex-[1] hover:bg-[#1b4278]"
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-expanded={on}
              className={`flex w-full items-center gap-4 px-6 py-5 text-left md:absolute md:inset-0 md:flex-col md:justify-between md:py-7 ${
                on ? "pointer-events-none opacity-0 max-md:hidden" : "text-white"
              }`}
            >
              <span className="text-sm font-700 text-gold">0{i + 1}</span>
              <span className="text-xl font-600 md:vertical-label md:text-2xl">{s.title}</span>
            </button>

            <div
              className={`flex h-full flex-col justify-between p-7 text-ink transition-opacity duration-500 sm:p-10 ${
                on ? "opacity-100 delay-200" : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-700 uppercase tracking-[0.2em] text-ink/70">Paso 0{i + 1}</span>
                <span className="giant text-7xl text-ink sm:text-8xl">
                  {i + 1}
                  <span className="dot-round" style={{ background: "var(--navy)" }} />
                </span>
              </div>
              <div className="mt-10">
                <h3 className="text-4xl font-600 tracking-tight sm:text-5xl">{s.title}</h3>
                <p className="mt-3 max-w-md font-serif text-xl leading-relaxed text-ink/80">{s.text}</p>
                {i === 0 ? (
                  <a
                    href={wa()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-600 text-white"
                  >
                    <WhatsApp className="h-4 w-4 text-gold" /> Escríbeme ahora
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setActive((i + 1) % steps.length)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-600 text-ink/80 hover:text-ink"
                  >
                    {i === steps.length - 1 ? "Volver al inicio" : "Siguiente paso"} <Arrow className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
