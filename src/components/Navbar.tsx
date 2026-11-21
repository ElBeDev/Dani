"use client";

import { useEffect, useState } from "react";
import { wa } from "@/lib/data";
import { WhatsApp } from "./icons";

const links = [
  { href: "#modelos", label: "Modelos" },
  { href: "#conoceme", label: "Conóceme" },
  { href: "#financiamiento", label: "Financiamiento" },
  { href: "#contacto", label: "Contacto" },
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-2xl tracking-[-0.03em] ${className}`}>
      <span className="font-700">daniela</span>
      <span className="font-400">herrera</span>
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open ? "bg-navy/90 shadow-[0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
        <a href="#inicio" onClick={() => setOpen(false)} className="text-white" aria-label="Daniela Herrera, inicio">
          <Logo />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-500 text-white/90 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={wa()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gold-metal hidden items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-700 text-ink shadow-lg transition hover:brightness-105 lg:inline-flex"
        >
          <WhatsApp className="h-4 w-4" /> Escríbeme
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="px-5 pb-8 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-4 text-3xl font-300 tracking-tight text-white"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
