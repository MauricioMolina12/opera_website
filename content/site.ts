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
    { label: "Quiénes somos", href: "/about-us" },
    { label: "Soluciones", href: "/solutions" },
  ],

  headerCta: {
    label: "Contacto",
    href: "/#contacto",
  },

  contact: {
    email: "multiserviciosoperasas@gmail.com",
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
        { label: "Sobre nosotros", href: "/about-us" },
        { label: "Nuestro equipo", href: "/about-us#equipo" },
        // { label: "Experiencia", href: "/#experiencia" },
        // { label: "Trabaja con nosotros", href: "/#contacto" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Aseo integral empresarial", href: "/solutions/aseo-integral" },
        { label: "Limpieza profesional de fachadas", href: "/solutions/limpieza-fachadas" },
        { label: "Tratamiento y restauración de pisos", href: "/solutions/tratamiento-pisos" },
        { label: "Mantenimiento de zonas verdes", href: "/solutions/jardineria" },
        { label: "Mantenimiento profesional de piscinas", href: "/solutions/limpieza-mantenimiento-piscinas" },
        { label: "Servicio de recepción", href: "/solutions/recepcionista" },
        { label: "Conserjería", href: "/solutions/conserjeria" },
        { label: "Salvavidas", href: "/solutions/salvavidas" },
        { label: "Aseo corporativo integral", href: "/solutions/aseo-corporativo-integral" },
      ],
    },
    {
      title: "Enlaces rápidos",
      links: [
        { label: "Inicio", href: "/" },
        { label: "Quiénes somos", href: "/about-us" },
        { label: "Soluciones", href: "/solutions" },
        // { label: "Experiencias", href: "/#experiencia" },
        // { label: "Blog", href: "/blog" },
        { label: "Contáctanos", href: "/#contacto" },
      ],
    },
  ],

  legalLinks: [
    // { label: "Política de cookies", href: "/legal/cookies-policy" },
    { label: "Términos de servicio", href: "/legal/terms-and-conditions" },
    { label: "Política de privacidad", href: "/legal/privacy-policy" },
  ],
};