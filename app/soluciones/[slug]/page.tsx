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
}: PageProps<"/soluciones/[slug]">): Promise<Metadata> {
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
}: PageProps<"/soluciones/[slug]">) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <Section surface="white">
      <Container size="wide">
        <Link
          href="/soluciones"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
        >
          <ChevronLeftIcon className="size-4" />
          Volver a soluciones
        </Link>

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
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
    </Section>
  );
}
