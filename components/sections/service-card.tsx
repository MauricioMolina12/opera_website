"use client";

import { OverlayCard } from "@/components/ui/overlay-card";
import { whatsAppServiceUrl } from "@/lib/whatsapp";
import type { Service } from "@/types/content";

interface ServiceCardProps {
  service: Service;
  className?: string;
  /** Image `sizes` hint for responsive optimization. */
  sizes?: string;
}

/**
 * Service card: the whole card links to the service detail page, while the
 * bottom pill opens a pre-filled WhatsApp chat for that service. A thin wrapper
 * over the generic `OverlayCard`.
 */
export function ServiceCard({ service, className, sizes }: ServiceCardProps) {
  return (
    <OverlayCard
      image={service.image}
      title={service.title}
      description={service.description}
      href={`/soluciones/${service.slug}`}
      action={{
        label: service.cta?.label ?? "Agenda tu servicio",
        onClick: () => window.open(whatsAppServiceUrl(service.title), "_blank"),
      }}
      className={className}
      sizes={sizes}
    />
  );
}
