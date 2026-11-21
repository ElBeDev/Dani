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
};

export const models: Model[] = [
  { name: "Montana", category: "Pickups" },
  { name: "S10 Max 2027", category: "Pickups" },
  { name: "Silverado", category: "Pickups" },
  { name: "Cheyenne", category: "Pickups" },
  { name: "Aveo", category: "Autos" },
  { name: "Onix", category: "Autos" },
  { name: "Groove", category: "SUVs" },
  { name: "Tracker", category: "SUVs" },
  { name: "Captiva", category: "SUVs" },
  { name: "Equinox", category: "SUVs" },
  { name: "Tahoe", category: "SUVs" },
  { name: "Suburban", category: "SUVs" },
  { name: "Spark EUV", category: "Eléctricos" },
  { name: "Equinox EV", category: "Eléctricos" },
  { name: "Blazer EV", category: "Eléctricos" },
];

export const steps = [
  { title: "Escríbeme", text: "Dime qué buscas y tu presupuesto. Te respondo por WhatsApp." },
  { title: "Prueba de manejo", text: "Agendamos el día y la hora que te queden en la agencia." },
  { title: "Tu plan a la medida", text: "Cotización, financiamiento y tu auto a cuenta si tienes uno." },
  { title: "¡Estrena!", text: "Te entrego tu Chevrolet y te explico todo antes de que te vayas." },
];

export const manifesto =
  "Soy tu **asesora**, tu **guía** y tu **aliada** para estrenar. Te escucho, te explico todo **claro** y busco el plan que de verdad te queda. Quiero que comprar tu auto se sienta tan bien como **estrenarlo**.";

// Las dos pickups destacadas. Las fotos son de las unidades en piso en la agencia.
// Los datos técnicos los dio Daniela; conviene revisarlos contra la ficha oficial cuando cambie el año modelo.
export const favorites = [
  {
    name: "Chevrolet Montana 2026",
    kicker: "Versión LT",
    text: "Pickup compacta, fácil de manejar en ciudad y lista para cargar. Trae seis bolsas de aire y Android Auto y Apple CarPlay inalámbricos. Si quieres más equipo, también está la versión RS.",
    image: "/img/montana-lt.webp",
    focus: "50% 100%",
    theme: "light" as const,
    specs: [
      ["Motor", "1.2 L turbo de 3 cilindros, 130 HP y 140 lb-pie"],
      ["Transmisión", "Automática de 6 velocidades"],
      ["Tracción", "Delantera"],
      ["Caja", "Multi-Flex de 874 litros"],
      ["Carga", "Hasta 600 kg"],
      ["Arrastre", "Hasta 400 kg"],
      ["Pantalla", "Táctil de 11 pulgadas"],
    ],
  },
  {
    name: "Chevrolet Cheyenne High Country",
    kicker: "Pickup grande, V8 y 4x4",
    text: "La Cheyenne con el nivel de equipo High Country: asientos en piel con el logo bordado, volante con calefacción y estribos retráctiles cromados.",
    image: "/img/cheyenne-high-country.webp",
    focus: "50% 80%",
    theme: "dark" as const,
    specs: [
      ["Motor", "V8 Ecotec de 6.2 L, 425 HP y 460 lb-pie"],
      ["Transmisión", "Automática de 10 velocidades con palanca electrónica"],
      ["Tracción", "4x4"],
      ["Arrastre", "Hasta 4,218 kg"],
      ["Carga", "Hasta 616 kg"],
      ["Tanque", "91 litros"],
    ],
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
