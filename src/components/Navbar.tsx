"use client";

import { useEffect, useState } from "react";
import { advisor, telLink, wa } from "@/lib/data";
import { Instagram, Phone, TikTok, WhatsApp } from "./icons";

const links = [
  { href: "#modelos", label: "Modelos" },
  { href: "#conoceme", label: "Conóceme" },
  { href: "#financiamiento", label: "Financiamiento" },
  { href: "#contacto", label: "Contacto" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-2xl tracking-[-0.02em] ${className}`}>
      <span className="font-700">Daniela</span> <span className="font-400">Herrera</span>
      <span className="dot-round" />
    </span>
  );
}

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto, la página de atrás no se mueve.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${solid && !open ? "bg-navy" : "bg-transparent"}`}>
        <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
          <a href="#inicio" onClick={() => setOpen(false)} className="text-white" aria-label="Daniela Herrera, inicio">
            <Logo />
          </a>

          <div className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-2 text-base font-500 text-white underline decoration-transparent decoration-2 underline-offset-8 transition-colors hover:decoration-gold"
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 rounded-full bg-gold px-5 text-base font-700 text-ink transition-colors hover:bg-gold-2 lg:inline-flex"
          >
            <WhatsApp className="h-4 w-4" /> Escríbeme
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full transition-colors lg:hidden ${open ? "bg-white text-ink" : "bg-white/15 text-white"}`}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </nav>
      </header>

      {/* Menú de celular a pantalla completa */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 flex flex-col bg-navy px-5 pb-6 pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex-1 space-y-2">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={`transition duration-300 ${open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}
            >
              <a
                href={l.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="block py-3 text-[2.5rem] font-300 leading-none tracking-[-0.025em] text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-2">
          <a href={telLink} tabIndex={open ? 0 : -1} className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/40 text-base font-600 text-white">
            <Phone className="h-4 w-4" /> Llamar
          </a>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold text-base font-700 text-ink"
          >
            <WhatsApp className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <div className="mt-6 flex items-center justify-between text-white">
          <span className="font-serif text-base text-white/80">{advisor.dealer}</span>
          <span className="flex gap-2">
            <a href={advisor.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" tabIndex={open ? 0 : -1} className="grid h-11 w-11 place-items-center">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={advisor.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" tabIndex={open ? 0 : -1} className="grid h-11 w-11 place-items-center">
              <TikTok className="h-6 w-6" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
