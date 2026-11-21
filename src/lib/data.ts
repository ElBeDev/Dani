// Todos los datos editables del sitio viven aquí.

export const advisor = {
  name: "Daniela Herrera",
  firstName: "Daniela",
  role: "Asesora de Venta",
  dealer: "Chevrolet San Juan del Río",
  phoneDisplay: "414 229 0953",
  phoneE164: "+524142290953",
  whatsapp: "524142290953",
  address: {
    street: "Ing. Luis Romero Soto 14",
    area: "Centro",
    zip: "76800",
    city: "San Juan del Río",
    state: "Qro.",
    stateFull: "Querétaro",
  },
  instagram: "https://www.instagram.com/asesora_en_venta_chevrolet/",
  instagramHandle: "@asesora_en_venta_chevrolet",
  tiktok: "https://www.tiktok.com/@daniela.herrera8217",
  tiktokHandle: "@daniela.herrera8217",
  siteUrl: "https://danielaherrera-chevrolet.vercel.app",
};

export const fullAddress = `${advisor.address.street}, ${advisor.address.area}, ${advisor.address.zip} ${advisor.address.city}, ${advisor.address.state}`;

export const mapsQuery = encodeURIComponent(`Chevrolet San Juan del Río, ${fullAddress}`);
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
export const mapsEmbed = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

export const telLink = `tel:${advisor.phoneE164}`;

export function wa(message = `Hola ${advisor.firstName} 👋, vi tu página y me interesa un Chevrolet.`) {
  return `https://wa.me/${advisor.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Category = "Autos" | "SUVs" | "Pickups" | "Eléctricos";

export type Model = {
  name: string;
  category: Category;
  tagline: string;
  image?: string;
  badge?: string;
};

export const models: Model[] = [
  { name: "S10 Max 2027", category: "Pickups", tagline: "Pickup mediana lista para trabajar y para el fin de semana.", image: "/img/s10-showroom.webp", badge: "Nueva" },
  { name: "Silverado", category: "Pickups", tagline: "La pickup grande: potencia, espacio y presencia.", image: "/img/silverado-sunset.webp", badge: "Favorita" },
  { name: "Montana", category: "Pickups", tagline: "Pickup compacta, práctica para la ciudad." },
  { name: "Aveo", category: "Autos", tagline: "Sedán y hatchback económicos para tu día a día." },
  { name: "Onix", category: "Autos", tagline: "Turbo, conectado y eficiente." },
  { name: "Groove", category: "SUVs", tagline: "SUV compacta con mucho estilo por dentro y por fuera." },
  { name: "Tracker", category: "SUVs", tagline: "SUV urbana turbo con tecnología de sobra." },
  { name: "Captiva", category: "SUVs", tagline: "Hasta 7 pasajeros para toda la familia." },
  { name: "Equinox", category: "SUVs", tagline: "SUV mediana cómoda para carretera." },
  { name: "Tahoe", category: "SUVs", tagline: "SUV de lujo full-size, tamaño USA." },
  { name: "Suburban", category: "SUVs", tagline: "El espacio más grande de Chevrolet." },
  { name: "Spark EUV", category: "Eléctricos", tagline: "100% eléctrico, ideal para ciudad." },
  { name: "Equinox EV", category: "Eléctricos", tagline: "SUV eléctrica con gran autonomía." },
  { name: "Blazer EV", category: "Eléctricos", tagline: "Diseño deportivo y 100% eléctrica." },
];

export const steps = [
  { title: "Escríbeme", text: "Dime qué buscas y tu presupuesto. Te respondo por WhatsApp." },
  { title: "Prueba de manejo", text: "Agendamos el día y la hora que te queden en la agencia." },
  { title: "Tu plan a la medida", text: "Cotización, financiamiento y tu auto a cuenta si tienes uno." },
  { title: "¡Estrena!", text: "Te entrego tu Chevrolet y te explico todo antes de que te vayas." },
];

export const manifesto =
  "Soy tu **asesora**, tu **guía** y tu **aliada** para estrenar. Te escucho, te explico todo **claro** y busco el plan que de verdad te queda. Quiero que comprar tu auto se sienta tan bien como **estrenarlo**.";

export const favorites = [
  {
    word: "s10",
    name: "Chevrolet S10 Max 2027",
    kicker: "Pickup mediana, modelo nuevo",
    focus: "50% 72%",
    text: "Fuerte para el trabajo y cómoda para el fin de semana. La tengo en piso para que la conozcas y la manejes.",
    image: "/img/s10-showroom.webp",
    theme: "light" as const,
  },
  {
    word: "silverado",
    name: "Chevrolet Silverado",
    kicker: "Pickup grande",
    focus: "50% 62%",
    text: "Potencia, espacio y presencia. La pickup que todos voltean a ver, con versiones para trabajo y para lujo.",
    image: "/img/silverado-sunset.webp",
    theme: "dark" as const,
  },
];

export const faqs = [
  {
    q: "¿Dónde te encuentro?",
    a: `En la agencia Chevrolet San Juan del Río: ${fullAddress}. Escríbeme antes de ir y te espero con el auto listo.`,
  },
  {
    q: "¿Puedo hacer una prueba de manejo?",
    a: "¡Claro! Dime qué modelo te interesa y agendamos el día y la hora que te queden. Sin compromiso.",
  },
  {
    q: "¿Manejan financiamiento?",
    a: "Sí. Te ayudo a comparar las opciones de crédito y arrendamiento disponibles en la agencia según el modelo, tu enganche y el plazo que buscas.",
  },
  {
    q: "¿Qué necesito para comprar a crédito?",
    a: "Normalmente identificación oficial, comprobante de domicilio y comprobantes de ingresos. Te confirmo la lista exacta según el plan que elijas.",
  },
  {
    q: "¿Puedo dar mi auto a cuenta?",
    a: "Mándame marca, modelo, año y kilometraje de tu auto y te digo cómo podemos usarlo para tu Chevrolet nuevo.",
  },
  {
    q: "¿Tienen promociones?",
    a: "Cada mes hay bonos, tasas especiales y campañas como el Chevroletazo. Pregúntame cuáles aplican hoy para el modelo que te gusta.",
  },
];
