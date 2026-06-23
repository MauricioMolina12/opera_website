import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { CtaBannerContent } from "@/types/content";

interface CtaBannerProps {
  content: CtaBannerContent;
}

/**
 * Mid-page conversion banner — a contained, rounded panel (aligned to the same
 * margins as the rest of the site) with an optional background image and a
 * brand-tinted overlay.
 */
export function CtaBanner({ content }: CtaBannerProps) {
  return (
    <Container as="section" size="wide" aria-label="Llamado a la acción">
      <div className="relative overflow-hidden rounded-3xl">
        {content.background ? (
          <>
            <Image
              src={content.background.src}
              alt={content.background.alt}
              fill
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/55"
            />
          </>
        ) : (
          <div aria-hidden className="absolute inset-0 bg-brand-700" />
        )}

        <div className="relative mx-auto max-w-5xl px-6 py-20 text-center text-white sm:py-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/85 text-pretty">
              {content.subtitle}
            </p>
          )}
          <Button
            href={content.cta.href}
            size="lg"
            variant="white"
            className="mt-8"
          >
            {content.cta.label}
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}
