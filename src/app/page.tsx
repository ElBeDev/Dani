import Image from "next/image";
import Navbar, { Logo } from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Manifesto from "@/components/Manifesto";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import Cta from "@/components/Cta";
import MobileBar from "@/components/MobileBar";
import { Download, Instagram, Phone, Pin, TikTok, WhatsApp } from "@/components/icons";
import { advisor, faqs, favorites, fullAddress, manifesto, mapsEmbed, mapsLink, models, steps, telLink, wa, type Category } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio" className="overflow-x-clip">
        <Hero />
        <ManifestoSection />
        <Favorites />
        <AllModels />
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
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="relative mx-auto max-w-[1500px] px-5 pt-24 sm:px-8 lg:h-[100svh] lg:max-h-[980px] lg:min-h-[740px] lg:pt-20">
        {/* Nombre gigante detrás de la foto; cada letra entra por separado */}
        <h1 className="relative z-0 select-none text-center text-white">
          <span className="sr-only">
            {advisor.name}, {advisor.role} en {advisor.dealer}
          </span>
          <span aria-hidden className="giant block whitespace-nowrap text-[27vw] lg:text-[clamp(10rem,20.5vw,20.5rem)]">
            {"Daniela".split("").map((l, i) => (
              <span key={i} className="letter" style={{ animationDelay: `${i * 50}ms` }}>
                {l}
              </span>
            ))}
            <span className="letter dot-round" style={{ animationDelay: "400ms" }} />
          </span>
        </h1>

        {/* Foto recortada sobre el semicírculo dorado */}
        <div className="relative z-10 mx-auto -mt-[6vw] w-[82%] max-w-[26rem] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[min(40vw,68svh)] lg:max-w-[40rem] lg:-translate-x-1/2">
          <div aria-hidden className="absolute bottom-0 left-1/2 aspect-[2/1] w-[135%] -translate-x-1/2 rounded-t-full bg-gold lg:w-[125%]" />
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
        <div className="relative z-20 -mx-5 bg-navy px-5 pb-14 pt-5 sm:-mx-8 sm:px-8 lg:static lg:m-0 lg:bg-transparent lg:p-0">
          <p className="reveal-now text-[2.2rem] font-300 leading-[1.08] tracking-[-0.02em] text-white [animation-delay:250ms] lg:absolute lg:bottom-[19%] lg:left-8 lg:max-w-[21rem] lg:text-[2.9rem] xl:left-12">
            Tu próximo Chevrolet empieza con un <span className="text-gold-2">hola.</span>
          </p>
          <div className="reveal-now mt-5 [animation-delay:400ms] lg:absolute lg:bottom-[15%] lg:right-8 lg:mt-0 lg:max-w-[21rem] xl:right-12">
            <p className="font-serif text-xl leading-relaxed text-white">
              Soy {advisor.name}, asesora de venta en {advisor.dealer}. Te ayudo a elegir, probar y estrenar tu Chevrolet, sin presión y con todo
              claro.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Cta href={wa()} external icon={<WhatsApp className="h-5 w-5" />}>
                Escríbeme
              </Cta>
              <a
                href={telLink}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/50 px-5 text-base font-600 text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                <span className="min-[400px]:hidden">Llamar</span>
                <span className="hidden min-[400px]:inline">{advisor.phoneDisplay}</span>
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
        <div className="relative mx-auto rounded-b-[50%_20%] bg-navy px-6 pb-28 pt-14 sm:rounded-b-[50%_40%] sm:px-16 sm:pb-36 lg:w-[86%] lg:rounded-b-[50%_50%] lg:px-28 lg:pb-48 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Manifesto text={manifesto} />
            <p className="mt-8 font-serif text-2xl italic text-gold-2">Te estoy esperando, Daniela</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Favorites() {
  return (
    <section id="modelos" className="bg-white px-3 pb-3 pt-24 sm:px-4 lg:pt-36">
      <Reveal className="mx-auto mb-10 grid max-w-[1500px] gap-4 px-2 sm:px-4 lg:mb-14 lg:grid-cols-2 lg:items-end xl:px-8">
        <h2 className="display text-ink">Mis dos favoritas</h2>
        <p className="max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 lg:justify-self-end">
          Dos pickups que me encanta enseñar: una compacta para el día a día y una grande para cuando quieres todo. Las dos están en piso, listas para que las conozcas.
        </p>
      </Reveal>

      <div className="grid gap-3 sm:gap-4 xl:grid-cols-2">
        {favorites.map((f, i) => {
          const light = f.theme === "light";
          return (
            <Reveal key={f.name} delay={i * 100}>
              <article
                className={`grid h-full overflow-hidden rounded-3xl md:grid-cols-2 xl:grid-cols-1 xl:grid-rows-[auto_1fr] ${
                  light ? "bg-gold text-ink" : "bg-navy text-white"
                }`}
              >
                <div className="relative aspect-[6/5] md:aspect-auto md:min-h-[36rem] xl:aspect-[6/5] xl:min-h-0">
                  <Image
                    src={f.image}
                    alt={`${f.name} en el piso de la agencia`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: f.focus }}
                  />
                </div>
                <div className="flex flex-col p-7 sm:p-10">
                  <h3 className="text-4xl font-400 leading-[1.05] tracking-[-0.02em] sm:text-[2.75rem]">{f.name}</h3>
                  <p className="mt-2 text-lg font-600">{f.kicker}</p>
                  <p className={`mt-4 max-w-[36rem] font-serif text-lg leading-relaxed ${light ? "" : "text-white/85"}`}>{f.text}</p>
                  <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-base">
                    {f.specs.map(([label, value]) => (
                      <div key={label} className="contents">
                        <dt className="font-600">{label}</dt>
                        <dd className={light ? "" : "text-white/85"}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-auto flex flex-wrap gap-3 pt-8">
                    <Cta href={wa(`Hola Daniela 👋, me interesa la ${f.name}. ¿Me das información y precio?`)} external variant={light ? "navy" : "gold"}>
                      Pregúntame por ella
                    </Cta>
                    <a
                      href={wa(`Hola Daniela 👋, quiero agendar una prueba de manejo de la ${f.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex min-h-12 items-center rounded-full border px-5 text-base font-600 transition-colors ${
                        light ? "border-ink/70 hover:bg-ink/10" : "border-white/50 hover:bg-white/10"
                      }`}
                    >
                      Prueba de manejo
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* La agencia: misma tanda que las favoritas, por eso va pegada a ellas */}
      <Reveal className="mt-3 sm:mt-4">
        <div className="grid overflow-hidden rounded-3xl bg-navy lg:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col justify-between gap-12 p-8 sm:p-12 lg:p-16">
            <p className="text-[2.6rem] font-300 leading-[1.03] tracking-[-0.025em] text-white sm:text-6xl lg:text-[4.4rem]">
              Todo Chevrolet. <span className="text-gold-2">Una sola persona</span> que te atiende de principio a fin.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Cta href="#contacto" variant="white">
                Agenda tu cita
              </Cta>
              <span className="inline-flex items-center gap-2 font-serif text-lg text-white/85">
                <Pin className="h-5 w-5 text-gold" /> {advisor.dealer}, Centro
              </span>
            </div>
          </div>
          <div className="relative min-h-[22rem] lg:min-h-[32rem]">
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
  Pickups: "Para trabajar y para la aventura.",
  SUVs: "Espacio para toda la familia.",
  Autos: "Ahorradores y conectados.",
  Eléctricos: "Cero gasolina, cero emisiones.",
};

function AllModels() {
  return (
    <section className="bg-white px-5 pb-28 pt-28 text-ink sm:px-8 lg:pb-40 lg:pt-40 xl:px-12">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="grid gap-4 lg:grid-cols-2 lg:items-end">
          <h2 className="display">Todos los modelos</h2>
          <p className="max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 lg:justify-self-end">
            Toca el que te interese y te mando por WhatsApp sus versiones, colores, disponibilidad y el precio del día.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2 lg:mt-20 lg:gap-y-16">
          {categoryOrder.map((cat, i) => (
            <Reveal key={cat} delay={(i % 2) * 80}>
              <h3 className="text-3xl font-500 tracking-[-0.015em]">{cat}</h3>
              <p className="mt-1 font-serif text-lg text-ink/75">{categoryNote[cat]}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {models
                  .filter((m) => m.category === cat)
                  .map((m) => (
                    <li key={m.name}>
                      <a
                        href={wa(`Hola Daniela 👋, me interesa la Chevrolet ${m.name}. ¿Me das información y precio?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 items-center rounded-full bg-mist px-5 text-lg font-500 text-ink transition-colors hover:bg-navy hover:text-white lg:min-h-14 lg:px-6 lg:text-xl"
                      >
                        {m.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="bg-navy py-24 text-white lg:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-24 xl:px-12">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="display">Así de fácil</h2>
          <p className="mt-5 max-w-sm font-serif text-xl leading-relaxed text-white/85">De tu primer mensaje a las llaves en tu mano, en cuatro pasos.</p>
          <Cta href={wa()} external className="mt-8" icon={<WhatsApp className="h-5 w-5" />}>
            Empieza con un mensaje
          </Cta>
        </Reveal>

        <ol className="space-y-10 lg:space-y-14 lg:pt-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 60} className="grid gap-2 sm:grid-cols-2 sm:gap-10">
                <h3 className="text-3xl font-400 tracking-[-0.02em] sm:text-4xl">
                  <span className="text-gold-2">{i + 1}.</span> {s.title}
                </h3>
                <p className="font-serif text-xl leading-relaxed text-white/85">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Finance() {
  return (
    <section id="financiamiento" className="bg-mist px-3 pb-24 pt-24 text-ink sm:px-4 lg:pb-32 lg:pt-36">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-10 grid gap-4 px-2 sm:px-4 lg:mb-14 lg:grid-cols-2 lg:items-end xl:px-8">
          <h2 className="display">Calcula tu mensualidad</h2>
          <p className="max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 lg:justify-self-end">
            Mueve el precio, el enganche y el plazo para darte una idea. Después te armo la cotización real. Si tienes auto, también lo podemos
            tomar a cuenta.
          </p>
        </Reveal>
        <Reveal>
          <Calculator />
        </Reveal>

        {/* Promoción del mes: pegada a la calculadora porque cambia el número de arriba */}
        <Reveal className="mt-3 sm:mt-4">
          <div className="grid gap-8 rounded-3xl bg-gold p-8 sm:p-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <div>
              <h3 className="text-4xl font-400 leading-[1.05] tracking-[-0.02em] sm:text-5xl">Y este mes, el Chevroletazo</h3>
              <p className="mt-4 max-w-[36rem] font-serif text-xl leading-relaxed">
                Hay bonos y tasas especiales que cambian cada mes. Pregúntame cuáles aplican hoy para el modelo que te gusta.
              </p>
            </div>
            <div className="lg:justify-self-end lg:text-right">
              <Cta href={wa("Hola Daniela 👋, ¿qué promociones del Chevroletazo hay este mes?")} external variant="navy">
                Pregúntame por las promos
              </Cta>
              <p className="mt-3 text-sm">Sujeto a vigencia y disponibilidad.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <div className="bg-mist">
      <section className="rounded-t-[2.5rem] bg-charcoal py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-white">Preguntas, respondidas</h2>
            <p className="mt-5 max-w-sm font-serif text-xl leading-relaxed text-white/80">
              Lo que más me preguntan antes de estrenar. Si tienes otra duda, escríbeme.
            </p>
          </Reveal>
          <Reveal className="space-y-2">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white/[0.06] transition-colors open:bg-white/10">
                <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 px-6 py-4 text-xl font-500 text-white sm:text-[1.4rem]">
                  {f.q}
                  <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-2xl font-300 leading-none text-white transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[38rem] px-6 pb-6 font-serif text-lg leading-relaxed text-white/85">{f.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Contact() {
  return (
    <section id="contacto" className="bg-charcoal px-3 pb-3 sm:px-4">
      <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl bg-white p-7 text-ink sm:p-12">
            <h2 className="display">Hablemos</h2>
            <p className="mb-8 mt-4 max-w-md font-serif text-xl leading-relaxed text-ink/80">
              Cuéntame qué buscas y te respondo yo, personalmente, por WhatsApp.
            </p>
            <ContactForm />
          </div>
        </Reveal>
        <Reveal delay={100} className="h-full">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-navy text-white">
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
                  <h3 className="text-2xl font-500 tracking-[-0.01em]">{advisor.dealer}</h3>
                  <p className="mt-1 font-serif text-lg text-white/85">{fullAddress}</p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-base font-600 text-ink transition-colors hover:bg-mist"
                >
                  Cómo llegar
                </a>
                <a
                  href="/daniela-herrera.vcf"
                  download
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/50 px-5 text-base font-600 transition-colors hover:bg-white/10"
                >
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
  const link = "inline-flex min-h-9 items-center gap-2 text-white transition-colors hover:text-gold-2";
  return (
    <footer className="relative overflow-hidden bg-charcoal pt-20 text-white">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-x-8 gap-y-10 px-5 sm:px-8 lg:grid-cols-4 xl:px-12">
        <div className="col-span-2 lg:col-span-1">
          <Logo className="text-gold" />
          <p className="mt-4 max-w-xs font-serif text-lg leading-relaxed text-white/80">
            {advisor.role} en {advisor.dealer}. Te ayudo a estrenar tu Chevrolet en San Juan del Río, Querétaro.
          </p>
        </div>
        <ul className="text-base">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={link}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-base">
          <li>
            <a href={advisor.instagram} target="_blank" rel="noopener noreferrer" className={link}>
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </li>
          <li>
            <a href={advisor.tiktok} target="_blank" rel="noopener noreferrer" className={link}>
              <TikTok className="h-4 w-4" /> TikTok
            </a>
          </li>
          <li>
            <a href={wa()} target="_blank" rel="noopener noreferrer" className={link}>
              <WhatsApp className="h-4 w-4" /> WhatsApp
            </a>
          </li>
          <li>
            <a href={telLink} className={link}>
              <Phone className="h-4 w-4" /> {advisor.phoneDisplay}
            </a>
          </li>
        </ul>
        <p className="col-span-2 text-sm leading-relaxed text-white/70 lg:col-span-1">
          © {new Date().getFullYear()} {advisor.name}. Sitio personal de asesora de ventas. Chevrolet y sus modelos son marcas registradas de General
          Motors. Precios, promociones y disponibilidad sujetos a cambio.
        </p>
      </div>

      <div className="relative mt-20 flex justify-center">
        <div className="absolute bottom-0 left-1/2 aspect-[2/1] w-[84vw] max-w-[66rem] -translate-x-1/2 rounded-t-full bg-navy" />
        <p
          aria-hidden
          className="relative z-10 select-none whitespace-nowrap pb-[0.32em] pt-[0.9em] text-center text-[17vw] font-300 leading-none tracking-[-0.04em] text-white xl:text-[15rem]"
        >
          te espero
          <span className="dot-round" />
        </p>
      </div>
      <div className="h-24 lg:hidden" />
    </footer>
  );
}
