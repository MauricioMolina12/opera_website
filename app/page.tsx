
import { About } from "@/components/sections/about";
import { Comparison } from "@/components/sections/comparison";
import { ContactForm } from "@/components/sections/contact-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Pqrsr } from "@/components/sections/pqrsr";
import { ProcessWhatsApp } from "@/components/sections/process-whatsapp";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getHomeContent } from "@/lib/content";


/**
 * Home page.
 *
 * A thin composition layer: it fetches content once and arranges the section
 * components. Each section owns its own markup; this file only decides order,
 * surfaces and anchors (which map to the header navigation).
 */
export default async function HomePage() {
  const home = await getHomeContent();

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://operasas.com/#website",
    url: "https://operasas.com",
    name: "Opera | Soluciones Integrales de Limpieza y Mantenimiento",
    description:
      "En Opera cuidamos y transformamos tus espacios con servicios profesionales de limpieza, jardinería y mantenimiento en Barranquilla.",
    publisher: {
      "@id": "https://operasas.com/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://operasas.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://operasas.com/#localbusiness",
    name: "ASEO Y MULTISERVICIOS OPERA SAS",
    url: "https://operasas.com",
    logo: "https://operasas.com/img/logo.png",
    image: "https://operasas.com/img/logo.png",
    description:
      "Soluciones integrales de limpieza, jardinería y mantenimiento en Barranquilla, Colombia.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barranquilla",
      addressRegion: "Atlántico",
      addressCountry: "CO",
    },
    telephone: "+57-300-6227196",
    email: "multiserviciosoperasas@gmail.com",
    priceRange: "$$",
    openingHours: "Mo-Fr 07:00-18:00",
    areaServed: [
      {
        "@type": "City",
        name: "Barranquilla",
      },
      {
        "@type": "State",
        name: "Atlántico",
      },
    ],
  };

  const serviceSchemas = home.services.items.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": "https://operasas.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Barranquilla",
    },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {serviceSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <div className="h-[calc(100vh-6rem)]">
        <Hero content={home.hero} slides={home.services.items} />
      </div>

      {/* Quiénes somos: intro statement + headline stats */}
      <Section id="about-us" surface="white">
        <Container size="wide">
          <Reveal>
            <About content={home.about} />
          </Reveal>
          <Reveal delay={120} className="mt-16 sm:mt-20">
            <Stats items={home.stats} />
          </Reveal>
        </Container>
      </Section>

      {/* solutions: services carousel */}
      <Section id="solutions" surface="muted">
        <Container size="wide">
          <Reveal>
            <Services intro={home.services.intro} items={home.services.items} />
          </Reveal>
        </Container>
      </Section>

      {/* Experiencia: how we work */}
      <Section id="experiencia" surface="white">
        <Container size="wide">
          <Reveal>
            <ProcessWhatsApp intro={home.process.intro} steps={home.process.steps} />
          </Reveal>
        </Container>
      </Section>

      {/* Cómo nos comparamos */}
      <Section surface="muted">
        <Container size="wide">
          <Reveal>
            <Comparison content={home.comparison} />
          </Reveal>
        </Container>
      </Section>

      {/* Conversion banner */}
      <Reveal>
        <CtaBanner content={home.ctaBanner} />
      </Reveal>

      {/* FAQ */}
      <Section surface="white">
        <Container size="wide">
          <Reveal>
            <Faq intro={home.faq.intro} items={home.faq.items} />
          </Reveal>
        </Container>
      </Section>

      {/* PQRSR */}
      <Section surface="brand">
        <Container size="wide">
          <Reveal>
            <Pqrsr />
          </Reveal>
        </Container>
      </Section>

      {/* Contacto */}
      <Section id="contacto" surface="muted">
        <Container size="wide">
          <Reveal>
            <ContactForm content={home.contact} />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
