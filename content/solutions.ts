import { whatsAppUrl } from "@/lib/whatsapp";
import type { Service, SolutionsPageContent } from "@/types/content";

/**
 * ──────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH — all service data lives here.
 *  `content/home.ts` imports `services` from this file.
 *  ──────────────────────────────────────────────────────────
 */

const teamSocials = [
  { platform: "linkedin" as const, href: "https://www.linkedin.com" },
  { platform: "instagram" as const, href: "https://www.instagram.com" },
  { platform: "facebook" as const, href: "https://www.facebook.com" },
];

export const services: Service[] = [
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
      "Ofrecemos un servicio integral de aseo, desinfección y cafetería diseñado para empresas, instituciones y conjuntos residenciales que requieren estándares de limpieza exigentes. Nuestro equipo capacitado sigue procesos estandarizados que garantizan resultados consistentes, higiénicos y profesionales en cada intervención.",
    image: { src: "/img/services/restroom.png", alt: "Servicio de aseo integral" },
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
      { title: "Ambientes saludables certificados", description: "Reducimos la carga bacteriana y mejoramos la calidad del aire con protocolos avalados." },
      { title: "Personal capacitado y verificado", description: "Cada miembro del equipo recibe formación continua en limpieza profesional y atención al cliente." },
      { title: "Planes flexibles", description: "Diseñamos frecuencias y alcances adaptados a la operación de cada organización sin interrumpir sus actividades." },
      { title: "Supervisión y control de calidad", description: "Contamos con supervisión permanente y encuestas de satisfacción para garantizar resultados." },
    ],
    process: [
      { title: "Evaluación", description: "Analizamos las necesidades de limpieza del cliente." },
      { title: "Programación", description: "Definimos horarios y frecuencia del servicio." },
      { title: "Prestación del servicio", description: "Ejecutamos las labores con supervisión constante." },
      { title: "Seguimiento", description: "Verificamos la satisfacción y calidad del servicio." },
    ],
    faqs: [
      { question: "¿El servicio incluye insumos?", answer: "Sí, podemos incluir todos los insumos necesarios según el contrato." },
      { question: "¿Atienden oficinas y edificios?", answer: "Sí, prestamos servicio a empresas, instituciones y conjuntos residenciales." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: [
      "Procesos estandarizados con protocolos de desinfección avalados",
      "Personal uniformado, capacitado y afiliado a seguridad social",
      "Supervisión in situ con reportes periódicos de gestión",
    ],
    seo: {
      metaTitle: "Aseo integral empresarial en Barranquilla | Opera SAS",
      metaDescription: "Servicio profesional de aseo, desinfección y cafetería para empresas en Barranquilla.",
      keywords: ["aseo integral empresarial Barranquilla", "limpieza profesional empresas"],
      ogTitle: "Aseo integral empresarial en Barranquilla | Opera SAS",
      ogDescription: "Transformamos tus espacios con limpieza profesional, desinfección y cafetería.",
    },
  },
  {
    slug: "limpieza-fachadas",
    title: "Limpieza profesional de fachadas",
    description: "Restauramos la imagen de tu edificio con técnicas especializadas y trabajo seguro en altura.",
    heroSubtitle: "La primera impresión de tu empresa comienza por su fachada.",
    summary: "Devolvemos el brillo a la fachada de tu edificio utilizando equipos hidrolavadores y personal certificado.",
    longDescription: "La fachada de tu edificio es la primera impresión que proyectas al mercado. Realizamos limpieza profesional en vidrio, aluminio, concreto y otros revestimientos utilizando equipos de última tecnología.",
    image: { src: "/img/services/clean_front.jpg", alt: "Fachada de edificio de vidrio" },
    sectors: ["Corporativo", "Industrial", "Instituciones", "Comercial"],
    icon: "facade",
    includes: ["Limpieza de vidrios y cristales templados", "Lavado de fachadas en aluminio y ACM", "Limpieza de concreto y revestimientos", "Equipos hidrolavadores y andamios certificados", "Protocolos de seguridad en altura", "Personal certificado con ARL vigente"],
    benefits: [
      { title: "Imagen corporativa renovada", description: "Una fachada impecable transmite profesionalismo y cuidado." },
      { title: "Protección del patrimonio", description: "La limpieza periódica previene el desgaste prematuro." },
      { title: "Trabajo seguro y certificado", description: "Cumplimos con todos los protocolos de seguridad en altura." },
      { title: "Menor frecuencia de mantenimiento", description: "Un tratamiento profesional reduce la recurrencia de limpiezas." },
    ],
    process: [
      { title: "Inspección", description: "Identificamos el tipo de superficie y suciedad." },
      { title: "Preparación", description: "Seleccionamos equipos y productos adecuados." },
      { title: "Limpieza", description: "Realizamos el proceso con técnicas especializadas." },
      { title: "Control de calidad", description: "Verificamos el resultado final antes de entregar." },
    ],
    faqs: [
      { question: "¿Trabajan en alturas?", answer: "Sí, contamos con personal capacitado y equipos certificados." },
      { question: "¿Cada cuánto se recomienda limpiar una fachada?", answer: "Se recomienda entre una y dos veces por año." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Personal certificado para trabajo en altura", "Equipos profesionales y productos biodegradables", "Diagnóstico sin costo con reporte fotográfico"],
    seo: {
      metaTitle: "Limpieza profesional de fachadas en Barranquilla | Opera SAS",
      metaDescription: "Limpieza de fachadas en Barranquilla: vidrio, aluminio, concreto. Trabajo seguro en altura.",
      keywords: ["limpieza de fachadas Barranquilla", "lavado de fachadas"],
      ogTitle: "Limpieza profesional de fachadas en Barranquilla | Opera SAS",
      ogDescription: "Restauramos la imagen de tu edificio con limpieza profesional en altura.",
    },
  },
  {
    slug: "tratamiento-pisos",
    title: "Tratamiento y restauración de pisos",
    description: "Recuperamos la belleza y resistencia original de todo tipo de superficies con procesos especializados.",
    heroSubtitle: "Pisos que reflejan la calidad de tu espacio.",
    summary: "Los pisos son una de las superficies más visibles. Ofrecemos cristalizado, sellado, abrillantado y mantenimiento.",
    longDescription: "Ofrecemos servicios de limpieza profunda, cristalizado, sellado, abrillantado para pisos en mármol, granito, porcelanato y más.",
    image: { src: "/img/services/floor_treatment.jpg", alt: "Piso pulido y tratado" },
    sectors: ["Corporativo", "Salud", "Residencial", "Comercial"],
    icon: "floor",
    includes: ["Limpieza profunda con máquinas especializadas", "Cristalizado de mármol y granito", "Sellado de porcelanato y cerámica", "Abrillantado de superficies", "Pulido y nivelación", "Mantenimiento preventivo programado"],
    benefits: [
      { title: "Recuperación estética inmediata", description: "Devolvemos el brillo original a cualquier tipo de piso." },
      { title: "Prolongación de vida útil", description: "Los tratamientos protectores evitan el desgaste prematuro." },
      { title: "Procesos para cada material", description: "Diagnosticamos y aplicamos el tratamiento adecuado sin riesgo." },
      { title: "Reducción de costos", description: "Un piso bien mantenido retrasa la necesidad de cambiarlo." },
    ],
    process: [
      { title: "Evaluación", description: "Analizamos el tipo y estado del piso." },
      { title: "Preparación", description: "Realizamos limpieza y acondicionamiento." },
      { title: "Tratamiento", description: "Aplicamos el proceso especializado." },
      { title: "Protección", description: "Finalizamos con acabados protectores." },
    ],
    faqs: [
      { question: "¿Qué tipos de pisos manejan?", answer: "Mármol, granito, porcelanato, cerámica, vinilo." },
      { question: "¿Se puede recuperar el brillo de un piso antiguo?", answer: "Sí, dependiendo del estado y material." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Diagnóstico sin costo", "Maquinaria especializada", "Técnicos capacitados", "Garantía de satisfacción"],
    seo: {
      metaTitle: "Tratamiento y restauración de pisos en Barranquilla | Opera SAS",
      metaDescription: "Cristalizado, pulido, sellado y abrillantado de pisos en Barranquilla.",
      keywords: ["tratamiento de pisos Barranquilla", "cristalizado de mármol"],
      ogTitle: "Tratamiento y restauración de pisos en Barranquilla | Opera SAS",
      ogDescription: "Recuperamos la belleza original de tus pisos con procesos profesionales.",
    },
  },
  {
    slug: "jardineria",
    title: "Mantenimiento de zonas verdes",
    description: "Diseñamos y mantenemos espacios naturales que mejoran la calidad ambiental y la imagen institucional.",
    heroSubtitle: "Naturaleza que habla bien de tu empresa.",
    summary: "Brindamos servicios integrales de jardinería: poda, siembra, fertilización y control fitosanitario.",
    longDescription: "Las zonas verdes bien cuidadas son un diferenciador clave. Trabajamos con técnicas para la región Caribe.",
    image: { src: "/img/services/gardening.jpg", alt: "Jardín cuidado profesionalmente" },
    sectors: ["Residencial", "Corporativo", "Instituciones", "Hotelero"],
    icon: "gardening",
    includes: ["Poda de árboles y césped", "Siembra de especies ornamentales", "Fertilización orgánica", "Control fitosanitario", "Diseño paisajístico", "Riego programado"],
    benefits: [
      { title: "Imagen institucional mejorada", description: "Áreas verdes cuidadas proyectan profesionalismo." },
      { title: "Bienestar laboral", description: "Espacios naturales mejoran calidad del aire y temperatura." },
      { title: "Mantenimiento especializado", description: "Técnicas para el clima de la región Caribe." },
      { title: "Conservación del entorno", description: "Prácticas sostenibles con el medio ambiente." },
    ],
    process: [
      { title: "Inspección", description: "Evaluamos el estado de las zonas verdes." },
      { title: "Plan de mantenimiento", description: "Definimos las actividades necesarias." },
      { title: "Intervención", description: "Ejecutamos poda, siembra y mantenimiento." },
      { title: "Seguimiento", description: "Verificamos el crecimiento y estado." },
    ],
    faqs: [
      { question: "¿Atienden jardines empresariales?", answer: "Sí, trabajamos con empresas e instituciones." },
      { question: "¿Realizan mantenimiento periódico?", answer: "Sí, ofrecemos planes programados." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Técnicas para clima Caribe", "Personal en paisajismo", "Fertilizantes orgánicos", "Planes programados"],
    seo: {
      metaTitle: "Mantenimiento de zonas verdes en Barranquilla | Opera SAS",
      metaDescription: "Jardinería profesional: poda, siembra y diseño paisajístico para empresas en Barranquilla.",
      keywords: ["jardinería Barranquilla", "mantenimiento de zonas verdes"],
      ogTitle: "Mantenimiento de zonas verdes en Barranquilla | Opera SAS",
      ogDescription: "Transformamos espacios verdes con jardinería profesional.",
    },
  },
  {
    slug: "limpieza-mantenimiento-piscinas",
    title: "Mantenimiento profesional de piscinas",
    description: "Garantizamos agua cristalina y condiciones óptimas con tratamiento químico y limpieza programada.",
    heroSubtitle: "Agua cristalina, segura y lista para disfrutar.",
    summary: "Mantenimiento integral: análisis de agua, tratamiento químico, limpieza de filtros y equipos.",
    longDescription: "Una piscina mal mantenida es un riesgo para la salud. Brindamos servicio integral con agua cristalina y condiciones óptimas.",
    image: { src: "/img/services/pool_maintenance.png", alt: "Piscina limpia y cristalina" },
    sectors: ["Residencial", "Hotelero", "Corporativo", "Recreativo"],
    icon: "pool",
    includes: ["Limpieza de superficies y fondo", "Tratamiento químico balanceado", "Mantenimiento de bombas y filtros", "Control de algas", "Revisión de equipos", "Programación semanal"],
    benefits: [
      { title: "Agua saludable y cristalina", description: "Parámetros químicos óptimos para baño seguro." },
      { title: "Equipos protegidos", description: "Mantenimiento preventivo alarga vida útil." },
      { title: "Cumplimiento normativo", description: "Estándares de calidad del agua exigidos." },
      { title: "Tranquilidad operativa", description: "Delegue el cuidado en profesionales certificados." },
    ],
    process: [
      { title: "Evaluación", description: "Analizamos el estado del agua y equipos." },
      { title: "Tratamiento", description: "Aplicamos químicos y realizamos limpieza." },
      { title: "Mantenimiento", description: "Seguimiento periódico programado." },
      { title: "Control de calidad", description: "Verificamos parámetros del agua." },
    ],
    faqs: [
      { question: "¿Cada cuánto se debe realizar mantenimiento?", answer: "Recomendamos mantenimiento semanal." },
      { question: "¿Manejan piscinas comerciales?", answer: "Sí, también trabajamos con piscinas empresariales." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Técnicos en tratamiento químico", "Productos certificados", "Análisis del agua profesional", "Programación flexible"],
    seo: {
      metaTitle: "Mantenimiento de piscinas en Barranquilla | Opera SAS",
      metaDescription: "Mantenimiento profesional de piscinas. Tratamiento químico y limpieza programada.",
      keywords: ["mantenimiento de piscinas Barranquilla", "limpieza de piscinas"],
      ogTitle: "Mantenimiento profesional de piscinas en Barranquilla | Opera SAS",
      ogDescription: "Agua cristalina con mantenimiento profesional.",
    },
  },
  {
    slug: "recepcionista",
    title: "Servicio de recepción",
    description: "La primera impresión de tu empresa: atención profesional, cálida y organizada.",
    heroSubtitle: "Tu mejor carta de presentación, todos los días.",
    summary: "Recepcionistas profesionales capacitadas en atención al cliente, manejo de llamadas y apoyo administrativo.",
    longDescription: "La recepción es el primer contacto con tus visitantes. Personal capacitado que proyecta una imagen corporativa profesional.",
    image: { src: "/img/services/receptionist.png", alt: "Recepcionista profesional" },
    sectors: ["Corporativo", "Salud", "Instituciones", "Hotelero"],
    icon: "reception",
    includes: ["Atención presencial a visitantes", "Gestión de llamadas", "Recepción y registro", "Apoyo administrativo", "Personal uniformado", "Horarios flexibles"],
    benefits: [
      { title: "Imagen corporativa consistente", description: "Proyecta orden y confianza desde el primer contacto." },
      { title: "Atención especializada", description: "Personal entrenado en servicio al cliente." },
      { title: "Flexibilidad operativa", description: "Horarios adaptados a cada empresa." },
      { title: "Reducción de carga administrativa", description: "Libera a tu equipo para su core de negocio." },
    ],
    process: [
      { title: "Selección", description: "Perfil adecuado para tu empresa." },
      { title: "Capacitación", description: "Protocolos de atención y servicio." },
      { title: "Implementación", description: "Integración a tus instalaciones." },
      { title: "Seguimiento", description: "Evaluación de desempeño periódica." },
    ],
    faqs: [
      { question: "¿El personal cuenta con experiencia?", answer: "Sí, capacitado en atención al cliente." },
      { question: "¿Ofrecen medio tiempo?", answer: "Ofrecemos ambas modalidades." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Selección rigurosa", "Capacitación en protocolos", "Evaluación periódica", "Respaldo de empresa constituida"],
    seo: {
      metaTitle: "Servicio de recepción profesional en Barranquilla | Opera SAS",
      metaDescription: "Recepcionistas profesionales para empresas en Barranquilla.",
      keywords: ["recepcionista Barranquilla", "servicio de recepción"],
      ogTitle: "Servicio de recepción profesional | Opera SAS",
      ogDescription: "La primera impresión de tu empresa con profesionales.",
    },
  },
  {
    slug: "conserjeria",
    title: "Conserjería",
    description: "Gestión profesional de edificios: control de acceso, correspondencia y atención a residentes.",
    heroSubtitle: "Orden, seguridad y atención humana todos los días.",
    summary: "Personal capacitado en control de acceso, recepción, correspondencia y vigilancia básica.",
    longDescription: "Servicio esencial para la seguridad de conjuntos residenciales y edificios corporativos.",
    image: { src: "/img/services/concierge.png", alt: "Conserje profesional" },
    sectors: ["Residencial", "Corporativo", "Instituciones", "Comercial"],
    icon: "concierge",
    includes: ["Control de acceso peatonal y vehicular", "Recepción de correspondencia", "Atención a residentes", "Vigilancia básica", "Apoyo en zonas comunes", "Reporte de novedades"],
    benefits: [
      { title: "Seguridad y control", description: "Gestión de ingreso con protocolos claros." },
      { title: "Atención humana de calidad", description: "Capacitados en servicio al cliente." },
      { title: "Tranquilidad", description: "Personal confiable con respaldo empresarial." },
      { title: "Reportes", description: "Novedades registradas y reportadas." },
    ],
    process: [
      { title: "Evaluación", description: "Analizamos necesidades del edificio." },
      { title: "Selección", description: "Personal con perfil adecuado." },
      { title: "Implementación", description: "Inicio del servicio con protocolos." },
      { title: "Supervisión", description: "Seguimiento continuo." },
    ],
    faqs: [
      { question: "¿Atienden conjuntos residenciales?", answer: "Sí." },
      { question: "¿Incluye uniforme?", answer: "Sí, uniforme completo." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Personal capacitado", "Reportes diarios", "Uniforme corporativo", "Supervisión periódica"],
    seo: {
      metaTitle: "Servicio de conserjería en Barranquilla | Opera SAS",
      metaDescription: "Conserjería profesional para conjuntos y edificios corporativos.",
      keywords: ["conserjería Barranquilla", "conserje profesional"],
      ogTitle: "Servicio de conserjería profesional | Opera SAS",
      ogDescription: "Gestión profesional de edificios.",
    },
  },
  {
    slug: "salvavidas",
    title: "Salvavidas",
    description: "Seguridad acuática certificada con profesionales entrenados en rescate y primeros auxilios.",
    heroSubtitle: "Tranquilidad para tus espacios acuáticos.",
    summary: "Salvavidas certificados en primeros auxilios, RCP y rescate acuático.",
    longDescription: "Seguridad en espacios acuáticos con personal certificado y normativa colombiana vigente.",
    image: { src: "/img/services/life_jacket.png", alt: "Salvavidas profesional" },
    sectors: ["Residencial", "Hotelero", "Corporativo", "Recreativo"],
    icon: "lifeguard",
    includes: ["Vigilancia permanente", "Prevención de accidentes", "Primeros auxilios", "Rescate acuático", "Control de acceso", "Reporte de incidentes"],
    benefits: [
      { title: "Seguridad garantizada", description: "Reducción de riesgo de accidentes." },
      { title: "Personal certificado", description: "Rescate, RCP y primeros auxilios." },
      { title: "Tranquilidad", description: "Cumplimiento normativo colombiano." },
      { title: "Respuesta inmediata", description: "Protocolos establecidos ante emergencias." },
    ],
    process: [
      { title: "Selección", description: "Evaluación y certificación del perfil." },
      { title: "Asignación", description: "Según horario requerido." },
      { title: "Implementación", description: "Inicio con equipos y protocolos." },
      { title: "Supervisión", description: "Seguimiento y evaluación continua." },
    ],
    faqs: [
      { question: "¿Cuentan con certificación?", answer: "Sí, en salvamento y primeros auxilios." },
      { question: "¿Atienden eventos temporales?", answer: "Sí, temporales y permanentes." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Certificaciones vigentes", "Entrenamiento en RCP", "Cobertura en horarios flexibles", "Planes de emergencia"],
    seo: {
      metaTitle: "Salvavidas profesionales en Barranquilla | Opera SAS",
      metaDescription: "Salvavidas certificados para piscinas, clubes y centros recreativos.",
      keywords: ["salvavidas Barranquilla", "seguridad acuática"],
      ogTitle: "Salvavidas profesionales | Opera SAS",
      ogDescription: "Seguridad acuática certificada.",
    },
  },
  {
    slug: "aseo-corporativo-integral",
    title: "Aseo corporativo integral",
    description: "Soluciones completas de limpieza y mantenimiento para grandes superficies, corporaciones e instituciones.",
    heroSubtitle: "Un solo proveedor para todas tus necesidades de limpieza.",
    summary: "Limpieza profunda, mantenimiento preventivo, desinfección, gestión de residuos y reportes.",
    longDescription: "Estándar superior de limpieza para sedes corporativas, centros comerciales e instituciones.",
    image: { src: "/img/services/corporate_cleaning.png", alt: "Limpieza corporativa" },
    sectors: ["Corporativo", "Industrial", "Instituciones", "Comercial", "Salud"],
    icon: "cleaning",
    includes: ["Limpieza integral de oficinas", "Mantenimiento preventivo", "Desinfección especializada", "Gestión de residuos", "Supervisión in situ", "Reportes de gestión"],
    benefits: [
      { title: "Estándar corporativo", description: "Protocolos exigentes 24/7." },
      { title: "Cobertura total", description: "Un proveedor para todas las necesidades." },
      { title: "Tranquilidad operativa", description: "Supervisión in situ con reportes." },
      { title: "Planes personalizados", description: "Según horarios y exigencias." },
    ],
    process: [
      { title: "Auditoría", description: "Evaluación completa de instalaciones." },
      { title: "Propuesta", description: "Plan corporativo a la medida." },
      { title: "Implementación", description: "Servicio con equipos especializados." },
      { title: "Monitoreo", description: "Mejoras continuas." },
    ],
    faqs: [
      { question: "¿Manejan contratos corporativos?", answer: "Sí." },
      { question: "¿Ofrecen servicio de emergencia?", answer: "Sí, disponibilidad para urgencias." },
    ],
    cta: { label: "Solicitar asesoría", href: "/#contacto" },
    whyUs: ["Un solo proveedor", "Supervisión in situ", "Protocolos exigentes", "Capacidad para grandes superficies"],
    seo: {
      metaTitle: "Aseo corporativo integral en Barranquilla | Opera SAS",
      metaDescription: "Limpieza empresarial para grandes superficies y corporaciones.",
      keywords: ["aseo corporativo Barranquilla", "limpieza empresarial"],
      ogTitle: "Aseo corporativo integral | Opera SAS",
      ogDescription: "Soluciones de limpieza para grandes superficies.",
    },
  },
];

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
        src: "/img/services/floor_treatment.jpg",
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
        src: "/img/services/pool_maintenance.png",
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
        image: { src: "/img/sectors/institutions.png", alt: "Institución educativa" },
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