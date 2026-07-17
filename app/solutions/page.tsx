import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { SolutionsHighlights } from "@/components/sections/solutions-highlights";
import { SolutionsSectors } from "@/components/sections/solutions-sectors";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { getSolutionsContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soluciones",
  description:
    "Soluciones integrales de Opera para optimizar espacios: tratamiento de pisos, limpieza de fachadas, jardinería y servicios para cada sector.",
};

/**
 * "solutions" page.
 *
 * A thin composition layer mirroring the home and about pages: it fetches
 * content once and arranges the section components in display order.
 */
export default async function solutionsPage() {
  const solutions = await getSolutionsContent();

  return (
    <>
      {/* Hero */}
      <Section surface="white" spacing="none" className="py-10 lg:py-0">
        <Container size="wide">
          <PageHero
            title={solutions.hero.title}
            subtitle={solutions.hero.subtitle}
            cta={solutions.hero.cta}
            image={solutions.hero.image}
            fitViewport
          />
        </Container>
      </Section>

      {/* Solution highlights carousel */}
      <Section surface="muted">
        <Container size="wide">
          <SolutionsHighlights items={solutions.highlights} />
        </Container>
      </Section>

      {/* Sectors carousel */}
      <Section surface="white">
        <Container size="wide">
          <SolutionsSectors content={solutions.sectors} />
        </Container>
      </Section>

      {/* Conversion banner */}
      <CtaBanner content={solutions.ctaBanner} />

      {/* FAQ */}
      <Section surface="white">
        <Container size="wide">
          <Faq intro={solutions.faq.intro} items={solutions.faq.items} />
        </Container>
      </Section>
    </>
  );
}
