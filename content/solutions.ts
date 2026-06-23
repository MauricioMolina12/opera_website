import type { SolutionsPageContent } from "@/types/content";

/**
 * "Soluciones" page editorial content.
 *
 * ── Images are TEMPORARY placeholders ──────────────────────────────────────
 * Photo `src` values point to Unsplash (whitelisted in `next.config.ts`) purely
 * so the layout renders during development. Replace each `src` with the final
 * brand asset (or a Sanity image URL); `alt` and everything else can stay.
 * ───────────────────────────────────────────────────────────────────────────
 */

const UNSPLASH = "https://images.unsplash.com";
/** Build a sized, optimized Unsplash placeholder URL. */
const ph = (id: string, w = 1200) =>
  `${UNSPLASH}/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const solutionsContent: SolutionsPageContent = {
  hero: {
    title: "Soluciones completas para espacios que inspiran y funcionan",
    subtitle:
      "Integramos servicios diseñados para optimizar espacios, mejorar operaciones y garantizar entornos funcionales, organizados y confiables.",
    cta: { label: "Solicitar una cotización", href: "/#contacto" },
    image: {
      src: "/img/banner_solutions.png",
      alt: "Collage de espacios cuidados por Opera: jardín, oficina, mantenimiento y lobby",
    },
  },

  highlights: [
    {
      eyebrow: "Obras civiles",
      title: "Adecuaciones, mantenimiento y obras con calidad profesional.",
      benefits: [
        "Soluciones constructivas que elevan el valor de tus espacios",
        "Intervenciones rápidas, eficientes y con mínima afectación operativa",
        "Infraestructura más segura, funcional y duradera",
        "Acompañamiento experto desde la planificación hasta la entrega final",
      ],
      image: {
        src: "/img/services/civil_works.png",
        alt: "Jardín cuidado profesionalmente",
      },
    },
    {
      eyebrow: "Superficies",
      title: "Pisos con acabado impecable y mayor durabilidad",
      benefits: [
        "Acabados de alto nivel con apariencia impecable y uniforme",
        "Mayor resistencia al desgaste, impacto y tránsito constante",
        "Materiales y técnicas que prolongan la vida útil del piso",
        "Superficies fáciles de limpiar y mantener en el tiempo",
      ],
      image: {
        src: "/img/services/floor_treatment.jpg",
        alt: "Operario tratando un piso pulido",
      },
    },
    {
      eyebrow: "Aseo integral y cafetería",
      title:
        "Espacios impecables y servicios de cafetería que mejoran la experiencia diaria",
      benefits: [
        "Ambientes siempre limpios, organizados y listos para operar",
        "Protocolos de limpieza profunda que garantizan higiene y bienestar",
        "Servicio de cafetería eficiente que mejora la experiencia del personal y visitantes",
        "Atención constante que transmite orden, cuidado y profesionalismo",
      ],
      image: {
        src: "/img/services/restroom.png",
        alt: "Servicio de aseo integral y cafetería en oficina moderna",
      },
    },
    {
      eyebrow: "Jardinería",
      title: "Zonas verdes saludables y siempre bien cuidadas",
      benefits: [
        "Espacios verdes siempre limpios, ordenados y visualmente atractivos",
        "Mantenimiento constante que garantiza plantas sanas y vigorosas",
        "Optimización del riego y nutrición para un crecimiento sostenible",
        "Entornos naturales que mejoran la experiencia de usuarios y visitantes",
      ],
      image: {
        src: "/img/services/gardening.jpg",
        alt: "Jardín cuidado profesionalmente",
      },
    },
  ],

  sectors: {
    eyebrow: "Sectores en los que trabajamos",
    title: "Sectores en los que trabajamos",
    items: [
      {
        title: "Corporativo",
        description: "Espacios corporativos y oficinas",
        image: {
          src: "/img/sectors/corporate.png",
          alt: "Oficina corporativa",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        title: "Residencial",
        description: "Conjuntos residenciales y propiedades privadas",
        image: {
          src: "/img/sectors/residential.png",
          alt: "Conjunto residencial",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        title: "Salud",
        description: "Clínicas, hospitales y centros médicos",
        image: { src: "/img/sectors/health.png", alt: "Centro médico" },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        title: "Industrial",
        description: "Plantas industriales y centros de producción",
        image: { src: "/img/sectors/industrial.png", alt: "Planta industrial" },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
    ],
  },

  ctaBanner: {
    title: "¿Buscas una solución confiable para tu espacio?",
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    background: {
      src: "/img/banner_cta_solutions.png",
      alt: "Equipo de trabajo de Opera en obra",
    },
  },

  faq: {
    intro: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas rápidas a las preguntas que pueda tener",
    },
    items: [
      {
        question: "¿Qué tipo de servicios ofrece Opera?",
        answer:
          "Ofrecemos soluciones integrales para espacios y operaciones, incluyendo aseo, mantenimiento, jardinería, fumigación, limpieza especializada, mano de obra, maquinaria y otros servicios complementarios.",
      },
      {
        question: "¿En qué sectores trabajan?",
        answer:
          "Atendemos espacios corporativos, residenciales, de salud, industriales y hoteleros, adaptando cada servicio a los requerimientos del sector.",
      },
      {
        question: "¿Los servicios se adaptan a cada espacio?",
        answer:
          "Sí. Evaluamos cada espacio y diseñamos soluciones a la medida, ajustadas a las necesidades y objetivos de cada cliente.",
      },
      {
        question: "¿Cómo solicito una cotización?",
        answer:
          "Puedes escribirnos por WhatsApp, correo electrónico o mediante el formulario de contacto para recibir una cotización personalizada.",
      },
    ],
  },
};
