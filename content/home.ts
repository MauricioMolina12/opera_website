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
    secondaryCta: {
      label: "Explorar",
      href: "/#about-us",
      variant: "ghost",
    },
  },

  about: {
    title:
      "Detrás de cada espacio impecable, hay un equipo que marca la diferencia",
    body: "En Opera unimos detalle, compromiso y excelencia para ofrecer solutions en limpieza, jardinería y mantenimiento pensadas para cada espacio.",
    cta: { label: "Ver más", href: "/#solutions", variant: "secondary" },
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
        "Brindando solutions en limpieza, jardinería y mantenimiento.",
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
      cta: { label: "Ver todos", href: "/solutions", variant: "ghost" },
    },
    items: [
      {
        slug: "obras-civiles",
        title: "Obras civiles",
        description:
          "Ejecutamos adecuaciones, remodelaciones y mantenimiento de infraestructura con altos estándares de calidad.",

        longDescription:
          "Desarrollamos proyectos de obras civiles para empresas, instituciones y conjuntos residenciales. Nuestro equipo ejecuta adecuaciones locativas, remodelaciones, reparaciones y mantenimiento preventivo y correctivo, garantizando procesos seguros, materiales de calidad y cumplimiento en los tiempos establecidos.",

        image: {
          src: "/img/services/civil_works.png",
          alt: "Trabajador en obra civil",
        },

        sectors: ["Corporativo", "Industrial", "Residencial"],
        icon: "civil-works",

        includes: [
          "Adecuaciones locativas",
          "Remodelaciones",
          "Mantenimiento preventivo y correctivo",
          "Obras menores",
          "Acabados",
          "Supervisión técnica",
        ],

        benefits: [
          {
            title: "Personal calificado",
            description:
              "Contamos con profesionales capacitados para ejecutar cada proyecto con altos estándares de calidad.",
          },
          {
            title: "Cumplimiento garantizado",
            description:
              "Planeamos cada obra para cumplir con los tiempos y presupuestos acordados.",
          },
          {
            title: "Seguridad en cada proceso",
            description:
              "Aplicamos protocolos de seguridad y buenas prácticas durante toda la ejecución.",
          },
        ],

        process: [
          {
            title: "Diagnóstico",
            description:
              "Evaluamos el estado de las instalaciones y las necesidades del proyecto.",
          },
          {
            title: "Planeación",
            description: "Definimos recursos, cronograma y alcance de la obra.",
          },
          {
            title: "Ejecución",
            description:
              "Desarrollamos las actividades bajo supervisión permanente.",
          },
          {
            title: "Entrega",
            description:
              "Verificamos la calidad del trabajo antes de la entrega final.",
          },
        ],

        faqs: [
          {
            question: "¿Atienden proyectos empresariales?",
            answer:
              "Sí, trabajamos con empresas, industrias, instituciones y conjuntos residenciales.",
          },
          {
            question: "¿Realizan mantenimiento preventivo?",
            answer:
              "Sí, ofrecemos planes de mantenimiento preventivo y correctivo.",
          },
        ],

        cta: {
          label: "Agenda tu servicio",
          href: "/#contacto",
        },
      },
      {
        slug: "aseo-integral",
        title: "Aseo integral y cafetería",
        description:
          "Brindamos servicios integrales de aseo y cafetería para empresas e instituciones.",

        longDescription:
          "Prestamos servicios especializados de aseo, desinfección y cafetería con personal capacitado y procesos estandarizados. Nuestro objetivo es mantener espacios limpios, organizados y agradables que contribuyan al bienestar de colaboradores, visitantes y clientes.",

        image: {
          src: "/img/services/restroom.png",
          alt: "Servicio de aseo integral",
        },

        sectors: ["Corporativo", "Salud", "Residencial"],
        icon: "cleaning",

        includes: [
          "Aseo diario",
          "Desinfección de espacios",
          "Servicio de cafetería",
          "Suministro de insumos",
          "Personal uniformado",
          "Supervisión permanente",
        ],

        benefits: [
          {
            title: "Ambientes saludables",
            description:
              "Mantenemos espacios higiénicos que mejoran la productividad y el bienestar.",
          },
          {
            title: "Personal capacitado",
            description:
              "Nuestro equipo recibe formación continua en limpieza y atención al cliente.",
          },
          {
            title: "Flexibilidad",
            description:
              "Diseñamos planes de servicio adaptados a cada organización.",
          },
        ],

        process: [
          {
            title: "Evaluación",
            description: "Analizamos las necesidades de limpieza del cliente.",
          },
          {
            title: "Programación",
            description: "Definimos horarios y frecuencia del servicio.",
          },
          {
            title: "Prestación del servicio",
            description: "Ejecutamos las labores con supervisión constante.",
          },
          {
            title: "Seguimiento",
            description: "Verificamos la satisfacción y calidad del servicio.",
          },
        ],

        faqs: [
          {
            question: "¿El servicio incluye insumos?",
            answer:
              "Sí, podemos incluir todos los insumos necesarios según el contrato.",
          },
          {
            question: "¿Atienden oficinas y edificios?",
            answer:
              "Sí, prestamos servicio a empresas, instituciones y conjuntos residenciales.",
          },
        ],

        cta: {
          label: "Agenda tu servicio",
          href: "/#contacto",
        },
      },
      {
        slug: "limpieza-fachadas",
        title: "Limpieza de fachadas",
        description:
          "Realizamos limpieza especializada para conservar la imagen y el buen estado de sus instalaciones.",

        longDescription:
          "Ejecutamos limpieza profesional de fachadas en vidrio, aluminio, concreto y otros materiales utilizando equipos y técnicas especializadas que eliminan suciedad, contaminación y residuos sin afectar las superficies.",

        image: {
          src: "/img/services/clean_front.jpg",
          alt: "Fachada de edificio de vidrio",
        },

        sectors: ["Corporativo", "Industrial"],
        icon: "facade",

        includes: [
          "Limpieza de vidrios",
          "Fachadas en aluminio",
          "Concreto y revestimientos",
          "Equipos especializados",
          "Protocolos de seguridad",
          "Personal certificado",
        ],

        benefits: [
          {
            title: "Mejor imagen corporativa",
            description:
              "Una fachada limpia transmite confianza y profesionalismo.",
          },
          {
            title: "Mayor durabilidad",
            description:
              "El mantenimiento periódico ayuda a conservar los materiales.",
          },
          {
            title: "Trabajo seguro",
            description:
              "Seguimos protocolos para trabajos en altura y espacios complejos.",
          },
        ],

        process: [
          {
            title: "Inspección",
            description: "Identificamos el tipo de superficie y suciedad.",
          },
          {
            title: "Preparación",
            description: "Seleccionamos equipos y productos adecuados.",
          },
          {
            title: "Limpieza",
            description: "Realizamos el proceso con técnicas especializadas.",
          },
          {
            title: "Control de calidad",
            description: "Verificamos el resultado final antes de entregar.",
          },
        ],

        faqs: [
          {
            question: "¿Trabajan en alturas?",
            answer:
              "Sí, contamos con personal capacitado y equipos certificados.",
          },
          {
            question: "¿Cada cuánto se recomienda limpiar una fachada?",
            answer:
              "Depende del entorno, aunque normalmente se recomienda entre una y dos veces por año.",
          },
        ],

        cta: {
          label: "Agenda tu servicio",
          href: "/#contacto",
        },
      },
      {
        slug: "tratamiento-pisos",
        title: "Tratamiento de pisos",
        description:
          "Aplicamos procesos especializados para conservar la belleza y resistencia de todo tipo de pisos.",

        longDescription:
          "Ofrecemos servicios de limpieza profunda, sellado, cristalizado, abrillantado y mantenimiento para pisos en mármol, granito, porcelanato, cerámica, vinilo y otras superficies, prolongando su vida útil y mejorando su apariencia.",

        image: {
          src: "/img/services/floor_treatment.jpg",
          alt: "Piso pulido y tratado",
        },

        sectors: ["Corporativo", "Salud", "Residencial"],
        icon: "floor",

        includes: [
          "Limpieza profunda",
          "Cristalizado",
          "Sellado",
          "Abrillantado",
          "Pulido",
          "Mantenimiento preventivo",
        ],

        benefits: [
          {
            title: "Mayor durabilidad",
            description:
              "Protegemos las superficies contra el desgaste diario.",
          },
          {
            title: "Excelente apariencia",
            description:
              "Recuperamos el brillo y la estética original del piso.",
          },
          {
            title: "Procesos especializados",
            description:
              "Seleccionamos el tratamiento adecuado para cada material.",
          },
        ],

        process: [
          {
            title: "Evaluación",
            description: "Analizamos el tipo y estado del piso.",
          },
          {
            title: "Preparación",
            description: "Realizamos limpieza y acondicionamiento.",
          },
          {
            title: "Tratamiento",
            description: "Aplicamos el proceso especializado correspondiente.",
          },
          {
            title: "Protección",
            description: "Finalizamos con acabados que prolongan la vida útil.",
          },
        ],

        faqs: [
          {
            question: "¿Qué tipos de pisos manejan?",
            answer:
              "Mármol, granito, porcelanato, cerámica, vinilo y otras superficies.",
          },
          {
            question: "¿Se puede recuperar el brillo de un piso antiguo?",
            answer:
              "Sí, dependiendo del estado de la superficie y el material.",
          },
        ],

        cta: {
          label: "Agenda tu servicio",
          href: "/#contacto",
        },
      },
      {
        slug: "jardineria",
        title: "Jardinería",
        description:
          "Diseñamos y mantenemos zonas verdes para conservar espacios naturales saludables y atractivos.",

        longDescription:
          "Prestamos servicios integrales de jardinería que incluyen poda, siembra, fertilización, control fitosanitario y mantenimiento de zonas verdes para empresas, conjuntos residenciales e instituciones.",

        image: {
          src: "/img/services/gardening.jpg",
          alt: "Jardín cuidado profesionalmente",
        },

        sectors: ["Residencial", "Corporativo"],
        icon: "gardening",

        includes: [
          "Poda de árboles y jardines",
          "Siembra",
          "Fertilización",
          "Control fitosanitario",
          "Mantenimiento de zonas verdes",
          "Diseño de jardines",
        ],

        benefits: [
          {
            title: "Espacios más agradables",
            description:
              "Las zonas verdes mejoran la imagen y el bienestar de las personas.",
          },
          {
            title: "Mantenimiento especializado",
            description:
              "Aplicamos técnicas adecuadas para cada especie vegetal.",
          },
          {
            title: "Conservación del entorno",
            description:
              "Promovemos el cuidado responsable de las áreas verdes.",
          },
        ],

        process: [
          {
            title: "Inspección",
            description: "Evaluamos el estado de las zonas verdes.",
          },
          {
            title: "Plan de mantenimiento",
            description: "Definimos las actividades necesarias.",
          },
          {
            title: "Intervención",
            description: "Ejecutamos poda, siembra y mantenimiento.",
          },
          {
            title: "Seguimiento",
            description:
              "Verificamos el crecimiento y estado de las áreas intervenidas.",
          },
        ],

        faqs: [
          {
            question: "¿Atienden jardines empresariales?",
            answer:
              "Sí, trabajamos con empresas, conjuntos residenciales e instituciones.",
          },
          {
            question: "¿Realizan mantenimiento periódico?",
            answer: "Sí, ofrecemos planes de mantenimiento programado.",
          },
        ],

        cta: {
          label: "Agenda tu servicio",
          href: "/#contacto",
        },
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

  comparison: {
    eyebrow: "Cómo nos comparamos",
    title: "Lo que otros cobran aparte, con Opera va incluido",
    highlight: "incluido",
    subtitle:
      "Los proveedores tradicionales facturan cada extra por separado. Opera integra personal capacitado, insumos, supervisión y garantía en un solo servicio, sin sorpresas en la factura.",
    othersLabel: "Proveedores tradicionales",
    operaLabel: "Opera",
    rows: [
      {
        feature: "Diagnóstico y visita técnica",
        others: "Con costo",
        opera: "Gratis",
      },
      {
        feature: "Insumos y equipos profesionales",
        others: "Se cobran aparte",
        opera: "Incluidos",
      },
      {
        feature: "Personal capacitado y uniformado",
        others: "No siempre",
        opera: "Siempre",
      },
      {
        feature: "Supervisión permanente del servicio",
        others: "Limitada",
        opera: "Incluida",
      },
      {
        feature: "Cobertura multisectorial",
        others: "Un solo sector",
        opera: "Corporativo, salud e industrial",
      },
      {
        feature: "Planes recurrentes y garantía",
        others: "Plan premium",
        opera: "Con plan a la medida",
        operaConditional: true,
      },
    ],
  },

  ctaBanner: {
    title: "¿Listo para transformar tus espacios?",
    subtitle:
      "Opera está lista para ayudarte con solutions eficientes y profesionales.",
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
          "Ofrecemos solutions en obras civiles, aseo integral, cafetería, jardinería, limpieza de fachadas y tratamiento especializado de pisos.",
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
          "Sí. Evaluamos cada espacio y diseñamos solutions ajustadas a los requerimientos de cada cliente.",
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
