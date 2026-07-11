import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { getServices, getSiteConfig } from "@/lib/content";

import "./globals.css";

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
    icon: "/img/logo.png",
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
      <body className="flex min-h-full flex-col bg-white">
        <Header nav={config.nav} cta={config.headerCta} solutions={services} />
        <main className="flex-1">{children}</main>
        <Footer config={config} />
      </body>
    </html>
  );
}
