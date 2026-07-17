import type { AboutPageContent } from "@/types/content";

/**
 * "Quiénes somos" (about) page editorial content.
 *
 * Local editorial data, same as `content/home.ts`. When Sanity is connected,
 * an "About Page" document will provide this same shape and this file will be
 * replaced by a fetch inside `lib/content.ts` — no UI changes needed.
 *
 * Images point to local brand assets under `/public/img`.
 */

/** Social profiles shared across the team cards. */
const teamSocials: AboutPageContent["team"]["members"][number]["socials"] = [
  { platform: "linkedin", href: "https://www.linkedin.com" },
  { platform: "instagram", href: "https://www.instagram.com" },
  { platform: "facebook", href: "https://www.facebook.com" },
];

export const aboutContent: AboutPageContent = {
  hero: {
    title: "Calidad, eficiencia y confianza en cada detalle",
    highlight: "confianza",
    subtitle:
      "En Opera ofrecemos soluciones a medida que simplifican tu día a día y potencian lo que más importa: tu tranquilidad.",
    cta: { label: "Comenzar", href: "/#contacto" },
    image: {
      src: "/img/banner_about_us.png?v=2",
      alt: "Equipo de Opera reunido en una oficina",
    },
  },

  statement: {
    text: "En Opera trabajamos para crear espacios que funcionen mejor, se vean mejor y transmitan confianza en cada detalle.",
    background: {
      src: "/img/lobby_banner_about_us.png?v=2",
      alt: "Lobby corporativo moderno",
    },
  },

  values: {
    eyebrow: "Valores que definen nuestra forma de trabajar",
    title:
      "Pequeños detalles, altos estándares y soluciones pensadas para generar confianza en cada espacio.",
    intro:
      "En Opera creemos que los espacios bien gestionados generan mejores experiencias, transmiten confianza y permiten que las personas y empresas se enfoquen en lo verdaderamente importante.",
    items: [
      {
        number: "01",
        title: "Calidad en cada detalle",
        description:
          "Cuidamos cada proceso y ejecución para garantizar espacios funcionales, organizados y con altos estándares visuales.",
      },
      {
        number: "02",
        title: "Compromiso y cumplimiento",
        description:
          "Trabajamos con responsabilidad, puntualidad y enfoque en ofrecer soluciones confiables que generen tranquilidad.",
      },
      {
        number: "03",
        title: "Atención personalizada",
        description:
          "Entendemos que cada espacio y cada cliente tienen necesidades diferentes, por eso adaptamos nuestras soluciones a cada proyecto.",
      },
      {
        number: "04",
        title: "Eficiencia operativa",
        description:
          "Optimizamos procesos y coordinamos múltiples servicios de forma práctica, moderna y eficiente.",
      },
    ],
  },

  mission: {
    title: "Nuestra misión",
    paragraphs: [
      "En Opera trabajamos para transformar espacios en entornos más funcionales, organizados y eficientes. Nuestra misión es ofrecer soluciones integrales que simplifiquen operaciones, mejoren la experiencia de las personas y generen confianza en cada detalle.",
      "A través de un enfoque moderno, profesional y orientado a la calidad, buscamos convertirnos en un aliado estratégico para empresas y proyectos que valoran el orden, la imagen y el buen funcionamiento de sus espacios.",
    ],
    bullets: [
      "Soluciones integrales adaptadas a cada espacio",
      "Calidad y atención en cada detalle",
      "Procesos organizados y eficientes",
      "Compromiso con el cumplimiento",
    ],
    image: {
      src: "/img/mission.png",
      alt: "Profesional de Opera en terreno",
    },
  },

  vision: {
    title: "Nuestra visión",
    paragraphs: [
      "En Opera buscamos convertirnos en una referencia en soluciones integrales para espacios y operaciones, destacándonos por nuestra calidad, eficiencia y enfoque moderno.",
      "Nuestra visión es construir relaciones de confianza a largo plazo, ofreciendo servicios que evolucionen junto a las necesidades de cada cliente y contribuyan a crear entornos más funcionales, organizados y sostenibles.",
    ],
    bullets: [
      "Ser un aliado estratégico para cada cliente",
      "Liderar con estándares modernos y eficientes",
      "Construir relaciones basadas en confianza",
      "Impulsar espacios más funcionales y organizados",
    ],
    image: {
      src: "/img/vission.png",
      alt: "Profesional supervisando una obra",
    },
  },

  whyUs: {
    title: "¿Por qué elegir nuestros servicios?",
    body: "En Opera combinamos atención al detalle, soluciones integrales y un enfoque moderno para ofrecer servicios confiables y adaptados a cada necesidad. Trabajamos con compromiso, organización y altos estándares de calidad para garantizar espacios funcionales, bien gestionados y alineados con las expectativas de cada cliente.",
  },

  team: {
    eyebrow: "Nuestro equipo",
    title: "Conozca a las personas detrás del producto.",
    members: [
      {
        name: "Yesid Clavijo",
        image: { src: "/img/team/yesid.png", alt: "Yesid Clavijo" },
        role: "CEO",
        specialties: "Dirección estratégica · Gestión operativa · Desarrollo de negocio",
        bio: "Lidera la visión de Opera con más de 5 años de experiencia en servicios integrales para empresas e instituciones. Enfocado en calidad, cumplimiento y confianza como pilares de cada proyecto.",
        years: "+5 años",
        technologies: ["Liderazgo", "Planeación estratégica", "Gestión de equipos"],
        socials: teamSocials
      },
      {
        name: "Leonardo Movilla",
        image: { src: "/img/team/leonardo.jpg", alt: "Leonardo Movilla" },
        role: "Abogado corporativo",
        specialties: "Asesoría legal · Contratación · Protección de datos",
        bio: "Especializado en asesoría jurídica para empresas del sector servicios. Aporta solidez legal y cumplimiento normativo a cada contrato y operación de Opera.",
        years: "+10 años",
        technologies: ["Derecho corporativo", "Cumplimiento normativo", "Contract Law"],
        socials: teamSocials
      },
      {
        name: "Jennifer Clavijo",
        image: { src: "/img/team/jennifer.jpg", alt: "Jennifer Clavijo" },
        role: "COO",
        specialties: "Operaciones · Optimización · Calidad",
        bio: "Dirige la ejecución operativa de Opera garantizando calidad, eficiencia y satisfacción del cliente en cada proyecto. Experta en gestión de equipos y mejora continua de procesos.",
        years: "+5 años",
        technologies: ["Gestión de operaciones", "Control de calidad", "Liderazgo de equipos"],
        socials: teamSocials
      },
    ],
  },
};