import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui/icons";
import { getServiceBySlug, getServices } from "@/lib/content";

/**
 * Pre-render a static page per service at build time.
 * (When Sanity is connected, this will fetch the list of slugs from the CMS.)
 */
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

/**
 * Single service detail page.
 *
 * NOTE: functional placeholder until the final design arrives. The route,
 * static generation and data wiring are production-ready.
 */
export default async function ServiceDetailPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
      <section className="py-8">

        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-ink-500"
          >
            <Link
              href="/"
              className="transition-colors hover:text-brand-700"
            >
              Inicio
            </Link>

            <ChevronRightIcon className="size-4 text-ink-300" />

            <Link
              href="/solutions"
              className="transition-colors hover:text-brand-700"
            >
              solutions
            </Link>

            <ChevronRightIcon className="size-4 text-ink-300" />

            <span
              className="font-medium text-ink-900"
              aria-current="page"
            >
              {service.title}
            </span>
          </nav>
          <div className="mt-5 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Copy */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Solución
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 text-balance sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-500 text-pretty">
                {service.description}
              </p>
              <Button href="/#contacto" size="lg" className="mt-8">
                {service.cta?.label ?? "Agenda tu servicio"}
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        </Container>
        <Section surface="white">
          <Container size="wide">
            <div className="mx-auto max-w-4xl space-y-6">
              <h2 className="text-3xl font-semibold">
                Soluciones adaptadas a tus necesidades
              </h2>

              <p className="text-lg leading-8 text-ink-600">
                {service.longDescription}
              </p>

              <p className="text-lg leading-8 text-ink-600">
                Nuestro equipo cuenta con personal altamente capacitado, procesos
                estandarizados y supervisión permanente para garantizar resultados de
                alta calidad, cumplimiento y seguridad en cada servicio.
              </p>
            </div>
          </Container>
        </Section>
        <Section surface="white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
                Alcance del servicio
              </span>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900">
                ¿Qué incluye este servicio?
              </h2>

              <p className="mt-5 text-lg leading-8 text-ink-600">
                Cada proyecto se adapta a las necesidades de nuestros clientes,
                garantizando una ejecución eficiente y resultados de alta calidad.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {service.includes.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50"
                >
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    ✓
                  </div>

                  <p className="font-medium text-ink-800">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
        <Section surface="muted">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
                Beneficios
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
                ¿Por qué elegir este servicio?
              </h2>

              <p className="mt-4 text-lg text-ink-600">
                Nos enfocamos en ofrecer solutions confiables, eficientes y adaptadas a
                las necesidades de cada cliente.
              </p>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {service.benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300"
                >
                  <div className="flex size-14 items-center justify-center rounded-full bg-brand-50 text-xl font-bold text-brand-600 ring-1 ring-brand-100">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-ink-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-ink-600">
                    {benefit.description}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-brand-500/40 to-transparent" />

                </div>
              ))}
            </div>
          </Container>
        </Section>
        <Section surface="white">
          <Container>

            <h2 className="text-center text-3xl font-semibold">
              Nuestro proceso
            </h2>

            <div className="mt-16 grid gap-10 md:grid-cols-4">

              {service.process?.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="relative flex items-center">
                    <div className="z-10 flex size-12 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white">
                      {index + 1}
                    </div>

                    {index < (service?.process?.length ?? 1) - 1 && (
                      <>
                        <div className="absolute left-12 right-0 top-1/2 h-px -translate-y-1/2 bg-neutral-300" />
                        <ArrowRightIcon className="absolute -right-2 top-1/2 z-10 size-5 -translate-y-1/2 bg-white text-brand-600" />
                      </>
                    )}
                  </div>

                  <h3 className="mt-6 font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm text-ink-600">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>

          </Container>
        </Section>
        <Section surface="brand">
          <Container size="narrow">

            <div className="rounded-3xl px-12 text-center">

              <h2 className="text-4xl font-semibold text-white">
                ¿Listo para iniciar tu proyecto?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
                Contáctanos y recibe una asesoría personalizada para encontrar la solución que mejor se adapte a tus necesidades.
              </p>

              <Button
                href="/#contacto"
                size="lg"
                variant="outline"
                className="mt-10"
              >
                Solicitar cotización
                <ArrowRightIcon className="size-4" />
              </Button>

            </div>

          </Container>
        </Section>
      </section>
  );
}
