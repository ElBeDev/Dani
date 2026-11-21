import type { Metadata, Viewport } from "next";
import { Figtree, Newsreader } from "next/font/google";
import { advisor, fullAddress } from "@/lib/data";
import "./globals.css";

const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });
const newsreader = Newsreader({ variable: "--font-newsreader", subsets: ["latin"], style: ["normal", "italic"] });

const title = `${advisor.name} | Asesora Chevrolet San Juan del Río`;
const description =
  "Tu asesora Chevrolet de confianza en San Juan del Río, Querétaro. Autos, SUVs y pickups nuevas, prueba de manejo, financiamiento y tu auto a cuenta. Escríbeme por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(advisor.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "es_MX",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: advisor.name }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#0b2545" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: advisor.name,
  jobTitle: advisor.role,
  telephone: advisor.phoneE164,
  sameAs: [advisor.instagram, advisor.tiktok],
  worksFor: {
    "@type": "AutoDealer",
    name: advisor.dealer,
    brand: "Chevrolet",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${advisor.address.street}, ${advisor.address.area}`,
      postalCode: advisor.address.zip,
      addressLocality: advisor.address.city,
      addressRegion: advisor.address.stateFull,
      addressCountry: "MX",
    },
  },
  description: `${advisor.role} en ${advisor.dealer}. ${fullAddress}`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${figtree.variable} ${newsreader.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
