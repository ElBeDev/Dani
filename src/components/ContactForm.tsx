"use client";

import { useState, type FormEvent } from "react";
import { models, wa } from "@/lib/data";
import { WhatsApp } from "./icons";

const reasons = ["Comprar un auto", "Prueba de manejo", "Financiamiento", "Dar mi auto a cuenta", "Otra cosa"];

export default function ContactForm() {
  const [reason, setReason] = useState(reasons[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const model = String(f.get("model") || "");
    const msg = String(f.get("message") || "").trim();
    const lines = [`Hola Daniela 👋, soy ${name || "un cliente"}.`, `Me interesa: ${reason}${model ? ` (${model})` : ""}.`, msg].filter(Boolean);
    window.open(wa(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  const input = "w-full rounded-2xl bg-mist px-5 py-4 text-ink placeholder:text-ink/60 outline-none transition focus:bg-white focus:ring-2 focus:ring-navy";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <fieldset>
        <legend className="mb-3 text-base font-600">¿En qué te ayudo?</legend>
        <div className="flex flex-wrap gap-2">
          {reasons.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setReason(r)}
              aria-pressed={reason === r}
              className={`min-h-11 rounded-full px-4 text-base font-500 transition-colors ${reason === r ? "bg-navy text-white" : "bg-mist text-ink hover:bg-mist-2"}`}
            >
              {r}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-base font-600">Tu nombre</span>
          <input name="name" required autoComplete="name" placeholder="¿Cómo te llamas?" className={input} />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-600">Modelo de interés</span>
          <select name="model" defaultValue="" className={input}>
            <option value="">Aún no sé, recomiéndame</option>
            {models.map((m) => (
              <option key={m.name} value={m.name}>
                {m.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-base font-600">Mensaje (opcional)</span>
        <textarea name="message" rows={3} placeholder="Ej. Busco una SUV familiar y tengo un auto para dar a cuenta" className={`${input} resize-none`} />
      </label>

      <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-4 text-base font-700 text-white transition hover:bg-navy-2">
        <WhatsApp className="h-5 w-5 text-gold" /> Enviar por WhatsApp
      </button>
      <p className="text-sm text-ink/75">Se abre WhatsApp con tu mensaje listo. Esta página no guarda tus datos.</p>
    </form>
  );
}
