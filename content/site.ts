import type { SiteConfig } from "@/types/content";

/**
 * Site-wide configuration: branding, navigation, contact details, footer.
 *
 * This is local editorial data. When the Sanity CMS is connected, a
 * "Site Settings" singleton document will provide the same shape and this file
 * will be replaced by a fetch inside `lib/content.ts` — no UI changes needed.
 */
export const siteConfig: SiteConfig = {
  name: "OPERA",
  tagline: "Calidad y cumplimiento en cada servicio",

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Soluciones", href: "/soluciones" },
  ],

  headerCta: {
    label: "Contacto",
    href: "/#contacto",
  },

  contact: {
    email: "multiserviciosopera@gmail.com",
    phone: "+57 300 6227196",
    location: "Barranquilla, Atlántico.",
    whatsappUrl: "https://wa.me/573008236761",
  },

  socials: [
    { platform: "linkedin", href: "https://www.linkedin.com" },
    { platform: "instagram", href: "https://www.instagram.com" },
    { platform: "facebook", href: "https://www.facebook.com" },
  ],

  footerColumns: [
    {
      title: "Empresa",
      links: [
        { label: "Sobre nosotros", href: "/quienes-somos" },
        { label: "Nuestro equipo", href: "/quienes-somos#equipo" },
        { label: "Experiencia", href: "/#experiencia" },
        { label: "Trabaja con nosotros", href: "/#contacto" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Obras civiles", href: "/soluciones/obras-civiles" },
        { label: "Aseo íntegral", href: "/soluciones/aseo-integral" },
        { label: "Limpieza de fachadas", href: "/soluciones/limpieza-fachadas" },
        { label: "Tratamiento de pisos", href: "/soluciones/tratamiento-pisos" },
        { label: "Jardinería", href: "/soluciones/jardineria" },
      ],
    },
    {
      title: "Enlaces rápidos",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Quiénes somos", href: "/quienes-somos" },
        { label: "Soluciones", href: "/#soluciones" },
        { label: "Experiencias", href: "/#experiencia" },
        { label: "Blog", href: "/blog" },
        { label: "Contáctanos", href: "/#contacto" },
      ],
    },
  ],

  legalLinks: [
    { label: "Política de cookies", href: "/legal/cookies" },
    { label: "Términos de servicio", href: "/legal/terminos" },
    { label: "Política de privacidad", href: "/legal/privacidad" },
  ],
};
