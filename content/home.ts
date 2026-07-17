import { whatsAppUrl } from "@/lib/whatsapp";
import type { HomeContent } from "@/types/content";

const UNSPLASH = "https://images.unsplash.com";
const ph = (id: string, w = 1200) => `${UNSPLASH}/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

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
    primaryCta: { label: "Solicita una cotización", href: whatsAppUrl() },
    secondaryCta: {
      label: "Explorar",
      href: "/#about-us",
      variant: "ghost",
    },
  },

  about: {
    title:
      "Detrás de cada espacio impecable, hay un equipo que marca la diferencia",
    body: "En Opera unimos detalle, compromiso y excelencia para ofrecer soluciones de limpieza, jardinería y mantenimiento pensadas para cada espacio.",
    cta: { label: "Ver más", href: "/#solutions", variant: "secondary" },
  },

  stats: [
    {
      value: "99,6%",
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
      cta: { label: "Ver todos", href: "/solutions", variant: "ghost" },
    },
    items: [
      {
        slug: "aseo-integral",
        title: "Aseo integral empresarial",
        description:
          "Servicio profesional de limpieza, desinfección y cafetería para empresas que buscan espacios impecables.",
        heroSubtitle:
          "Ambientes limpios, saludables y profesionales todos los días.",
        summary:
          "Más que limpieza: un servicio integral que cuida la salud ocupacional, la imagen corporativa y la experiencia de colaboradores y visitantes. Diseñamos planes de aseo, desinfección y cafetería adaptados a la operación de cada organización, con personal capacitado, insumos profesionales y supervisión permanente.",

        longDescription:
          "Ofrecemos un servicio integral de aseo, desinfección y cafetería diseñado para empresas, instituciones y conjuntos residenciales que requieren estándares de limpieza exigentes. Nuestro equipo capacitado sigue procesos estandarizados que garantizan resultados consistentes, higiénicos y profesionales en cada intervención. Más allá de la limpieza, aportamos orden, salud ocupacional y una imagen corporativa impecable que proyecta confianza a clientes, colaboradores y visitantes.",

        image: {
          src: "/img/services/restroom.png",
          alt: "Servicio de aseo integral",
        },

        sectors: ["Corporativo", "Salud", "Residencial", "Instituciones"],
        icon: "cleaning",

        includes: [
          "Aseo diario de oficinas y áreas comunes",
          "Desinfección de superficies de alto contacto",
          "Servicio de cafetería empresarial",
          "Suministro de insumos ecológicos certificados",
          "Personal uniformado y capacitado",
          "Supervisión permanente y reportes",
          "Limpieza de baños y zonas húmedas",
          "Manejo de residuos sólidos",
        ],

        benefits: [
          {
            title: "Ambientes saludables certificados",
            description:
              "Reducimos la carga bacteriana y mejoramos la calidad del aire con protocolos avalados, disminuyendo el ausentismo laboral por enfermedades.",
          },
          {
            title: "Personal capacitado y verificado",
            description:
              "Cada miembro del equipo recibe formación continua en limpieza profesional y atención al cliente, y cuenta con afiliación a seguridad social.",
          },
          {
            title: "Planes flexibles",
            description:
              "Diseñamos frecuencias y alcances adaptados a la operación de cada organización sin interrumpir sus actividades diarias.",
          },
          {
            title: "Supervisión y control de calidad",
            description:
              "Contamos con supervisión permanente y aplicación periódica de encuestas de satisfacción para garantizar resultados.",
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
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Procesos estandarizados con protocolos de desinfección avalados",
          "Personal uniformado, capacitado y afiliado a seguridad social",
          "Supervisión in situ con reportes periódicos de gestión",
          "Insumos ecológicos y equipos profesionales de última generación",
          "Flexibilidad para ajustar frecuencias sin afectar la operación",
          "Cobertura en Barranquilla y principales municipios del Atlántico",
        ],

        seo: {
          metaTitle:
            "Aseo integral empresarial en Barranquilla | Limpieza profesional | Opera SAS",
          metaDescription:
            "Servicio profesional de aseo, desinfección y cafetería para empresas en Barranquilla. Personal capacitado, insumos incluidos y supervisión permanente. Solicita tu cotización.",
          keywords: [
            "aseo integral empresarial Barranquilla",
            "limpieza profesional empresas",
            "servicio de cafetería empresarial",
            "desinfección de oficinas",
            "aseo corporativo Atlántico",
            "limpieza instituciones",
          ],
          ogTitle:
            "Aseo integral empresarial en Barranquilla | Opera SAS",
          ogDescription:
            "Transformamos tus espacios con limpieza profesional, desinfección y cafetería. Personal capacitado, insumos incluidos y supervisión permanente.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de un equipo de limpieza profesional colombiano en una oficina moderna en Barranquilla. Personal uniformado con overoles corporativos azul oscuro y logo de Opera, realizando desinfección de superficies. Iluminación natural que entra por ventanas amplias. Ambiente corporativo limpio y ordenado. Composición horizontal premium para hero de sitio web. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "limpieza-fachadas",
        title: "Limpieza profesional de fachadas",
        description:
          "Restauramos la imagen de tu edificio con técnicas especializadas y trabajo seguro en altura.",
        heroSubtitle:
          "La primera impresión de tu empresa comienza por su fachada.",
        summary:
          "Devolvemos el brillo y la elegancia a la fachada de tu edificio utilizando equipos hidrolavadores de alta presión, productos biodegradables y personal certificado para trabajo en altura. Eliminamos suciedad, contaminación, hongos y residuos sin dañar los materiales, protegiendo tu inversión inmobiliaria.",

        longDescription:
          "La fachada de tu edificio es la primera impresión que proyectas al mercado. Realizamos limpieza profesional en vidrio, aluminio, concreto y otros revestimientos utilizando equipos de última tecnología y técnicas certificadas para trabajo en altura. Eliminamos suciedad acumulada, contaminación ambiental y residuos sin dañar los materiales, prolongando la vida útil de las superficies y devolviendo el brillo original a tu patrimonio arquitectónico.",

        image: {
          src: "/img/services/clean_front.jpg",
          alt: "Fachada de edificio de vidrio",
        },

        sectors: ["Corporativo", "Industrial", "Instituciones", "Comercial"],
        icon: "facade",

        includes: [
          "Limpieza de vidrios y cristales templados",
          "Lavado de fachadas en aluminio y ACM",
          "Limpieza de concreto, ladrillo y revestimientos",
          "Equipos hidrolavadores y andamios certificados",
          "Protocolos de seguridad en altura",
          "Personal certificado con ARL vigente",
          "Uso de productos biodegradables",
          "Inspección previa y reporte fotográfico",
        ],

        benefits: [
          {
            title: "Imagen corporativa renovada",
            description:
              "Una fachada impecable transmite profesionalismo, orden y cuidado por los detalles, mejorando la percepción de clientes y visitantes.",
          },
          {
            title: "Protección del patrimonio",
            description:
              "La limpieza periódica previene el desgaste prematuro causado por contaminación, humedad y agentes ambientales.",
          },
          {
            title: "Trabajo seguro y certificado",
            description:
              "Cumplimos con todos los protocolos de seguridad para trabajo en altura con personal certificado y pólizas vigentes.",
          },
          {
            title: "Menor frecuencia de mantenimiento",
            description:
              "Un tratamiento profesional adecuado con selladores protectores reduce la recurrencia de limpiezas profundas.",
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
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Personal certificado para trabajo en altura con ARL vigente",
          "Equipos hidrolavadores profesionales y productos biodegradables",
          "Diagnóstico previo sin costo con reporte fotográfico",
          "Protocolos de seguridad que cumplen la normativa colombiana",
          "Resultados garantizados con protección de superficies",
        ],

        seo: {
          metaTitle:
            "Limpieza profesional de fachadas en Barranquilla | Opera SAS",
          metaDescription:
            "Limpieza de fachadas en Barranquilla: vidrio, aluminio, concreto. Trabajo seguro en altura, personal certificado y ARL vigente. Solicita tu cotización sin costo.",
          keywords: [
            "limpieza de fachadas Barranquilla",
            "lavado de fachadas edificios",
            "limpieza de vidrios en altura",
            "mantenimiento de fachadas",
            "limpieza fachadas corporativas",
            "trabajo en altura certificado",
          ],
          ogTitle:
            "Limpieza profesional de fachadas en Barranquilla | Opera SAS",
          ogDescription:
            "Restauramos la imagen de tu edificio con limpieza profesional en altura. Personal certificado, equipos especializados y resultados garantizados.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de personal colombiano de mantenimiento limpiando una fachada de vidrio en un edificio corporativo moderno en Barranquilla. Técnico suspendido con arnés de seguridad y uniforme azul con logo de Opera. Luz natural del trópico. Andamios certificados y equipos hidrolavadores. Arquitectura corporativa colombiana. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "tratamiento-pisos",
        title: "Tratamiento y restauración de pisos",
        description:
          "Recuperamos la belleza y resistencia original de todo tipo de superficies con procesos especializados.",
        heroSubtitle:
          "Pisos que reflejan la calidad de tu espacio.",
        summary:
          "Los pisos son una de las superficies más visibles y transitadas de cualquier instalación. Ofrecemos servicios de limpieza profunda, cristalizado, sellado, abrillantado y mantenimiento para pisos en mármol, granito, porcelanato, cerámica, vinilo y otras superficies. Cada tratamiento es seleccionado según el material y el nivel de desgaste, garantizando resultados que prolongan la vida útil del piso y mejoran significativamente la apariencia del espacio.",

        longDescription:
          "Los pisos son una de las superficies más visibles y transitadas de cualquier instalación. Ofrecemos servicios de limpieza profunda, cristalizado, sellado, abrillantado y mantenimiento para pisos en mármol, granito, porcelanato, cerámica, vinilo y otras superficies. Cada tratamiento es seleccionado según el material y el nivel de desgaste, garantizando resultados que prolongan la vida útil del piso y mejoran significativamente la apariencia del espacio.",

        image: {
          src: "/img/services/floor_treatment.png",
          alt: "Piso pulido y tratado",
        },

        sectors: ["Corporativo", "Salud", "Residencial", "Comercial"],
        icon: "floor",

        includes: [
          "Limpieza profunda con máquinas especializadas",
          "Cristalizado de mármol y granito",
          "Sellado de porcelanato y cerámica",
          "Abrillantado de superficies",
          "Pulido y nivelación",
          "Mantenimiento preventivo programado",
          "Aplicación de protectores antideslizantes",
          "Diagnóstico previo sin costo",
        ],

        benefits: [
          {
            title: "Recuperación estética inmediata",
            description:
              "Devolvemos el brillo, color y uniformidad original a cualquier tipo de piso, transformando la percepción del espacio.",
          },
          {
            title: "Prolongación de vida útil",
            description:
              "Los tratamientos protectores evitan el desgaste prematuro por tránsito constante, ahorrando costos de reposición.",
          },
          {
            title: "Procesos para cada material",
            description:
              "Diagnosticamos el tipo de superficie y aplicamos el tratamiento químico y mecánico adecuado sin riesgo de daños.",
          },
          {
            title: "Reducción de costos de reposición",
            description:
              "Un piso bien mantenido retrasa significativamente la necesidad de cambiarlo, representando un ahorro importante.",
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
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Diagnóstico profesional sin costo para determinar el tratamiento ideal",
          "Maquinaria especializada para cada tipo de material",
          "Productos químicos profesionales que no dañan las superficies",
          "Técnicos capacitados con experiencia en pisos corporativos y residenciales",
          "Garantía de satisfacción en cada tratamiento",
        ],

        seo: {
          metaTitle:
            "Tratamiento y restauración de pisos en Barranquilla | Opera SAS",
          metaDescription:
            "Cristalizado, pulido, sellado y abrillantado de pisos en Barranquilla. Mármol, granito, porcelanato, cerámica y vinilo. Diagnóstico gratis. Solicita tu cotización.",
          keywords: [
            "tratamiento de pisos Barranquilla",
            "cristalizado de mármol",
            "pulido de pisos",
            "restauración de pisos",
            "abrillantado de pisos",
            "mantenimiento de pisos corporativos",
          ],
          ogTitle:
            "Tratamiento y restauración de pisos en Barranquilla | Opera SAS",
          ogDescription:
            "Recuperamos la belleza original de tus pisos con procesos profesionales. Cristalizado, pulido, sellado y abrillantado. Diagnóstico sin costo.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de un técnico colombiano puliendo un piso de mármol en un lobby corporativo moderno en Barranquilla. Uniforme azul corporativo con logo de Opera. Máquina pulidora profesional. Reflejo brillante en el piso tratado. Iluminación natural y artificial combinada. Ambiente corporativo elegante. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "jardineria",
        title: "Mantenimiento de zonas verdes",
        description:
          "Diseñamos y mantenemos espacios naturales que mejoran la calidad ambiental y la imagen institucional.",
        heroSubtitle:
          "Naturaleza que habla bien de tu empresa.",
        summary:
          "Las zonas verdes bien cuidadas son un diferenciador clave para empresas, conjuntos residenciales e instituciones. Brindamos servicios integrales de jardinería que incluyen poda especializada, siembra, fertilización, control fitosanitario y mantenimiento preventivo. Trabajamos con técnicas adecuadas para cada especie vegetal y condiciones climáticas de la región Caribe, garantizando espacios verdes saludables, estéticos y sostenibles durante todo el año.",

        longDescription:
          "Las zonas verdes bien cuidadas son un diferenciador clave para empresas, conjuntos residenciales e instituciones. Brindamos servicios integrales de jardinería que incluyen poda especializada, siembra, fertilización, control fitosanitario y mantenimiento preventivo. Trabajamos con técnicas adecuadas para cada especie vegetal y condiciones climáticas de la región Caribe, garantizando espacios verdes saludables, estéticos y sostenibles durante todo el año.",

        image: {
          src: "/img/services/gardening.jpg",
          alt: "Jardín cuidado profesionalmente",
        },

        sectors: ["Residencial", "Corporativo", "Instituciones", "Hotelero"],
        icon: "gardening",

        includes: [
          "Poda de árboles, arbustos y césped",
          "Siembra y renovación de especies ornamentales",
          "Fertilización orgánica y control fitosanitario",
          "Mantenimiento de zonas verdes comunes",
          "Diseño paisajístico",
          "Riego programado y eficiente",
          "Control de plagas y enfermedades",
          "Limpieza de áreas verdes y recolección",
        ],

        benefits: [
          {
            title: "Imagen institucional mejorada",
            description:
              "Áreas verdes cuidadas proyectan orden, profesionalismo y cuidado del entorno, mejorando la percepción de visitantes y residentes.",
          },
          {
            title: "Bienestar laboral y ambiental",
            description:
              "Espacios naturales reducen el estrés, mejoran la calidad del aire y regulan la temperatura en el entorno laboral.",
          },
          {
            title: "Mantenimiento especializado",
            description:
              "Conocemos las especies y condiciones climáticas de la región Caribe para garantizar resultados óptimos durante todo el año.",
          },
          {
            title: "Conservación del patrimonio natural",
            description:
              "Preservamos y potenciamos los recursos verdes existentes con prácticas sostenibles y respetuosas con el medio ambiente.",
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
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Técnicas especializadas para el clima y especies de la región Caribe",
          "Personal con formación en paisajismo y control fitosanitario",
          "Uso de fertilizantes orgánicos y productos amigables con el ambiente",
          "Planes de mantenimiento programado que garantizan resultados sostenidos",
          "Diseño paisajístico para proyectos corporativos y residenciales",
        ],

        seo: {
          metaTitle:
            "Mantenimiento de zonas verdes en Barranquilla | Jardinería corporativa | Opera SAS",
          metaDescription:
            "Mantenimiento profesional de jardines y zonas verdes en Barranquilla. Poda, siembra, fertilización y diseño paisajístico para empresas y conjuntos. Solicita tu plan.",
          keywords: [
            "jardinería Barranquilla",
            "mantenimiento de zonas verdes",
            "poda de árboles",
            "diseño paisajístico",
            "jardinería corporativa",
            "control fitosanitario",
            "mantenimiento de jardines",
          ],
          ogTitle:
            "Mantenimiento de zonas verdes en Barranquilla | Opera SAS",
          ogDescription:
            "Transformamos tus espacios verdes con jardinería profesional. Poda, siembra, fertilización y diseño paisajístico para empresas y conjuntos.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de jardineros colombianos cuidando un jardín corporativo en Barranquilla. Uniformes azules con logo de Opera. Realizando poda de arbustos y mantenimiento de césped. Vegetación tropical exuberante. Iluminación natural del Caribe. Edificio corporativo de fondo. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "limpieza-mantenimiento-piscinas",
        title: "Mantenimiento profesional de piscinas",
        description:
          "Garantizamos agua cristalina y condiciones óptimas con tratamiento químico y limpieza programada.",
        heroSubtitle:
          "Agua cristalina, segura y lista para disfrutar.",
        summary:
          "Una piscina mal mantenida es un riesgo para la salud y una fuente de costos imprevistos. Brindamos un servicio integral de mantenimiento que incluye análisis de agua, tratamiento químico balanceado, limpieza de filtros, superficies y equipos. Garantizamos agua cristalina, libre de microorganismos y en condiciones óptimas para el disfrute seguro de residentes, usuarios o invitados.",

        longDescription:
          "Una piscina mal mantenida es un riesgo para la salud y una fuente de costos imprevistos. Brindamos un servicio integral de mantenimiento que incluye análisis de agua, tratamiento químico balanceado, limpieza de filtros, superficies y equipos. Garantizamos agua cristalina, libre de microorganismos y en condiciones óptimas para el disfrute seguro de residentes, usuarios o invitados. Ideal para conjuntos residenciales, hoteles, clubes y centros recreativos.",

        image: {
          src: "/img/services/commercial_cleaning.png",
          alt: "Piscina limpia y cristalina",
        },

        sectors: ["Residencial", "Hotelero", "Corporativo", "Recreativo"],
        icon: "pool",

        includes: [
          "Limpieza de superficies, fondo y bordes",
          "Tratamiento químico balanceado (pH, cloro, alcalinidad)",
          "Mantenimiento de bombas y filtros",
          "Control de algas y microorganismos",
          "Revisión periódica de equipos hidráulicos",
          "Programación semanal o quincenal",
          "Análisis fisicoquímico del agua",
          "Reporte de parámetros y novedades",
        ],

        benefits: [
          {
            title: "Agua saludable y cristalina",
            description:
              "Mantenemos parámetros químicos óptimos para baño seguro, eliminando riesgos de infecciones y enfermedades.",
          },
          {
            title: "Equipos protegidos y duraderos",
            description:
              "El mantenimiento preventivo alarga la vida útil de bombas, filtros y sistemas hidráulicos, evitando reparaciones costosas.",
          },
          {
            title: "Cumplimiento normativo",
            description:
              "Operamos bajo estándares de calidad del agua exigidos por autoridades sanitarias colombianas.",
          },
          {
            title: "Tranquilidad operativa",
            description:
              "Delegue el cuidado de su piscina en profesionales con experiencia y certificación, sin preocupaciones diarias.",
          },
        ],

        process: [
          {
            title: "Evaluación",
            description: "Analizamos el estado del agua y los equipos.",
          },
          {
            title: "Tratamiento",
            description: "Aplicamos los químicos y realizamos limpieza.",
          },
          {
            title: "Mantenimiento",
            description: "Realizamos seguimiento periódico programado.",
          },
          {
            title: "Control de calidad",
            description: "Verificamos parámetros y condiciones del agua.",
          },
        ],

        faqs: [
          {
            question: "¿Cada cuánto se debe realizar mantenimiento?",
            answer:
              "Recomendamos mantenimiento semanal para mantener el agua en óptimas condiciones.",
          },
          {
            question: "¿Manejan piscinas de uso comercial?",
            answer:
              "Sí, trabajamos con piscinas residenciales y de uso comercial o empresarial.",
          },
        ],

        cta: {
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Técnicos capacitados en tratamiento químico y mantenimiento de piscinas",
          "Uso de productos certificados y amigables con el medio ambiente",
          "Análisis periódico del agua con equipos profesionales",
          "Programación flexible: semanal, quincenal o según necesidad",
          "Cobertura en Barranquilla y el Atlántico",
        ],

        seo: {
          metaTitle:
            "Mantenimiento de piscinas en Barranquilla | Limpieza profesional | Opera SAS",
          metaDescription:
            "Mantenimiento profesional de piscinas en Barranquilla. Tratamiento químico, limpieza de filtros y análisis de agua. Programación semanal. Solicita tu cotización.",
          keywords: [
            "mantenimiento de piscinas Barranquilla",
            "limpieza de piscinas",
            "tratamiento químico para piscinas",
            "mantenimiento piscinas conjuntos",
            "servicio de piscinas profesional",
            "análisis de agua piscinas",
          ],
          ogTitle:
            "Mantenimiento profesional de piscinas en Barranquilla | Opera SAS",
          ogDescription:
            "Agua cristalina y equipos protegidos con mantenimiento profesional. Tratamiento químico, limpieza y análisis de agua. Programación semanal.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de una piscina cristalina en un conjunto residencial o club en Barranquilla. Técnico de mantenimiento uniformado con overol azul y logo de Opera, realizando análisis de agua con kit profesional. Agua transparente reflejando el cielo. Palmas y vegetación tropical alrededor. Iluminación natural del Caribe. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "recepcionista",
        title: "Servicio de recepción",
        description:
          "La primera impresión de tu empresa: atención profesional, cálida y organizada.",
        heroSubtitle:
          "Tu mejor carta de presentación, todos los días.",
        summary:
          "La recepción es el primer punto de contacto entre tu empresa y el mundo exterior. Ofrecemos recepcionistas profesionales capacitadas en atención al cliente, manejo de llamadas multicanal, recepción de visitantes y apoyo administrativo básico. Nuestro personal proyecta una imagen corporativa profesional, organizada y alineada con los valores de tu marca.",

        longDescription:
          "La recepción es el primer punto de contacto entre tu empresa y sus visitantes. Ofrecemos servicios de recepcionistas profesionales capacitadas en atención al cliente, manejo de llamadas multicanal, recepción de visitantes y apoyo administrativo básico. Nuestro personal proyecta una imagen corporativa profesional, organizada y alineada con los valores de tu marca, garantizando que cada persona que llegue a tus instalaciones reciba una experiencia positiva desde el primer momento.",

        image: {
          src: "/img/services/receptionist.png",
          alt: "Recepcionista profesional en oficina",
        },

        sectors: ["Corporativo", "Salud", "Instituciones", "Hotelero"],
        icon: "reception",

        includes: [
          "Atención presencial a clientes y visitantes",
          "Gestión de llamadas telefónicas y transferencia",
          "Recepción y registro de visitantes",
          "Apoyo administrativo básico",
          "Personal uniformado con imagen corporativa",
          "Horarios flexibles (tiempo completo o parcial)",
          "Manejo de correspondencia y mensajería",
          "Reporte diario de novedades",
        ],

        benefits: [
          {
            title: "Imagen corporativa consistente",
            description:
              "Una recepcionista profesional proyecta orden, confianza y calidad desde el primer contacto con clientes y visitantes.",
          },
          {
            title: "Atención especializada",
            description:
              "Personal entrenado en servicio al cliente, protocolo empresarial y comunicación efectiva para resolver cualquier situación.",
          },
          {
            title: "Flexibilidad operativa",
            description:
              "Nos adaptamos a los horarios y necesidades específicas de cada empresa, incluyendo medio tiempo o tiempo completo.",
          },
          {
            title: "Reducción de carga administrativa",
            description:
              "Liberamos a tu equipo operativo de tareas de recepción para que se concentren en su core de negocio.",
          },
        ],

        process: [
          {
            title: "Selección",
            description: "Seleccionamos el perfil adecuado para tu empresa.",
          },
          {
            title: "Capacitación",
            description: "Entrenamos en protocolos de atención y servicio.",
          },
          {
            title: "Implementación",
            description: "Integramos el personal a tus instalaciones.",
          },
          {
            title: "Seguimiento",
            description: "Evaluamos desempeño y satisfacción periódicamente.",
          },
        ],

        faqs: [
          {
            question: "¿El personal cuenta con experiencia?",
            answer:
              "Sí, nuestro personal tiene experiencia en atención al cliente y manejo de oficinas.",
          },
          {
            question: "¿Ofrecen servicio por horas o tiempo completo?",
            answer:
              "Ofrecemos ambas modalidades según las necesidades de cada empresa.",
          },
        ],

        cta: {
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Proceso de selección riguroso para garantizar el perfil adecuado",
          "Capacitación en protocolos de atención y servicio al cliente",
          "Personal uniformado con la imagen corporativa de tu empresa",
          "Evaluación periódica de desempeño y satisfacción",
          "Respaldo de una empresa constituida con más de 5 años de experiencia",
        ],

        seo: {
          metaTitle:
            "Servicio de recepción profesional en Barranquilla | Recepcionistas | Opera SAS",
          metaDescription:
            "Servicio de recepción profesional para empresas en Barranquilla. Recepcionistas capacitadas, atención al cliente y manejo de llamadas. Medio tiempo o completo. Solicita tu cotización.",
          keywords: [
            "recepcionista Barranquilla",
            "servicio de recepción empresarial",
            "recepcionista profesional",
            "atención al cliente corporativo",
            "personal de recepción",
            "outsourcing recepcionistas",
          ],
          ogTitle:
            "Servicio de recepción profesional en Barranquilla | Opera SAS",
          ogDescription:
            "La primera impresión de tu empresa con recepcionistas profesionales. Atención al cliente, manejo de llamadas y apoyo administrativo.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de una recepcionista colombiana profesional en la entrada de una oficina corporativa moderna en Barranquilla. Uniforme corporativo elegante con logo de Opera. Mostrador de recepción moderno. Sonrisa profesional y amable. Ambiente corporativo iluminado. Arquitectura de oficina colombiana. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "conserjeria",
        title: "Conserjería",
        description:
          "Gestión profesional de edificios: control de acceso, correspondencia y atención a residentes.",
        heroSubtitle:
          "Orden, seguridad y atención humana todos los días.",
        summary:
          "La conserjería es un servicio esencial para la seguridad y el buen funcionamiento de conjuntos residenciales, edificios corporativos e instituciones. Brindamos personal capacitado en control de acceso, recepción y gestión de correspondencia, atención a residentes y visitantes, vigilancia básica perimetral y apoyo en la administración de zonas comunes.",

        longDescription:
          "La conserjería es un servicio esencial para la seguridad y el buen funcionamiento de conjuntos residenciales, edificios corporativos e instituciones. Brindamos personal capacitado en control de acceso, recepción y gestión de correspondencia, atención a residentes y visitantes, vigilancia básica perimetral y apoyo en la administración de zonas comunes. Garantizamos orden, seguridad y una atención cordial que eleva la calidad de vida y la percepción del lugar.",

        image: {
          src: "/img/services/concierge.png",
          alt: "Conserje profesional",
        },

        sectors: ["Residencial", "Corporativo", "Instituciones", "Comercial"],
        icon: "concierge",

        includes: [
          "Control de acceso peatonal y vehicular",
          "Recepción y registro de correspondencia",
          "Atención a residentes, visitantes y proveedores",
          "Vigilancia básica perimetral",
          "Apoyo en mantenimiento de zonas comunes",
          "Reporte diario de novedades",
          "Gestión de paquetes y envíos",
          "Apoyo en eventos y mudanzas",
        ],

        benefits: [
          {
            title: "Seguridad y control",
            description:
              "Gestionamos el ingreso y salida de personas y vehículos con protocolos claros, reduciendo riesgos de seguridad.",
          },
          {
            title: "Atención humana de calidad",
            description:
              "Nuestros conserjes son capacitados en servicio al cliente, resolución de conflictos y comunicación asertiva.",
          },
          {
            title: "Tranquilidad para administradores",
            description:
              "Delegue la operación diaria en personal confiable con respaldo de una empresa legalmente constituida.",
          },
          {
            title: "Reportes y trazabilidad",
            description:
              "Cada novedad es registrada y reportada para mantener informada a la administración en todo momento.",
          },
        ],

        process: [
          {
            title: "Evaluación",
            description: "Analizamos las necesidades del edificio o conjunto.",
          },
          {
            title: "Selección",
            description: "Asignamos personal con el perfil adecuado.",
          },
          {
            title: "Implementación",
            description: "Iniciamos el servicio con protocolos establecidos.",
          },
          {
            title: "Supervisión",
            description: "Realizamos seguimiento continuo del servicio.",
          },
        ],

        faqs: [
          {
            question: "¿Atienden conjuntos residenciales?",
            answer:
              "Sí, trabajamos con conjuntos residenciales, edificios corporativos e instituciones.",
          },
          {
            question: "¿El servicio incluye uniforme?",
            answer:
              "Sí, nuestro personal asiste con uniforme completo y presentación impecable.",
          },
        ],

        cta: {
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Personal capacitado en control de acceso y atención al cliente",
          "Procesos estandarizados con reportes diarios de novedades",
          "Uniforme corporativo completo con imagen profesional",
          "Respaldo legal y operativo de una empresa constituida",
          "Supervisión periódica para garantizar calidad del servicio",
          "Más de 5 años de experiencia en administración de edificios",
        ],

        seo: {
          metaTitle:
            "Servicio de conserjería en Barranquilla | Conjuntos y edificios | Opera SAS",
          metaDescription:
            "Servicio profesional de conserjería para conjuntos residenciales y edificios corporativos en Barranquilla. Control de acceso, correspondencia y atención. Solicita tu cotización.",
          keywords: [
            "conserjería Barranquilla",
            "servicio de conserjería",
            "conserje profesional",
            "control de acceso edificios",
            "administración de conjuntos",
            "servicios para edificios",
          ],
          ogTitle:
            "Servicio de conserjería profesional en Barranquilla | Opera SAS",
          ogDescription:
            "Gestión profesional de edificios con control de acceso, correspondencia y atención a residentes. Personal capacitado y supervisión permanente.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de un conserje colombiano profesional en la entrada de un conjunto residencial moderno en Barranquilla. Uniforme corporativo azul con logo de Opera. Mostrador de conserjería ordenado. Controlando acceso de visitantes. Ambiente residencial colombiano. Iluminación natural del Caribe. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "salvavidas",
        title: "Salvavidas",
        description:
          "Seguridad acuática certificada con profesionales entrenados en rescate y primeros auxilios.",
        heroSubtitle:
          "Tranquilidad para tus espacios acuáticos.",
        summary:
          "La seguridad en espacios acuáticos no es opcional. Ofrecemos servicios de salvavidas profesionales con certificación vigente en primeros auxilios, RCP y rescate acuático. Nuestro personal garantiza la vigilancia permanente de bañistas en piscinas, clubes, centros recreativos y espacios acuáticos empresariales, previniendo accidentes y actuando de manera inmediata ante cualquier emergencia.",

        longDescription:
          "La seguridad en espacios acuáticos no es opcional. Ofrecemos servicios de salvavidas profesionales con certificación vigente en primeros auxilios, RCP y rescate acuático. Nuestro personal garantiza la vigilancia permanente de bañistas en piscinas, clubes, centros recreativos y espacios acuáticos empresariales, previniendo accidentes y actuando de manera inmediata y efectiva ante cualquier emergencia. Cumplimos con la normativa colombiana aplicable a espacios acuáticos de uso colectivo.",

        image: {
          src: "/img/services/life_jacket.png",
          alt: "Salvavidas profesional",
        },

        sectors: ["Residencial", "Hotelero", "Corporativo", "Recreativo"],
        icon: "lifeguard",

        includes: [
          "Vigilancia permanente de bañistas",
          "Prevención activa de accidentes",
          "Atención inmediata en primeros auxilios",
          "Rescate acuático certificado",
          "Control de acceso y normas de uso",
          "Reporte de novedades e incidentes",
          "Apoyo en programas de seguridad acuática",
          "Coordinación con administración del espacio",
        ],

        benefits: [
          {
            title: "Seguridad garantizada",
            description:
              "Reducimos drásticamente el riesgo de accidentes con vigilancia profesional permanente y capacitada.",
          },
          {
            title: "Personal certificado",
            description:
              "Todos nuestros salvavidas cuentan con certificaciones vigentes en rescate acuático, RCP y primeros auxilios.",
          },
          {
            title: "Tranquilidad para administradores",
            description:
              "Cumplimos con la normativa colombiana y brindamos respaldo legal y operativo a su espacio acuático.",
          },
          {
            title: "Respuesta inmediata",
            description:
              "Capacidad de reacción ante emergencias con protocolos establecidos y equipos de apoyo disponibles.",
          },
        ],

        process: [
          {
            title: "Selección",
            description: "Evaluamos y certificamos el perfil del salvavidas.",
          },
          {
            title: "Asignación",
            description: "Asignamos el personal según el horario requerido.",
          },
          {
            title: "Implementación",
            description: "Iniciamos el servicio con equipos y protocolos.",
          },
          {
            title: "Supervisión",
            description: "Realizamos seguimiento y evaluación continua.",
          },
        ],

        faqs: [
          {
            question: "¿Cuentan con certificación?",
            answer:
              "Sí, todo nuestro personal cuenta con certificación en salvamento acuático y primeros auxilios.",
          },
          {
            question: "¿Atienden eventos temporales?",
            answer:
              "Sí, ofrecemos servicios permanentes y temporales para eventos y temporadas.",
          },
        ],

        cta: {
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Todos nuestros salvavidas cuentan con certificaciones vigentes",
          "Personal entrenado en RCP, primeros auxilios y rescate acuático",
          "Cobertura en horarios diurnos, nocturnos y fines de semana",
          "Apoyo en la elaboración de planes de emergencia acuática",
          "Más de 5 años de experiencia en seguridad de espacios acuáticos",
        ],

        seo: {
          metaTitle:
            "Salvavidas profesionales en Barranquilla | Seguridad acuática | Opera SAS",
          metaDescription:
            "Servicio de salvavidas certificados en Barranquilla para piscinas, clubes y centros recreativos. Rescate acuático, RCP y primeros auxilios. Solicita tu cotización.",
          keywords: [
            "salvavidas Barranquilla",
            "servicio de salvavidas",
            "seguridad acuática",
            "salvavidas para piscinas",
            "rescate acuático",
            "primeros auxilios piscinas",
          ],
          ogTitle:
            "Salvavidas profesionales en Barranquilla | Opera SAS",
          ogDescription:
            "Seguridad acuática certificada con salvavidas profesionales. Rescate, RCP y primeros auxilios para piscinas, clubes y centros recreativos.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de un salvavidas colombiano profesional en una piscina en Barranquilla. Uniforme rojo con logo de Opera y silbato. Chaleco salvavidas. Postura alerta y profesional. Piscina con agua cristalina. Palmas y arquitectura tropical de fondo. Luz natural del Caribe. Composición horizontal premium. Sin texto. Sin marcas de agua.",
      },
      {
        slug: "aseo-corporativo-integral",
        title: "Aseo corporativo integral",
        description:
          "Soluciones completas de limpieza y mantenimiento para grandes superficies, corporaciones e instituciones.",
        heroSubtitle:
          "Un solo proveedor para todas tus necesidades de limpieza.",
        summary:
          "Diseñado para organizaciones que requieren un estándar superior de limpieza y mantenimiento en sus instalaciones. Ofrecemos un servicio integral que cubre limpieza profunda, mantenimiento preventivo, desinfección especializada, gestión de residuos y reportes periódicos. Ideal para sedes corporativas, centros comerciales, instituciones educativas y grandes superficies.",

        longDescription:
          "Diseñado para organizaciones que requieren un estándar superior de limpieza y mantenimiento en sus instalaciones. Ofrecemos un servicio integral que cubre limpieza profunda, mantenimiento preventivo, desinfección especializada, gestión de residuos y reportes periódicos. Ideal para sedes corporativas, centros comerciales, instituciones educativas, clínicas y grandes superficies que necesitan resultados consistentes, supervisión permanente y un socio confiable que garantice la mejor imagen institucional en todo momento.",

        image: {
          src: "/img/services/corporate_cleaning.png",
          alt: "Limpieza corporativa profesional",
        },

        sectors: ["Corporativo", "Industrial", "Instituciones", "Comercial", "Salud"],
        icon: "cleaning",

        includes: [
          "Limpieza integral de oficinas y áreas comunes",
          "Mantenimiento preventivo de instalaciones",
          "Desinfección especializada de superficies",
          "Gestión integral de residuos",
          "Supervisión permanente in situ",
          "Reportes periódicos de gestión",
          "Atención a emergencias de limpieza",
          "Personal de reemplazo garantizado",
        ],

        benefits: [
          {
            title: "Estándar corporativo de calidad",
            description:
              "Implementamos protocolos de limpieza exigentes para mantener instalaciones impecables 24/7, mejorando la imagen institucional.",
          },
          {
            title: "Cobertura total",
            description:
              "Un solo proveedor para todas las necesidades de limpieza y mantenimiento de su organización, simplificando la gestión administrativa.",
          },
          {
            title: "Tranquilidad operativa",
            description:
              "Supervisión in situ y reportes periódicos que garantizan resultados sin necesidad de microgestión por parte de su equipo.",
          },
          {
            title: "Planes personalizados",
            description:
              "Diseñamos el servicio según los horarios, flujos de trabajo y exigencias de cada instalación, incluyendo horarios nocturnos.",
          },
        ],

        process: [
          {
            title: "Auditoría",
            description: "Realizamos una auditoría completa de las instalaciones.",
          },
          {
            title: "Propuesta",
            description: "Diseñamos un plan corporativo a la medida.",
          },
          {
            title: "Implementación",
            description: "Ejecutamos el servicio con equipos especializados.",
          },
          {
            title: "Monitoreo",
            description: "Evaluamos resultados y hacemos mejoras continuas.",
          },
        ],

        faqs: [
          {
            question: "¿Manejan contratos corporativos?",
            answer:
              "Sí, trabajamos con contratos corporativos adaptados a cada organización.",
          },
          {
            question: "¿Ofrecen servicio de emergencia?",
            answer:
              "Sí, contamos con disponibilidad para atender requerimientos urgentes.",
          },
        ],

        cta: {
          label: "Solicitar asesoría",
          href: "/#contacto",
        },

        whyUs: [
          "Cobertura integral con un solo proveedor para toda la organización",
          "Supervisión in situ con personal dedicado a tu cuenta",
          "Protocolos de limpieza exigentes para estándares corporativos",
          "Reportes periódicos de gestión y satisfacción",
          "Capacidad operativa para grandes superficies y múltiples sedes",
          "Más de 5 años de experiencia en limpieza corporativa",
        ],

        seo: {
          metaTitle:
            "Aseo corporativo integral en Barranquilla | Limpieza empresarial | Opera SAS",
          metaDescription:
            "Servicio integral de aseo corporativo en Barranquilla para grandes superficies, oficinas e instituciones. Supervisión permanente, insumos incluidos y reportes. Solicita tu cotización.",
          keywords: [
            "aseo corporativo Barranquilla",
            "limpieza empresarial",
            "servicio de aseo para empresas",
            "limpieza de oficinas",
            "mantenimiento corporativo",
            "outsourcing de limpieza",
          ],
          ogTitle:
            "Aseo corporativo integral en Barranquilla | Opera SAS",
          ogDescription:
            "Soluciones completas de limpieza y mantenimiento para grandes superficies y corporaciones. Supervisión permanente y resultados garantizados.",
        },

        imagePrompt:
          "Fotografía ultra realista 8K de un equipo de limpieza corporativa colombiano en un edificio empresarial moderno en Barranquilla. Personal uniformado con overoles azules y logo de Opera. Realizando limpieza profesional en lobby corporativo. Pisos brillantes. Iluminación natural. Ambiente empresarial colombiano. Composición horizontal premium. Sin texto. Sin marcas de agua.",
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
    title: "Lo que otras empresas cobran por separado, con Opera lo tienes incluido.",
    highlight: "incluido",
    subtitle:
      "Los proveedores tradicionales facturan cada extra por separado. Opera integra personal capacitado, insumos, supervisión y garantía en un solo servicio, sin sorpresas en la factura.",
    othersLabel: "Proveedores tradicionales",
    operaLabel: "Opera",
    rows: [
      { feature: "Diagnóstico y visita técnica", others: "Con costo", opera: "Gratis" },
      { feature: "Insumos y equipos profesionales", others: "Se cobran aparte", opera: "Incluidos" },
      { feature: "Personal capacitado y uniformado", others: "No siempre", opera: "Siempre" },
      { feature: "Supervisión permanente del servicio", others: "Limitada", opera: "Incluida" },
      { feature: "Cobertura multisectorial", others: "Un solo sector", opera: "Corporativo, salud e industrial" },
      { feature: "Planes recurrentes y garantía", others: "Plan premium", opera: "Con plan a la medida", operaConditional: true },
      { feature: "App de seguimiento", others: "No incluye", opera: "Incluida" },
    ],
  },

  ctaBanner: {
    title: "¿Listo para transformar tus espacios?",
    subtitle:
      "Opera está lista para ayudarte con soluciones eficientes y profesionales.",
    cta: { label: "Contacto", href: "/#contacto" },
    background: { src: "/img/banner_2.png", alt: "Espacio de trabajo profesional" },
  },

  faq: {
    intro: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas rápidas a las preguntas que pueda tener",
    },
    items: [
      { question: "¿Qué tipos de servicios ofrece Opera?", answer: "Ofrecemos soluciones en aseo integral, cafetería, jardinería, limpieza de fachadas, limpieza y mantenimiento de piscinas y tratamiento especializado de pisos." },
      { question: "¿En qué zonas o ciudades prestan servicio?", answer: "Operamos en diferentes zonas según el tipo de servicio requerido. Puedes contactarnos para validar cobertura." },
      { question: "¿Atienden hogares y empresas?", answer: "Sí. Trabajamos con hogares, conjuntos residenciales, oficinas, empresas e instituciones." },
      { question: "¿El personal está capacitado y supervisado?", answer: "Sí. Contamos con personal capacitado y procesos supervisados para garantizar calidad y cumplimiento." },
      { question: "¿Cómo puedo solicitar una cotización?", answer: "Puedes contactarnos a través de WhatsApp, formulario web o nuestros canales de atención para recibir una cotización personalizada." },
      { question: "¿Ofrecen servicios programados o recurrentes?", answer: "Sí. Disponemos de planes periódicos y servicios continuos para empresas, conjuntos y espacios comerciales." },
      { question: "¿Los servicios se adaptan a cada necesidad?", answer: "Sí. Evaluamos cada espacio y diseñamos soluciones ajustadas a los requerimientos de cada cliente." },
      { question: "¿Cómo puedo comunicarme con el equipo de Opera?", answer: "Puedes escribirnos por WhatsApp, correo electrónico o mediante el formulario de contacto en nuestra página web." },
    ],
  },

  contact: {
    title: "Hablemos sobre tu próximo proyecto",
    subtitle: "Déjanos tus datos y te ayudaremos a encontrar la solución ideal para tu espacio.",
    image: { src: "/img/building_drawn.png", alt: "Plano arquitectónico de un edificio" },
    submitLabel: "Enviar",
  },
};