import type { HomeContent } from "@/types/content";

/**
 * Home page editorial content.
 *
 * ── Images are TEMPORARY placeholders ──────────────────────────────────────
 * All `image.src` values below point to Unsplash (a public image CDN) purely
 * so the layout renders during development. Replace each `src` with the final
 * brand asset (or a Sanity image URL) — the `alt` text and everything else can
 * stay. The host is whitelisted in `next.config.ts` under `images.remotePatterns`.
 * ───────────────────────────────────────────────────────────────────────────
 */

const UNSPLASH = "https://images.unsplash.com";
/** Build a sized, optimized Unsplash placeholder URL. */
const ph = (id: string, w = 1200) =>
  `${UNSPLASH}/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const homeContent: HomeContent = {
  hero: {
    title: "Transformamos espacios en experiencias impecables",
    highlight: "experiencias impecables",
    subtitle:
      "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento.",
    background: {
      src: ph("1497366754035-f200968a6e72", 1920),
      alt: "Espacio corporativo moderno e impecable",
    },
    primaryCta: { label: "Solicita una cotización", href: "/#contacto" },
    secondaryCta: { label: "Explorar", href: "/#quienes-somos", variant: "ghost" },
  },

  about: {
    title: "Detrás de cada espacio impecable, hay un equipo que marca la diferencia",
    body: "En Opera unimos detalle, compromiso y excelencia para ofrecer soluciones en limpieza, jardinería y mantenimiento pensadas para cada espacio.",
    cta: { label: "Ver más", href: "/#soluciones", variant: "secondary" },
  },

  stats: [
    {
      value: "100%",
      label: "Excelencia",
      description:
        "Clientes satisfechos con nuestros servicios y atención profesional.",
    },
    {
      value: "+5 años",
      label: "Experiencia",
      description:
        "Brindando soluciones en limpieza, jardinería y mantenimiento.",
    },
    {
      value: "+250",
      label: "Cobertura",
      description:
        "Espacios intervenidos entre hogares, empresas e instituciones.",
    },
  ],

  services: {
    intro: {
      title: "Soluciones que transforman espacios",
      cta: { label: "Ver todos", href: "/soluciones", variant: "ghost" },
    },
    items: [
      {
        slug: "obras-civiles",
        title: "Obras civiles",
        description: "Adecuaciones, mantenimiento y obras con calidad profesional.",
        image: {
          src: "/img/services/civil_works.png",
          alt: "Trabajador en obra civil",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        slug: "aseo-integral",
        title: "Aseo integral y cafetería",
        description: "Servicios integrales para empresas e instituciones.",
        image: {
          src: "/img/services/restroom.png",
          alt: "Servicio de aseo integral",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        slug: "limpieza-fachadas",
        title: "Limpieza de fachadas",
        description: "Renovamos la imagen y limpieza de cada espacio.",
        image: {
          src: "/img/services/clean_front.jpg",
          alt: "Fachada de edificio de vidrio",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        slug: "tratamiento-pisos",
        title: "Tratamiento de pisos",
        description: "Cuidado especializado para todo tipo de superficies.",
        image: {
          src: "/img/services/floor_treatment.jpg",
          alt: "Piso pulido y tratado",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
      {
        slug: "jardineria",
        title: "Jardinería",
        description: "Diseño y mantenimiento de zonas verdes con cuidado profesional.",
        image: {
          src: "/img/services/gardening.jpg",
          alt: "Jardín cuidado profesionalmente",
        },
        cta: { label: "Agenda tu servicio", href: "/#contacto" },
      },
    ],
  },

  process: {
    intro: {
      title: "Así transformamos cada espacio",
      subtitle:
        "Un proceso claro, eficiente y pensado para ofrecer resultados impecables.",
      cta: { label: "Solicita tu cotización", href: "/#contacto" },
    },
    steps: [
      {
        number: "01",
        title: "Solicitud del servicio",
        description:
          "Recibimos tu solicitud y entendemos cada detalle para ofrecerte una atención personalizada, clara y adaptada a las necesidades de tu espacio.",
      },
      {
        number: "02",
        title: "Evaluación y planificación",
        description:
          "Evaluamos las condiciones, requerimientos y objetivos del servicio para definir la solución más eficiente y garantizar resultados de alta calidad.",
      },
      {
        number: "03",
        title: "Ejecución profesional",
        description:
          "Nuestro equipo especializado ejecuta cada servicio con compromiso, organización y atención al detalle, asegurando un trabajo impecable en cada intervención.",
      },
      {
        number: "04",
        title: "Seguimiento y garantía",
        description:
          "Realizamos seguimiento continuo para garantizar satisfacción, cumplimiento y una experiencia confiable antes, durante y después del servicio.",
      },
    ],
  },

  ctaBanner: {
    title: "¿Listo para transformar tus espacios?",
    subtitle:
      "Opera está lista para ayudarte con soluciones eficientes y profesionales.",
    cta: { label: "Contacto", href: "/#contacto" },
    background: {
      src: "/img/banner_2.png",
      alt: "Espacio de trabajo profesional",
    },
  },

  faq: {
    intro: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas rápidas a las preguntas que pueda tener",
    },
    items: [
      {
        question: "¿Qué tipos de servicios ofrece Opera?",
        answer:
          "Ofrecemos soluciones en obras civiles, aseo integral, cafetería, jardinería, limpieza de fachadas y tratamiento especializado de pisos.",
      },
      {
        question: "¿En qué zonas o ciudades prestan servicio?",
        answer:
          "Operamos en diferentes zonas según el tipo de servicio requerido. Puedes contactarnos para validar cobertura.",
      },
      {
        question: "¿Atienden hogares y empresas?",
        answer:
          "Sí. Trabajamos con hogares, conjuntos residenciales, oficinas, empresas e instituciones.",
      },
      {
        question: "¿El personal está capacitado y supervisado?",
        answer:
          "Sí. Contamos con personal capacitado y procesos supervisados para garantizar calidad y cumplimiento.",
      },
      {
        question: "¿Cómo puedo solicitar una cotización?",
        answer:
          "Puedes contactarnos a través de WhatsApp, formulario web o nuestros canales de atención para recibir una cotización personalizada.",
      },
      {
        question: "¿Ofrecen servicios programados o recurrentes?",
        answer:
          "Sí. Disponemos de planes periódicos y servicios continuos para empresas, conjuntos y espacios comerciales.",
      },
      {
        question: "¿Los servicios se adaptan a cada necesidad?",
        answer:
          "Sí. Evaluamos cada espacio y diseñamos soluciones ajustadas a los requerimientos de cada cliente.",
      },
      {
        question: "¿Cómo puedo comunicarme con el equipo de Opera?",
        answer:
          "Puedes escribirnos por WhatsApp, correo electrónico o mediante el formulario de contacto en nuestra página web.",
      },
    ],
  },

  contact: {
    title: "Hablemos sobre tu próximo proyecto",
    subtitle:
      "Déjanos tus datos y te ayudaremos a encontrar la solución ideal para tu espacio.",
    image: {
      src: "/img/building_drawn.png",
      alt: "Plano arquitectónico de un edificio",
    },
    submitLabel: "Enviar",
  },
};
