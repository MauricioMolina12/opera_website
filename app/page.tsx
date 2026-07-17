
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

  return (
    <>
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
