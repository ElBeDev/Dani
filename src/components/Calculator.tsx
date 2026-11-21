"use client";

import { useMemo, useState } from "react";
import { wa } from "@/lib/data";
import { WhatsApp } from "./icons";

const mxn = new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
const terms = [12, 24, 36, 48, 60, 72];

export default function Calculator() {
  const [price, setPrice] = useState(450000);
  const [downPct, setDownPct] = useState(20);
  const [months, setMonths] = useState(48);
  const [rate, setRate] = useState(14.9);

  const { down, financed, monthly } = useMemo(() => {
    const down = Math.round((price * downPct) / 100);
    const financed = Math.max(price - down, 0);
    const r = rate / 100 / 12;
    const monthly = r === 0 ? financed / months : (financed * r) / (1 - Math.pow(1 + r, -months));
    return { down, financed, monthly: Number.isFinite(monthly) ? monthly : 0 };
  }, [price, downPct, months, rate]);

  const message = `Hola Daniela 👋, usé la calculadora de tu página: auto de ${mxn.format(price)}, enganche ${downPct}% (${mxn.format(
    down,
  )}) a ${months} meses. ¿Me haces una cotización real?`;

  return (
    <div className="grid overflow-hidden rounded-3xl bg-white text-ink lg:grid-cols-[1.25fr_1fr]">
      <div className="space-y-9 p-7 sm:p-10">
        <Field label="Precio del auto" value={mxn.format(price)}>
          <input type="range" min={250000} max={2500000} step={5000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full" aria-label="Precio del auto" />
        </Field>
        <Field label="Enganche" value={`${downPct}% (${mxn.format(down)})`}>
          <input type="range" min={10} max={70} step={5} value={downPct} onChange={(e) => setDownPct(+e.target.value)} className="w-full" aria-label="Porcentaje de enganche" />
        </Field>
        <fieldset>
          <legend className="mb-3 text-base font-600">Plazo en meses</legend>
          <div className="grid grid-cols-6 gap-2">
            {terms.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setMonths(t)}
                aria-pressed={months === t}
                className={`min-h-11 rounded-full text-base font-600 transition-colors ${months === t ? "bg-navy text-white" : "bg-mist text-ink hover:bg-mist-2"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="flex items-center justify-between gap-4">
          <span className="text-base font-600">Tasa anual estimada (%)</span>
          <input
            type="number"
            min={0}
            max={40}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Math.max(0, +e.target.value || 0))}
            className="min-h-11 w-28 rounded-full bg-mist px-4 text-right text-lg font-600"
          />
        </label>
      </div>

      <div className="flex flex-col justify-between bg-navy p-7 text-white sm:p-10">
        <div>
          <p className="text-base font-600">Tu mensualidad estimada</p>
          <p className="mt-2 text-6xl font-300 tracking-[-0.03em] sm:text-7xl" aria-live="polite">
            {mxn.format(monthly)}
          </p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-white/85">
            Con {mxn.format(down)} de enganche, financias {mxn.format(financed)} a {months} meses.
          </p>
        </div>
        <div className="mt-10">
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-gold px-6 text-base font-700 text-ink transition-colors hover:bg-gold-2"
          >
            <WhatsApp className="h-5 w-5" /> Quiero mi cotización real
          </a>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Es una estimación, no una cotización ni una oferta de crédito. No incluye seguro, comisiones ni IVA de intereses. El plan real depende
            de la financiera y de las promociones vigentes.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className="text-base font-600">{label}</span>
        <span className="text-2xl font-500 tracking-[-0.01em]">{value}</span>
      </div>
      {children}
    </div>
  );
}
