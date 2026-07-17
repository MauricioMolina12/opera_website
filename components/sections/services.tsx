"use client";

import Link from "next/link";

import { ChevronRightIcon, ArrowUpRightIcon, SolutionIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { whatsAppServiceUrl } from "@/lib/whatsapp";
import type { Service, SectionIntro } from "@/types/content";

interface ServicesProps {
  intro: SectionIntro;
  items: Service[];
}

export function Services({ intro, items }: ServicesProps) {
  // Asignar tamaños según la posición para crear jerarquía visual
  const [first, second, ...rest] = items;
  // Últimos 2 servicios → compactos
  const compact = rest.slice(-2);
  const standard = rest.slice(0, rest.length - 2);

  return (
    <div>
      {/* Heading */}
      <div className="mb-10 flex items-end justify-between gap-4">
        <div className="max-w-2xl">
          {intro.eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
              {intro.eyebrow}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {intro.title}
          </h2>
          {intro.subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-ink-500 text-pretty">
              {intro.subtitle}
            </p>
          )}
        </div>
        {intro.cta && (
          <Link
            href={intro.cta.href}
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex"
          >
            {intro.cta.label}
            <ChevronRightIcon className="size-4" />
          </Link>
        )}
      </div>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-3">
        {/* === Card grande (2 cols) — Aseo integral === */}
        <ServiceBentoCard
          service={first}
          variant="lg"
          className="md:col-span-2"
        />

        {/* === Card mediana (1 col) — Limpieza fachadas === */}
        <ServiceBentoCard service={second} variant="md" />

        {/* === Cards estándar (1 col c/u) === */}
        {standard.map((service) => (
          <ServiceBentoCard key={service.slug} service={service} variant="md" />
        ))}

        {/* === Cards compactas (última fila) — Aseo empresarial + corporativo === */}
        {compact.length === 2 ? (
          <>
            <ServiceBentoCard
              service={compact[0]}
              variant="sm"
              className="md:col-span-1"
            />
            <ServiceBentoCard
              service={compact[1]}
              variant="sm"
              className="md:col-span-1"
            />
            {/* Empty cell to center 2 cards in 3-col grid */}
            <div aria-hidden className="hidden md:block" />
          </>
        ) : (
          compact.map((service) => (
            <ServiceBentoCard key={service.slug} service={service} variant="sm" />
          ))
        )}
      </div>

      {/* CTA móvil */}
      {intro.cta && (
        <div className="mt-8 text-center sm:hidden">
          <Link
            href={intro.cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {intro.cta.label}
            <ChevronRightIcon className="size-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────── */
/*  Bento card — imagen como badge + texto         */
/* ──────────────────────────────────────────────── */

type BentoVariant = "lg" | "md" | "sm";

function ServiceBentoCard({
  service,
  variant,
  className,
}: {
  service: Service;
  variant: BentoVariant;
  className?: string;
}) {
  const ctaLabel = "Solicitar asesoría";

  const sizeClasses: Record<BentoVariant, string> = {
    lg: "p-6 sm:p-8",
    md: "p-5",
    sm: "p-4",
  };

  const imageSize: Record<BentoVariant, string> = {
    lg: "size-16 sm:size-20",
    md: "size-12 sm:size-14",
    sm: "size-10",
  };

  const cardContent = (
    <>
      {/* Icono decorativo del servicio */}
      <div
        className={cn(
          "grid shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100/50",
          imageSize[variant],
        )}
      >
        <SolutionIcon
          name={service.icon}
          className={variant === "lg" ? "size-8" : "size-6"}
        />
      </div>

      {/* Contenido textual */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-ink-900">{service.title}</h3>
          <span className="shrink-0 text-ink-300 transition-colors group-hover:text-brand-600">
            <ArrowUpRightIcon className="size-4" />
          </span>
        </div>
        <p
          className={cn(
            "mt-1.5 leading-relaxed text-ink-500",
            variant === "sm" ? "text-sm line-clamp-2" : "text-sm",
            variant !== "sm" && "line-clamp-2",
          )}
        >
          {service.description}
        </p>

        {/* Spacer + CTA */}
        <div className="mt-auto pt-4">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(whatsAppServiceUrl(service.title), "_blank");
            }}
            className="inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-brand-700"
          >
            {ctaLabel}
            <ChevronRightIcon className="size-3.5" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <Link
      href={`/solutions/${service.slug}`}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:border-brand-200 hover:shadow-md",
        sizeClasses[variant],
        className,
      )}
    >
      {cardContent}
    </Link>
  );
}