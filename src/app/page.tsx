import Image from "next/image";
import Navbar, { Logo } from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Manifesto from "@/components/Manifesto";
import StepsAccordion from "@/components/StepsAccordion";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import { Arrow, Download, Instagram, Phone, Pin, TikTok, WhatsApp } from "@/components/icons";
import { advisor, faqs, favorites, fullAddress, manifesto, mapsEmbed, mapsLink, models, telLink, wa, type Category } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio" className="overflow-x-clip">
        <Hero />
        <ManifestoSection />
        <Favorites />
        <Band />
        <ModelsList />
        <Steps />
        <Finance />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}

/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section className="hero-bg relative isolate overflow-hidden">
      <div className="relative mx-auto max-w-[1500px] px-5 pt-24 sm:px-8 lg:h-[100svh] lg:max-h-[980px] lg:min-h-[740px] lg:pt-20">
        {/* Nombre gigante detrás */}
        <h1 className="reveal-now relative z-0 select-none text-center text-white">
          <span className="sr-only">
            {advisor.name}, {advisor.role} en {advisor.dealer}
          </span>
          <span aria-hidden className="giant block text-[25vw] lg:text-[clamp(10rem,21vw,21rem)]">
            daniela
            <span className="dot" />
          </span>
        </h1>

        {/* Foto recortada + semicírculo */}
        <div className="relative z-10 mx-auto -mt-[11vw] w-[82%] max-w-[26rem] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[min(40vw,68svh)] lg:max-w-[40rem] lg:-translate-x-1/2">
          <div className="absolute bottom-0 left-1/2 aspect-[2/1] w-[135%] -translate-x-1/2 rounded-t-full bg-gold-metal" />
          <Image
            src="/img/daniela-cutout.webp"
            alt={`${advisor.name}, ${advisor.role}`}
            width={533}
            height={564}
            priority
            sizes="(min-width:1024px) 40rem, 82vw"
            className="rise-photo fade-bottom relative h-auto w-full"
          />
        </div>

        {/* Textos laterales */}
        <div className="relative z-20 -mx-5 bg-navy px-5 pb-14 pt-2 sm:-mx-8 sm:px-8 lg:static lg:m-0 lg:bg-transparent lg:p-0">
          <p className="reveal-now text-[2.1rem] font-300 leading-[1.08] tracking-[-0.03em] text-white [animation-delay:200ms] lg:absolute lg:bottom-[24%] lg:left-8 lg:max-w-[22rem] lg:text-[2.9rem] xl:left-12">
            Tu próximo Chevrolet empieza con un hola.
          </p>
          <div className="reveal-now mt-6 [animation-delay:350ms] lg:absolute lg:bottom-[20%] lg:right-8 lg:mt-0 lg:max-w-[21rem] xl:right-12">
            <p className="font-serif text-[1.2rem] leading-relaxed text-white/90">
              Soy {advisor.name}, asesora de venta en {advisor.dealer}. Te ayudo a elegir, probar y estrenar tu Chevrolet, sin presión y con todo
              claro.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-metal inline-flex items-center gap-2 rounded-full px-5 py-3 text-[15px] font-700 text-ink shadow-lg transition hover:brightness-105"
              >
                <WhatsApp className="h-4 w-4" /> Escríbeme
              </a>
              <a href={telLink} className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-[15px] font-600 text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> {advisor.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  return (
    <section id="conoceme" className="relative bg-white">
      <div className="relative mx-auto w-full max-w-[1500px] lg:px-8">
        <div className="relative mx-auto overflow-hidden rounded-b-[50%_30%] bg-navy px-6 pb-28 pt-16 sm:rounded-b-[50%_40%] sm:px-16 sm:pb-36 lg:w-[86%] lg:rounded-b-[50%_50%] lg:px-28 lg:pb-48 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Manifesto text={manifesto} />
            <p className="mt-8 font-serif text-xl italic text-gold-2">— Te estoy esperando, Daniela</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Favorites() {
  return (
    <section id="modelos" className="bg-white px-3 pb-3 pt-24 sm:px-4 lg:pt-32">
      <Reveal className="mx-auto mb-14 max-w-2xl px-4 text-center">
        <h2 className="text-5xl font-300 tracking-[-0.04em] text-ink sm:text-6xl">
          Mis favoritas<span className="dot-round" />
        </h2>
        <p className="mt-4 font-serif text-xl leading-relaxed text-ink/65">
          Dos pickups que me encanta enseñar. Una para el trabajo de todos los días, otra para cuando quieres todo. Las dos te esperan en piso.
        </p>
      </Reveal>

      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        {favorites.map((f, i) => {
          const light = f.theme === "light";
          return (
            <Reveal key={f.word} delay={i * 120}>
              <article
                className={`relative flex h-full flex-col items-center overflow-hidden rounded-[2rem] px-6 pb-12 pt-12 text-center sm:px-12 ${
                  light ? "bg-gold-metal text-ink" : "bg-navy text-white"
                }`}
              >
                <div className="flex h-[24vw] items-end justify-center lg:h-[clamp(6.5rem,10vw,10rem)]">
                  <p
                    aria-hidden
                    className={`giant select-none text-white ${
                      f.word.length <= 4 ? "text-[36vw] lg:text-[clamp(8rem,15vw,15rem)]" : "text-[22vw] lg:text-[clamp(5rem,9.5vw,9.5rem)]"
                    }`}
                  >
                    {f.word}
                    <span className="dot-round" style={{ background: light ? "var(--navy)" : "var(--gold)" }} />
                  </p>
                </div>
                <div className="relative -mt-6 w-[62%] max-w-[18rem] lg:-mt-8">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
                    <Image src={f.image} alt={f.name} fill sizes="(min-width:1024px) 18rem, 62vw" className="object-cover" />
                  </div>
                </div>
                <p className={`mt-8 text-sm font-500 ${light ? "text-ink/70" : "text-white/60"}`}>{f.kicker}</p>
                <h3 className="mt-2 text-3xl font-500 tracking-[-0.02em] sm:text-4xl">{f.name}</h3>
                <p className={`mx-auto mt-3 max-w-md font-serif text-lg leading-relaxed ${light ? "text-ink/80" : "text-white/75"}`}>{f.text}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <a
                    href={wa(`Hola Daniela 👋, me interesa la ${f.name}. ¿Me das información y precio?`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full px-5 py-2.5 text-sm font-600 transition ${
                      light ? "bg-navy text-white hover:bg-navy-2" : "bg-gold-metal text-ink hover:brightness-105"
                    }`}
                  >
                    Pregúntame por ella
                  </a>
                  <a
                    href={wa(`Hola Daniela 👋, quiero agendar una prueba de manejo de la ${f.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rounded-full border px-5 py-2.5 text-sm font-600 transition ${
                      light ? "border-ink/80 hover:bg-ink/5" : "border-white/60 hover:bg-white/10"
                    }`}
                  >
                    Prueba de manejo
                  </a>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Band() {
  return (
    <section className="bg-white px-3 pb-24 pt-3 sm:px-4 lg:pb-32">
      <Reveal>
        <div className="grid overflow-hidden rounded-[2rem] bg-navy lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col justify-between gap-10 p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-600 uppercase tracking-[0.2em] text-gold">{advisor.dealer}</p>
            <p className="text-[2.6rem] font-300 leading-[1] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.6rem]">
              Todo Chevrolet. <span className="text-gold-2">Una sola persona</span> que te atiende de principio a fin.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-600 text-ink transition hover:bg-mist"
              >
                Agenda tu cita <Arrow className="h-4 w-4" />
              </a>
              <span className="inline-flex items-center gap-2 font-serif text-lg text-white/70">
                <Pin className="h-5 w-5 text-gold" /> Centro, San Juan del Río
              </span>
            </div>
          </div>
          <div className="relative min-h-[26rem]">
            <Image
              src="/img/agencia-fachada.webp"
              alt="Fachada de la agencia Chevrolet San Juan del Río"
              fill
              sizes="(min-width:1024px) 40vw, 100vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

const categoryOrder: Category[] = ["Pickups", "SUVs", "Autos", "Eléctricos"];
const categoryNote: Record<Category, string> = {
  Pickups: "Para trabajar y para la aventura",
  SUVs: "Espacio para toda la familia",
  Autos: "Ahorradores y conectados",
  Eléctricos: "Cero gasolina, cero emisiones",
};

function ModelsList() {
  return (
    <section className="bg-mist py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.25fr] lg:gap-20 xl:px-12">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-6xl font-300 tracking-[-0.045em] sm:text-7xl lg:text-8xl">
            Modelos<span className="dot-round" />
          </h2>
          <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-ink/75">
            Autos, SUVs, pickups y eléctricos. Toca cualquier modelo y te mando versiones, colores, disponibilidad y el precio del día por
            WhatsApp.
          </p>
          <a
            href={wa("Hola Daniela 👋, ¿me compartes el catálogo y precios de este mes?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-600 text-white transition hover:bg-navy-2"
          >
            Pídeme el catálogo <Arrow className="h-4 w-4" />
          </a>
        </Reveal>

        <div>
          <Reveal>
            <a
              href={wa("Hola Daniela 👋, ¿qué promociones del Chevroletazo hay este mes?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[1.75rem] bg-navy p-7 text-white sm:p-9"
            >
              <div className="flex items-center justify-between text-sm font-600 text-gold">
                <span>Este mes · Promociones</span>
                <span>Sujeto a vigencia</span>
              </div>
              <h3 className="mt-5 text-4xl font-500 tracking-[-0.03em] sm:text-5xl">Aprovecha el Chevroletazo</h3>
              <p className="mt-4 max-w-xl font-serif text-xl leading-relaxed text-white/90">
                “Bonos, tasas especiales y promociones que cambian cada mes. Pregúntame cuáles aplican hoy para el modelo que te gusta.” 👌
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-600 text-gold-2 transition-all group-hover:gap-3">
                Pregúntame por las promos <Arrow className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          <ul className="mt-4">
            {categoryOrder.map((cat, i) => (
              <Reveal key={cat} delay={i * 80}>
                <li className="grid gap-3 border-b border-ink/10 py-7 sm:grid-cols-[6.5rem_1fr]">
                  <span className="pt-1 text-sm font-700 text-gold-deep">{cat}</span>
                  <div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1">
                      {models
                        .filter((m) => m.category === cat)
                        .map((m) => (
                          <a
                            key={m.name}
                            href={wa(`Hola Daniela 👋, me interesa la Chevrolet ${m.name}. ¿Me das información y precio?`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[1.9rem] font-400 tracking-[-0.03em] text-ink transition hover:text-gold-deep"
                          >
                            {m.name}
                          </a>
                        ))}
                    </div>
                    <p className="mt-1 font-serif text-base text-ink/55">{categoryNote[cat]}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-12">
        <Reveal className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="text-6xl font-300 tracking-[-0.045em] sm:text-7xl">
            Así de fácil<span className="dot-round" />
          </h2>
          <p className="max-w-sm font-serif text-xl leading-relaxed text-white/70">De tu primer mensaje a las llaves en tu mano, en cuatro pasos.</p>
        </Reveal>
        <Reveal>
          <StepsAccordion />
        </Reveal>
      </div>
    </section>
  );
}

function Finance() {
  return (
    <section id="financiamiento" className="bg-mist py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 xl:px-12">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-6xl font-300 tracking-[-0.045em] sm:text-7xl">
            Calcula tu mensualidad<span className="dot-round" />
          </h2>
          <p className="max-w-lg font-serif text-xl leading-relaxed text-ink/75 lg:justify-self-end">
            Juega con el precio, el enganche y el plazo para darte una idea. Luego te armo la cotización real con las promociones vigentes. ¿Tienes
            auto? También lo podemos tomar a cuenta.
          </p>
        </Reveal>
        <Reveal>
          <Calculator />
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="text-sm font-700 uppercase tracking-[0.2em] text-gold">FAQ</p>
          <h2 className="mt-3 text-5xl font-300 leading-[1] tracking-[-0.045em] text-white sm:text-6xl">
            Preguntas, respondidas<span className="dot-round" />
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-white/65">Lo que más me preguntan antes de estrenar. ¿Tienes otra duda? Escríbeme.</p>
        </Reveal>
        <Reveal>
          <div className="border-t border-white/10">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-white/10">
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 text-xl font-400 tracking-[-0.01em] text-white sm:text-2xl">
                  {f.q}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/30 text-xl font-300 transition group-open:rotate-45 group-open:border-gold group-open:text-gold">
                    +
                  </span>
                </summary>
                <p className="-mt-1 max-w-2xl pb-7 pr-12 font-serif text-lg leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-charcoal px-3 pb-3 sm:px-4">
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[2rem] bg-white p-7 text-ink sm:p-12">
            <h2 className="text-5xl font-300 leading-[1] tracking-[-0.045em] sm:text-6xl">
              Hablemos<span className="dot-round" />
            </h2>
            <p className="mb-8 mt-4 max-w-md font-serif text-xl leading-relaxed text-ink/80">Cuéntame qué buscas y te respondo por WhatsApp. Yo, no un robot.</p>
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={120} className="h-full">
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-navy text-white">
            <div className="relative min-h-[18rem] flex-1">
              <iframe
                title="Mapa: Chevrolet San Juan del Río"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex flex-col gap-6 p-7 sm:p-10 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex gap-4">
                <Pin className="mt-1 h-6 w-6 shrink-0 text-gold" />
                <div>
                  <p className="text-2xl font-500 tracking-tight">{advisor.dealer}</p>
                  <p className="mt-1 font-serif text-lg text-white/70">{fullAddress}</p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-5 py-2.5 text-sm font-600 text-ink">
                  Cómo llegar
                </a>
                <a href="/daniela-herrera.vcf" download className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-600">
                  <Download className="h-4 w-4" /> Guardar contacto
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const nav = [
    { href: "#inicio", label: "Inicio" },
    { href: "#modelos", label: "Modelos" },
    { href: "#conoceme", label: "Conóceme" },
    { href: "#financiamiento", label: "Financiamiento" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <footer className="relative overflow-hidden bg-charcoal pt-20 text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 xl:px-12">
        <div>
          <Logo className="text-gold" />
          <p className="mt-4 max-w-xs font-serif text-base leading-relaxed text-white/60">
            {advisor.role} en {advisor.dealer}. Te ayudo a estrenar tu Chevrolet en San Juan del Río, Querétaro.
          </p>
        </div>
        <ul className="space-y-2 text-[15px]">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="text-white/85 hover:text-gold">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 text-[15px]">
          <li>
            <a href={advisor.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </li>
          <li>
            <a href={advisor.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
              <TikTok className="h-4 w-4" /> TikTok
            </a>
          </li>
          <li>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
              <WhatsApp className="h-4 w-4" /> WhatsApp
            </a>
          </li>
          <li>
            <a href={telLink} className="inline-flex items-center gap-2 text-white/85 hover:text-gold">
              <Phone className="h-4 w-4" /> {advisor.phoneDisplay}
            </a>
          </li>
        </ul>
        <p className="text-xs leading-relaxed text-white/45">
          © {new Date().getFullYear()} {advisor.name}. Sitio personal de asesora de ventas. Chevrolet y sus modelos son marcas registradas de General
          Motors. Precios, promociones y disponibilidad sujetos a cambio.
        </p>
      </div>

      <div className="relative mt-20 flex justify-center">
        <div className="absolute bottom-0 left-1/2 aspect-[2/1] w-[84vw] max-w-[66rem] -translate-x-1/2 rounded-t-full bg-navy" />
        <p
          aria-hidden
          className="relative z-10 select-none whitespace-nowrap pb-[0.32em] pt-[0.9em] text-center text-[17vw] font-300 leading-none tracking-[-0.055em] text-white xl:text-[15rem]"
        >
          te espero
          <span className="dot-round" />
        </p>
      </div>
      <div className="h-24 lg:hidden" />
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 rounded-full bg-navy/95 p-1.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl lg:hidden">
      <a href={telLink} className="flex items-center justify-center gap-2 rounded-full py-3 text-[15px] font-600 text-white">
        <Phone className="h-4 w-4" /> Llamar
      </a>
      <a href={wa()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gold-metal rounded-full py-3 text-[15px] font-700 text-ink">
        <WhatsApp className="h-4 w-4" /> WhatsApp
      </a>
    </div>
  );
}
