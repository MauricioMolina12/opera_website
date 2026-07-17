import type { Metadata } from "next";
import Image from "next/image";

import { AboutFeature } from "@/components/sections/about-feature";
import { AboutTeam } from "@/components/sections/about-team";
import { AboutValues } from "@/components/sections/about-values";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Section } from "@/components/ui/section";
import { getAboutContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description:
    "Conoce a Opera: nuestros valores, misión y visión, y el equipo detrás de soluciones integrales en limpieza, jardinería y mantenimiento.",
};

/**
 * "Quiénes somos" (about) page.
 *
 * A thin composition layer mirroring the home page: it fetches content once
 * and arranges the section components. Each section owns its own markup.
 */
export default async function QuienesSomosPage() {
  const about = await getAboutContent();

  return (
    <>
      {/* Hero */}
      <Section surface="white" spacing="md">
        <Container size="wide">
          <PageHero
            title={about.hero.title}
            highlight={about.hero.highlight}
            subtitle={about.hero.subtitle}
            cta={about.hero.cta}
            image={about.hero.image}
          />
        </Container>
      </Section>

      {/* Brand statement banner */}
      <Container as="section" size="wide" aria-label="Nuestra promesa">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600">
          {about.statement.background && (
            <Image
              src={about.statement.background.src}
              alt={about.statement.background.alt}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover opacity-80 mix-blend-multiply"
            />
          )}
          <div className="relative mx-auto max-w-4xl px-6 py-16 text-center text-white sm:px-12 sm:py-20">
            <p className="text-2xl font-semibold leading-snug tracking-tight text-balance sm:text-3xl">
              {about.statement.text}
            </p>
          </div>
        </div>
      </Container>

      {/* Values */}
      <Section surface="white">
        <Container size="wide">
          <AboutValues content={about.values} />
        </Container>
      </Section>

      {/* Mission */}
      <Section id="mision" surface="white" spacing="md">
        <Container size="wide">
          <AboutFeature content={about.mission} />
        </Container>
      </Section>

      {/* Vision */}
      <Section id="vision" surface="white" spacing="md">
        <Container size="wide">
          <AboutFeature content={about.vision} reverse />
        </Container>
      </Section>

      {/* Why choose us */}
      <Section surface="brand">
        <Container size="default" className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {about.whyUs.title}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-brand-100 text-pretty">
            {about.whyUs.body}
          </p>
        </Container>
      </Section>

      {/* Team */}
      <Section id="equipo" surface="white">
        <Container size="wide">
          <AboutTeam content={about.team} />
        </Container>
      </Section>
    </>
  );
}
