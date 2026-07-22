
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getServices, getSiteConfig } from "@/lib/content";
import { SearchProvider } from "@/components/search/SearchContext";
import { SearchModal } from "@/components/search/SearchModal";

import "./globals.css";
import { WhatsAppBtn } from "@/components/ui/whatsAppBtn";


// Variable font exposed as a CSS variable consumed by `--font-sans` in globals.css.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://operasas.com"),
  title: {
    default: "Opera | Soluciones Integrales de Limpieza y Mantenimiento en Barranquilla",
    template: "%s | Opera",
  },
  description:
    "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla. Más de 5 años de experiencia.",
  keywords: [
    "limpieza empresarial Barranquilla",
    "mantenimiento de zonas verdes",
    "jardinería profesional",
    "limpieza de fachadas",
    "tratamiento de pisos",
    "mantenimiento de piscinas",
    "servicio de recepción",
    "conserjería",
    "aseo corporativo",
    "servicios de limpieza",
    "Opera",
    "multiservicios",
  ],
  authors: [{ name: "ASEO Y MULTISERVICIOS OPERA SAS" }],
  creator: "ASEO Y MULTISERVICIOS OPERA SAS",
  publisher: "ASEO Y MULTISERVICIOS OPERA SAS",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/img/favicon.ico", sizes: "any" },
      { url: "/img/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/img/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/img/logo.png", sizes: "180x180" },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Opera",
    title: "Opera | Soluciones Integrales de Limpieza y Mantenimiento en Barranquilla",
    description:
      "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla.",
    url: "https://operasas.com",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Opera - Soluciones Integrales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opera | Soluciones Integrales de Limpieza y Mantenimiento",
    description:
      "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla.",
    images: ["/img/logo.png"],
    creator: "@opera_sas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://operasas.com",
    languages: {
      "es-CO": "https://operasas.com",
    },
  },
  category: "business",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [config, services] = await Promise.all([
    getSiteConfig(),
    getServices(),
  ]);

  return (
    <html lang="es" className={`${sans.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://wa.me" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://operasas.com/#organization",
              name: "ASEO Y MULTISERVICIOS OPERA SAS",
              url: "https://operasas.com",
              logo: "https://operasas.com/img/logo.png",
              description:
                "Soluciones integrales de limpieza, jardinería y mantenimiento en Barranquilla, Colombia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barranquilla",
                addressRegion: "Atlántico",
                addressCountry: "CO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-300-6227196",
                contactType: "customer service",
                email: "multiserviciosoperasas@gmail.com",
                availableLanguage: ["Spanish"],
              },
              sameAs: [
                "https://www.linkedin.com",
                "https://www.instagram.com",
                "https://www.facebook.com",
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white relative">
        <SearchProvider services={services}>
          <Header nav={config.nav} cta={config.headerCta} solutions={services} />
          <SearchModal />
          <main className="flex-1">{children}</main>
        </SearchProvider>
        <Footer config={config} />
        <WhatsAppBtn></WhatsAppBtn>
      </body>
    </html>
  );
}
