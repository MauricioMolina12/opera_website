import Link from "next/link";

import { ServiceCard } from "@/components/sections/service-card";
import { ChevronRightIcon } from "@/components/ui/icons";
import { ScrollCarousel } from "@/components/ui/scroll-carousel";
import type { SectionIntro, Service } from "@/types/content";

interface ServicesProps {
  intro: SectionIntro;
  items: Service[];
}

/**
 * "solutions" section: a carousel of service cards. The scroll mechanics and
 * controls live in the shared `ScrollCarousel`; this only supplies the heading,
 * the optional "ver todos" link and the cards.
 */
export function Services({ intro, items }: ServicesProps) {
  return (
    <ScrollCarousel
      title={intro.title}
      subtitle={intro.subtitle}
      action={
        intro.cta && (
          <Link
            href={intro.cta.href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {intro.cta.label}
            <ChevronRightIcon className="size-4" />
          </Link>
        )
      }
    >
      {items.map((service) => (
        <ServiceCard
          key={service.slug}
          service={service}
          className="w-72 shrink-0 snap-start sm:w-80"
        />
      ))}
    </ScrollCarousel>
  );
}
