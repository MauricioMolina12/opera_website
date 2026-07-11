import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { CTA, ImageRef } from "@/types/content";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Word(s) within the title to emphasize in the brand color. */
  highlight?: string;
  subtitle: string;
  cta?: CTA;
  image: ImageRef;
  /** Aspect-ratio utility for the framed image. Defaults to 5/4. */
  imageAspectClassName?: string;
  /**
   * Cap the hero (on lg+) to the viewport minus the fixed nav (5rem) and a
   * 20px threshold, and show the image complete (`object-contain`) instead of
   * cropping it. Use when the image must be seen in full above the fold.
   */
  fitViewport?: boolean;
}

/** Available height below the fixed nav: 100svh − nav (5rem) − 20px threshold. */
const VIEWPORT_FIT = "lg:h-[calc(100svh-6.25rem)]";

/** Renders the title, emphasizing the `highlight` substring if present. */
function Highlighted({ text, highlight }: { text: string; highlight?: string }) {
  if (!highlight || !text.includes(highlight)) return <>{text}</>;
  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span className="text-brand-600">{highlight}</span>
      {after}
    </>
  );
}

/**
 * Generic two-column page hero: eyebrow, headline (with optional highlight),
 * supporting copy and a CTA on the left; a framed image on the right. Shared
 * by the "Quiénes somos" and "solutions" pages.
 */
export function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  cta,
  image,
  imageAspectClassName = "aspect-[5/4]",
  fitViewport = false,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
        fitViewport && VIEWPORT_FIT,
      )}
    >
      <div>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink-900 text-balance sm:text-5xl">
          <Highlighted text={title} highlight={highlight} />
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500 text-pretty">
          {subtitle}
        </p>
        {cta && (
          <Button href={cta.href} size="lg" className="mt-8">
            {cta.label}
            <ArrowRightIcon className="size-4" />
          </Button>
        )}
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-3xl",
          // When fitting the viewport, fill the available column height and let
          // the image show complete; otherwise frame it with a fixed ratio.
          fitViewport
            ? "h-72 sm:h-96 lg:h-full"
            : cn("shadow-xl", imageAspectClassName),
        )}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={fitViewport ? "object-contain" : "object-cover"}
        />
      </div>
    </div>
  );
}
