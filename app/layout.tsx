
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getServices, getSiteConfig } from "@/lib/content";


import "./globals.css";
import { WhatsAppBtn } from "@/components/ui/whatsAppBtn";


// Variable font exposed as a CSS variable consumed by `--font-sans` in globals.css.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans-app",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://opera.example.com"),
  title: {
    default: "Opera",
    template: "%s | Opera",
  },
  
  description:
    "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla.",
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
  },
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
      <body className="flex min-h-full flex-col bg-white relative">
        <Header nav={config.nav} cta={config.headerCta} solutions={services} />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
        <WhatsAppBtn></WhatsAppBtn>
      </body>
    </html>
  );
}
