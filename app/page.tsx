
import { About } from "@/components/sections/about";
import { ContactForm } from "@/components/sections/contact-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { ProcessWhatsApp } from "@/components/sections/process-whatsapp";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { Container } from "@/components/ui/container";
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

  return (
    <>
      <div className="h-[calc(100vh-6rem)]">
        <Hero content={home.hero} slides={home.services.items} />
      </div>

      {/* Quiénes somos: intro statement + headline stats */}
      <Section id="quienes-somos" surface="white">
        <Container size="wide">
          <About content={home.about} />
          <div className="mt-16 sm:mt-20">
            <Stats items={home.stats} />
          </div>
        </Container>
      </Section>

      {/* Soluciones: services carousel */}
      <Section id="soluciones" surface="muted">
        <Container size="wide">
          <Services intro={home.services.intro} items={home.services.items} />
        </Container>
      </Section>

      {/* Experiencia: how we work */}
      <Section id="experiencia" surface="white">
        <Container size="wide">
          <ProcessWhatsApp intro={home.process.intro} steps={home.process.steps} />
        </Container>
      </Section>

      {/* Conversion banner */}
      <CtaBanner content={home.ctaBanner} />

      {/* FAQ */}
      <Section surface="white">
        <Container size="wide">
          <Faq intro={home.faq.intro} items={home.faq.items} />
        </Container>
      </Section>

      {/* Contacto */}
      <Section id="contacto" surface="muted">
        <Container size="wide">
          <ContactForm content={home.contact} />
        </Container>
      </Section>
    </>
  );
}
