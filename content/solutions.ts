import type { SolutionsPageContent } from "@/types/content";

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
      eyebrow: "Aseo integral empresarial",
      title: "Limpieza, desinfección y cafetería con estándares profesionales.",
      benefits: [
        "Ambientes saludables con protocolos avalados de desinfección",
        "Personal capacitado y verificado para cada tipo de instalación",
        "Planes flexibles que se adaptan a la operación sin interrumpir actividades",
        "Supervisión permanente y reportes de calidad periódicos",
      ],
      image: {
        src: "/img/services/restroom.png",
        alt: "Servicio de aseo integral empresarial",
      },
    },
    {
      eyebrow: "Limpieza profesional de fachadas",
      title: "Imagen corporativa renovada con trabajo seguro en altura.",
      benefits: [
        "Fachadas impecables que proyectan profesionalismo y cuidado",
        "Técnicas especializadas que protegen y prolongan la vida de los materiales",
        "Protocolos certificados de seguridad en altura con personal entrenado",
        "Resultados duraderos que reducen la frecuencia de limpieza profunda",
      ],
      image: {
        src: "/img/services/clean_front.jpg",
        alt: "Fachada de edificio corporativo",
      },
    },
    {
      eyebrow: "Tratamiento y restauración de pisos",
      title: "Recuperación estética y protección para todo tipo de superficies.",
      benefits: [
        "Devolvemos el brillo y uniformidad original a cualquier tipo de piso",
        "Tratamientos protectores que evitan el desgaste prematuro",
        "Diagnóstico especializado para cada material y nivel de desgaste",
        "Reducción de costos de reposición con mantenimiento preventivo",
      ],
      image: {
        src: "/img/services/floor_treatment.png",
        alt: "Piso pulido y tratado profesionalmente",
      },
    },
    {
      eyebrow: "Mantenimiento de zonas verdes",
      title: "Espacios naturales que mejoran la calidad ambiental y la imagen institucional.",
      benefits: [
        "Áreas verdes cuidadas que proyectan orden y profesionalismo",
        "Técnicas especializadas para las especies y clima de la región Caribe",
        "Bienestar laboral a través de entornos naturales saludables",
        "Preservación del patrimonio natural con prácticas sostenibles",
      ],
      image: {
        src: "/img/services/gardening.jpg",
        alt: "Jardín corporativo profesionalmente cuidado",
      },
    },
    {
      eyebrow: "Mantenimiento profesional de piscinas",
      title: "Agua cristalina y equipos protegidos con mantenimiento programado.",
      benefits: [
        "Parámetros químicos óptimos para baño seguro y saludable",
        "Mantenimiento preventivo que alarga la vida de bombas y filtros",
        "Cumplimiento de estándares sanitarios exigidos por la normativa",
        "Tranquilidad operativa al delegar el cuidado en profesionales certificados",
      ],
      image: {
        src: "/img/services/commercial_cleaning.png",
        alt: "Piscina limpia y cristalina",
      },
    },
    {
      eyebrow: "Servicio de recepción",
      title: "La primera impresión de tu empresa, profesional y organizada.",
      benefits: [
        "Atención presencial que refleja la calidad y los valores de tu marca",
        "Gestión eficiente de llamadas, visitantes y agenda corporativa",
        "Flexibilidad operativa con horarios adaptados a cada empresa",
        "Reducción de carga administrativa liberando a tu equipo operativo",
      ],
      image: {
        src: "/img/services/receptionist.png",
        alt: "Recepcionista profesional en oficina corporativa",
      },
    },
    {
      eyebrow: "Conserjería",
      title: "Gestión profesional de edificios con control de acceso y atención a residentes.",
      benefits: [
        "Control de acceso peatonal y vehicular con protocolos claros",
        "Atención humana de calidad a residentes, visitantes y proveedores",
        "Tranquilidad para administradores con personal confiable y respaldado",
        "Reportes diarios de novedades con trazabilidad completa",
      ],
      image: {
        src: "/img/services/concierge.png",
        alt: "Conserje profesional en edificio",
      },
    },
    {
      eyebrow: "Salvavidas",
      title: "Seguridad acuática certificada con profesionales entrenados.",
      benefits: [
        "Vigilancia permanente que reduce drásticamente el riesgo de accidentes",
        "Personal certificado en rescate, RCP y primeros auxilios",
        "Cumplimiento de normativa colombiana para espacios acuáticos colectivos",
        "Respuesta inmediata ante emergencias con protocolos establecidos",
      ],
      image: {
        src: "/img/services/life_jacket.png",
        alt: "Salvavidas profesional certificado",
      },
    },
    {
      eyebrow: "Aseo corporativo integral",
      title: "Soluciones completas de limpieza para grandes superficies y corporaciones.",
      benefits: [
        "Estándar corporativo de calidad con protocolos de limpieza exigentes",
        "Cobertura total: un solo proveedor para todas las necesidades",
        "Supervisión in situ con reportes periódicos de gestión",
        "Planes personalizados según horarios, flujos y exigencias operativas",
      ],
      image: {
        src: "/img/services/corporate_cleaning.png",
        alt: "Limpieza corporativa profesional",
      },
    },
  ],

  sectors: {
    eyebrow: "Sectores en los que trabajamos",
    title: "Sectores en los que trabajamos",
    subtitle: "Soluciones diseñadas para diferentes entornos donde la calidad, seguridad y eficiencia son esenciales.",
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
      {
        title: "Instituciones",
        description: "Colegios, universidades, entidades públicas y organizaciones",
        image: { src: "/img/sectors/industrial.png", alt: "Institución educativa" },
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
          "Atendemos espacios corporativos, residenciales, de salud, industriales e instituciones, adaptando cada servicio a los requerimientos del sector.",
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