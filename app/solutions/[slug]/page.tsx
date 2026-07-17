import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  CheckIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { getServiceBySlug, getServices } from "@/lib/content";

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

  const seo = service.seo;
  return {
    title: seo?.metaTitle ?? service.title,
    description: seo?.metaDescription ?? service.description,
    keywords: seo?.keywords?.join(", "),
    openGraph: seo
      ? {
          title: seo.ogTitle,
          description: seo.ogDescription,
          images: service.image ? [{ url: service.image.src }] : [],
        }
      : undefined,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const ctaLabel = service.cta?.label ?? "Solicitar cotización";
  const sectorsList = service.sectors ?? [];
  const whyUs = service.whyUs ?? [
    "Personal capacitado y certificado para cada tipo de servicio",
    "Supervisión permanente con reportes de calidad",
    "Procesos estandarizados que garantizan resultados consistentes",
    "Cobertura en Barranquilla y la región Caribe",
    "Más de 5 años generando confianza en empresas e instituciones",
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-8">
        <Container size="wide">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 text-sm text-ink-500"
          >
            <Link href="/" className="transition-colors hover:text-brand-700">
              Inicio
            </Link>
            <ChevronRightIcon className="size-4 text-ink-300" />
            <Link
              href="/solutions"
              className="transition-colors hover:text-brand-700"
            >
              Soluciones
            </Link>
            <ChevronRightIcon className="size-4 text-ink-300" />
            <span className="font-medium text-ink-900" aria-current="page">
              {service.title}
            </span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Solución
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink-900 text-balance sm:text-5xl">
                {service.title}
              </h1>
              {service.heroSubtitle && (
                <p className="mt-3 text-xl leading-snug text-ink-700">
                  {service.heroSubtitle}
                </p>
              )}
              <p className="mt-4 text-lg leading-relaxed text-ink-500 text-pretty">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#contacto" size="lg">
                  {ctaLabel}
                  <ArrowRightIcon className="size-4" />
                </Button>
                <Button
                  href="https://wa.me/573006227196?text=Hola%2C%20quiero%20hablar%20con%20un%20asesor%20sobre%20el%20servicio%20de%20"
                  size="lg"
                  variant="outline"
                  external
                >
                  Hablar con un asesor
                  <ArrowRightIcon className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Summary / Resumen del servicio */}
      <Section surface="white">
        <Container size="wide">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Resumen del servicio
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl">
              ¿En qué consiste {service.title.toLowerCase()}?
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-600">
              {service.summary ?? service.longDescription}
            </p>
          </div>
        </Container>
      </Section>

      {/* ¿Qué incluye? */}
      <Section surface="muted">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Alcance del servicio
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
              ¿Qué incluye este servicio?
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Cada servicio se adapta a las necesidades del cliente, garantizando
              resultados de alta calidad en cada intervención.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.includes.map((item) => (
              <div
                key={item}
                className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <CheckIcon className="size-5" />
                </div>
                <p className="font-medium text-ink-800">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beneficios */}
      <Section surface="white">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
              Beneficios
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
              ¿Por qué elegir este servicio?
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Resultados que marcan la diferencia para tu empresa o institución.
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

      {/* Proceso */}
      <Section surface="muted">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              Nuestro proceso
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
              Cómo trabajamos
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Un método estructurado en 5 pasos para garantizar resultados
              profesionales.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">
            {[
              {
                step: 1,
                title: "Diagnóstico",
                desc: "Evaluamos el estado actual, las necesidades específicas y los objetivos del cliente.",
              },
              {
                step: 2,
                title: "Planeación",
                desc: "Diseñamos un plan de trabajo detallado con recursos, cronograma y protocolos.",
              },
              {
                step: 3,
                title: "Ejecución",
                desc: "Implementamos el servicio con personal capacitado y supervisión permanente.",
              },
              {
                step: 4,
                title: "Supervisión",
                desc: "Monitoreamos cada etapa para asegurar calidad, cumplimiento y seguridad.",
              },
              {
                step: 5,
                title: "Mejora continua",
                desc: "Evaluamos resultados y aplicamos ajustes para optimizar el servicio.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="relative text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-600 text-lg font-semibold text-white">
                  {step}
                </div>
                {step < 5 && (
                  <div
                    aria-hidden
                    className="absolute left-[64%] top-7 hidden h-px w-[90%] bg-neutral-300 md:block"
                  />
                )}
                <h3 className="mt-5 font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Sectores */}
      {sectorsList.length > 0 && (
        <Section surface="white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
                Sectores
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
                Sectores donde prestamos este servicio
              </h2>
              <p className="mt-4 text-lg text-ink-600">
                Atendemos una amplia variedad de entornos con soluciones
                adaptadas a cada necesidad.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {sectorsList.map((sector) => (
                <span
                  key={sector}
                  className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-5 py-2.5 text-sm font-medium text-brand-700"
                >
                  <ShieldCheckIcon className="size-4" />
                  {sector}
                </span>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ¿Por qué elegir Opera? */}
      <Section surface="muted">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
              ¿Por qué Opera?
            </span>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
              ¿Por qué confiar en nosotros?
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Más de 5 años respaldando empresas e instituciones en la región
              Caribe.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
            {whyUs.map((reason, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5"
              >
                <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
                  {i + 1}
                </span>
                <p className="text-ink-700">{reason}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <Section surface="white">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex rounded-full bg-brand-50 px-4 py-1 text-sm font-medium text-brand-700">
                FAQ
              </span>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-ink-900">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {service.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-ink-100 bg-white px-5 transition-colors open:border-brand-200 open:bg-brand-50/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <ChevronRightIcon className="size-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-90" />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-500">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA Final */}
      <Section surface="brand">
        <Container size="narrow">
          <div className="rounded-3xl px-6 text-center">
            <h2 className="text-4xl font-semibold text-white">
              ¿Listo para contratar este servicio?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
              Solicita una cotización sin compromiso y descubre cómo Opera puede
              transformar tus espacios con calidad profesional.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/#contacto" size="lg" variant="white">
                Solicitar cotización
                <ArrowRightIcon className="size-4" />
              </Button>
              {/* <Button
                href="https://wa.me/573006227196"
                size="lg"
                variant="outline"
                external
                className="border-white/30 text-white hover:bg-white/10"
              >
                Hablar con un asesor
                <ArrowRightIcon className="size-4" />
              </Button> */}
            </div>
          </div>
        </Container>
      </Section>

    </>
  );
}