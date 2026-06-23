import { OverlayCard } from "@/components/ui/overlay-card";
import { ScrollCarousel } from "@/components/ui/scroll-carousel";
import type { SolutionsPageContent } from "@/types/content";

interface SolutionsSectorsProps {
  content: SolutionsPageContent["sectors"];
}

/**
 * "Sectores en los que trabajamos": a carousel of sector cards. Composes the
 * shared `ScrollCarousel` and `OverlayCard` — no bespoke markup needed.
 */
export function SolutionsSectors({ content }: SolutionsSectorsProps) {
  return (
    <ScrollCarousel eyebrow={content.eyebrow} title={content.title}>
      {content.items.map((sector) => (
        <OverlayCard
          key={sector.title}
          image={sector.image}
          title={sector.title}
          description={sector.description}
          href={sector.cta.href}
          action={{ label: sector.cta.label, href: sector.cta.href }}
          className="w-72 shrink-0 snap-start sm:w-80" 
          linkArrow={false}
        />
      ))}
    </ScrollCarousel>
  );
}
