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
    <div className="grid overflow-hidden rounded-[2rem] bg-white text-ink shadow-[0_30px_80px_-40px_rgba(28,19,40,0.45)] lg:grid-cols-[1.25fr_1fr]">
      <div className="space-y-8 p-7 sm:p-10">
        <Field label="Precio del auto" value={mxn.format(price)}>
          <input type="range" min={250000} max={2500000} step={5000} value={price} onChange={(e) => setPrice(+e.target.value)} className="w-full" aria-label="Precio del auto" />
        </Field>
        <Field label="Enganche" value={`${downPct}% · ${mxn.format(down)}`}>
          <input type="range" min={10} max={70} step={5} value={downPct} onChange={(e) => setDownPct(+e.target.value)} className="w-full" aria-label="Porcentaje de enganche" />
        </Field>
        <div>
          <p className="mb-3 text-sm font-600 text-ink/60">Plazo en meses</p>
          <div className="grid grid-cols-6 gap-2">
            {terms.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setMonths(t)}
                aria-pressed={months === t}
                className={`rounded-full py-2.5 text-base font-600 transition ${months === t ? "bg-navy text-white" : "bg-mist text-ink hover:bg-mist-2"}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
        <label className="flex items-center justify-between gap-4">
          <span className="text-sm font-600 text-ink/60">Tasa anual estimada (%)</span>
          <input
            type="number"
            min={0}
            max={40}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Math.max(0, +e.target.value || 0))}
            className="w-28 rounded-full bg-mist px-4 py-2 text-right text-lg font-600 outline-none focus:ring-2 focus:ring-navy"
          />
        </label>
      </div>

      <div className="relative flex flex-col justify-between overflow-hidden bg-navy p-7 text-white sm:p-10">
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gold opacity-20 blur-3xl" />
        <div className="relative">
          <p className="text-sm font-600 text-white/70">Mensualidad estimada</p>
          <p className="giant mt-3 text-6xl text-white sm:text-7xl">
            {mxn.format(monthly)}
            <span className="dot-round" />
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <Row k="Enganche" v={mxn.format(down)} />
            <Row k="Monto a financiar" v={mxn.format(financed)} />
            <Row k="Plazo" v={`${months} meses`} />
          </dl>
        </div>
        <div className="relative mt-10">
          <a
            href={wa(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gold-metal rounded-full px-6 py-4 text-base font-700 text-ink transition hover:brightness-105"
          >
            <WhatsApp className="h-5 w-5" /> Quiero mi cotización real
          </a>
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            Estimación informativa, no es cotización ni oferta de crédito. No incluye seguro, comisiones ni IVA de intereses. El plan real depende
            de la aprobación de la financiera y de las promociones vigentes.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4">
        <span className="text-sm font-600 text-ink/60">{label}</span>
        <span className="text-2xl font-600 tracking-tight">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 pb-3">
      <dt className="text-white/65">{k}</dt>
      <dd className="font-600">{v}</dd>
    </div>
  );
}
