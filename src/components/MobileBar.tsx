"use client";

import { useEffect, useState } from "react";
import { telLink, wa } from "@/lib/data";
import { Phone, WhatsApp } from "./icons";

/** Barra fija de Llamar / WhatsApp en celular. Aparece al pasar el hero, que ya trae sus propios botones. */
export default function MobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-3 bottom-3 z-30 grid grid-cols-2 gap-1.5 rounded-full border border-white/25 bg-navy p-1.5 transition duration-300 lg:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <a href={telLink} className="flex min-h-12 items-center justify-center gap-2 rounded-full text-base font-600 text-white active:bg-white/10">
        <Phone className="h-4 w-4" /> Llamar
      </a>
      <a href={wa()} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold text-base font-700 text-ink">
        <WhatsApp className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
