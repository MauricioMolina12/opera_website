/**
 * Content models for the Opera website.
 *
 * These types are the single source of truth for the shape of all editorial
 * content. Today the data is supplied from local files under `/content`, but
 * these same interfaces are what the Sanity CMS schemas will map onto, so the
 * UI components never need to change when the data source is swapped.
 *
 * Keep these framework-agnostic: no React, no Next.js imports.
 */

/** A reference to an image, decoupled from where it is hosted. */
export interface ImageRef {
  /** Absolute URL (CDN today, Sanity asset URL later) or local /public path. */
  src: string;
  /** Required for accessibility; describe the image content. */
  alt: string;
  /** Optional intrinsic size — used to avoid layout shift for remote images. */
  width?: number;
  height?: number;
}

/** A call-to-action button/link. */
export interface CTA {
  label: string;
  href?: string;
  /** Visual emphasis. Defaults to "primary" when omitted. */
  variant?: "primary" | "secondary" | "ghost";
  /** Whether the link points to an external site (opens in a new tab). */
  external?: boolean;
  onClick?:  () => void;
}

/** A navigation entry used in the header and footer. */
export interface NavItem {
  label: string;
  href: string;
}

/* ------------------------------------------------------------------ *
 * Site-wide configuration
 * ------------------------------------------------------------------ */

export interface SocialLink {
  /** Used to pick the icon and for accessibility labels. */
  platform: "linkedin" | "instagram" | "facebook" | "youtube" | "whatsapp";
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  /** Human-readable location, e.g. "Barranquilla, Atlántico". */
  location: string;
  /** Pre-built WhatsApp deep link (optional). */
  whatsappUrl?: string;
}

/** A titled group of links shown in the footer. */
export interface FooterColumn {
  title: string;
  links: NavItem[];
}

export interface SiteConfig {
  /** Brand display name, e.g. "OPERA". */
  name: string;
  /** Short tagline shown near the logo / in the footer. */
  tagline: string;
  /** Primary navigation shown in the header. */
  nav: NavItem[];
  /** Header call-to-action (e.g. "Contacto"). */
  headerCta: CTA;
  contact: ContactInfo;
  socials: SocialLink[];
  footerColumns: FooterColumn[];
  /** Bottom-bar legal links. */
  legalLinks: NavItem[];
}

/* ------------------------------------------------------------------ *
 * Domain entities
 * ------------------------------------------------------------------ */

/** A service Opera offers (e.g. "Obras civiles"). */
export interface Service {
  slug: string;
  title: string;

  description: string;
  longDescription: string;

  image: ImageRef;

  sectors?: string[];

  icon?: string;

  includes: string[];

  benefits: {
    title: string;
    description: string;
  }[];

  process?: {
    title: string;
    description: string;
  }[];

  gallery?: ImageRef[];

  faqs?: {
    question: string;
    answer: string;
  }[];

  cta?: CTA;
}
/** A headline statistic (e.g. "100% Excelencia"). */
export interface Stat {
  /** The big number/value, e.g. "100%", "+5", "+250". */
  value: string;
  /** Short label, e.g. "Excelencia". */
  label: string;
  /** Supporting sentence under the label. */
  description: string;
}

/** A step in the "how we work" process timeline. */
export interface ProcessStep {
  /** Two-digit order label shown in the design, e.g. "01". */
  number: string;
  title: string;
  description: string;
}

/** A frequently-asked question. */
export interface FaqItem {
  question: string;
  answer: string;
}

/** A core value shown as a numbered card (e.g. "01 Calidad en cada detalle"). */
export interface ValueItem {
  /** Two-digit order label, e.g. "01". */
  number: string;
  title: string;
  description: string;
}

/** A person in the "meet the team" grid. */
export interface TeamMember {
  name: string;
  role: string;
  /** Optional portrait; when omitted the UI renders an initials avatar. */
  image?: ImageRef;
  /** Social profiles shown under the card. */
  socials?: SocialLink[];
}

/* ------------------------------------------------------------------ *
 * Page-level content
 * ------------------------------------------------------------------ */

export interface HeroContent {
  title: string;
  /** Word(s) within the title to visually emphasize. */
  highlight?: string;
  subtitle: string;
  background: ImageRef;
  primaryCta: CTA;
  secondaryCta?: CTA;
}

export interface AboutContent {
  title: string;
  body: string;
  cta?: CTA;
}

export interface SectionIntro {
  /** Small label above the heading. */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: CTA;
  event?: () => void;
}

export interface ContactSectionContent {
  title: string;
  subtitle: string;
  /** Decorative/illustrative image beside the form. */
  image: ImageRef;
  /** Submit button label. */
  submitLabel: string;
}

export interface CtaBannerContent {
  title: string;
  subtitle?: string;
  cta: CTA;
  background?: ImageRef;
}

/** A highlighted solution shown as a carousel slide (e.g. "Superficies"). */
export interface SolutionHighlight {
  /** Small uppercase category label, e.g. "Superficies". */
  eyebrow: string;
  title: string;
  /** Ordered benefit statements, rendered as numbered cards. */
  benefits: string[];
  image: ImageRef;
}

/** A single row in the "Cómo nos comparamos" table. */
export interface ComparisonRow {
  /** The capability/feature being compared. */
  feature: string;
  /** How traditional providers handle it (rendered as a "missing" value). */
  others: string;
  /** How Opera handles it (rendered as an "included" value). */
  opera: string;
  /**
   * When true, Opera's value is shown as a neutral badge (e.g. "Con plan")
   * rather than a solid "included" check — mirrors the reference design.
   */
  operaConditional?: boolean;
}

/** "Cómo nos comparamos" comparison section. */
export interface ComparisonContent {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  /** Column header for the "other providers" column. */
  othersLabel: string;
  /** Column header for the Opera column. */
  operaLabel: string;
  rows: ComparisonRow[];
}

/** A sector Opera serves (e.g. "Corporativo"), shown as an image card. */
export interface SectorItem {
  title: string;
  description: string;
  image: ImageRef;
  cta: CTA;
}

/** Everything rendered on the "solutions" page, in display order. */
export interface SolutionsPageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: CTA;
    image: ImageRef;
  };
  highlights: SolutionHighlight[];
  sectors: {
    eyebrow?: string;
    title: string;
    items: SectorItem[];
  };
  ctaBanner: CtaBannerContent;
  faq: {
    intro: SectionIntro;
    items: FaqItem[];
  };
}

/** A mission/vision-style block: copy + checklist beside an image. */
export interface FeatureBlock {
  /** Small label above the title. */
  eyebrow?: string;
  title: string;
  /** One or more body paragraphs. */
  paragraphs: string[];
  /** Checklist items rendered with a check icon. */
  bullets: string[];
  image: ImageRef;
}

/** Everything rendered on the "Quiénes somos" (about) page, in display order. */
export interface AboutPageContent {
  hero: {
    title: string;
    /** Word(s) within the title to visually emphasize. */
    highlight?: string;
    subtitle: string;
    cta: CTA;
    image: ImageRef;
  };
  /** Full-width brand statement banner. */
  statement: {
    text: string;
    background?: ImageRef;
  };
  values: {
    eyebrow: string;
    /** Left-column headline. */
    title: string;
    /** Right-column supporting paragraph. */
    intro: string;
    items: ValueItem[];
  };
  mission: FeatureBlock;
  vision: FeatureBlock;
  /** Centered brand banner answering "why choose us". */
  whyUs: {
    title: string;
    body: string;
  };
  team: {
    eyebrow?: string;
    title: string;
    members: TeamMember[];
  };
}

/** Everything rendered on the home page, in display order. */
export interface HomeContent {
  hero: HeroContent;
  about: AboutContent;
  stats: Stat[];
  services: {
    intro: SectionIntro;
    items: Service[];
  };
  process: {
    intro: SectionIntro;
    steps: ProcessStep[];
  };
  comparison: ComparisonContent;
  ctaBanner: CtaBannerContent;
  faq: {
    intro: SectionIntro;
    items: FaqItem[];
  };
  contact: ContactSectionContent;
}
