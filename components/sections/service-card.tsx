"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { whatsAppServiceUrl } from "@/lib/whatsapp";
import type { Service } from "@/types/content";

interface ServiceCardProps {
  service: Service;
  className?: string;
  /** Image `sizes` hint for responsive optimization. */
  sizes?: string;
}

/**
 * Service card (modern layout): a full-bleed photo with a floating white panel
 * over its lower half holding the title, description and CTA — instead of the
 * old text-over-image treatment. The whole card links to the service detail
 * page; the CTA pill opens a pre-filled WhatsApp chat.
 */
export function ServiceCard({
  service,
  className,
  sizes = "(max-width: 640px) 18rem, 20rem",
}: ServiceCardProps) {
  const ctaLabel = service.cta?.label ?? "Agenda tu servicio";

  return (
    <article
      className={cn(
        "group relative aspect-3/4 overflow-hidden rounded-2xl bg-ink-100",
        className,
      )}
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Soft top gradient so the corner arrow stays legible on light photos */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/30 to-transparent"
      />

      {/* Whole-card link + corner arrow. Sits under the white panel; clicks on
          the panel's text fall through to this link, while the CTA button
          (pointer-events re-enabled) opens WhatsApp instead. */}
      <Link
        href={`/solutions/${service.slug}`}
        className="absolute inset-0"
        aria-label={service.title}
      >
        <span
          aria-hidden
          className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-700"
        >
          <ArrowUpRightIcon className="size-4" />
        </span>
      </Link>

      {/* Floating white content panel over the lower half */}
      <div className="pointer-events-none absolute bottom-0">
        <div className="bg-white p-4 shadow-xl ring-1 ring-black/5 backdrop-blur-sm transition-transform duration-500">
          <h3 className="text-base font-semibold text-ink-900">
            {service.title}
          </h3>
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-500">
            {service.description}
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              window.open(whatsAppServiceUrl(service.title), "_blank");
            }}
            className="pointer-events-auto mt-4 inline-flex w-fit cursor-pointer items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
          >
            {ctaLabel}
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
