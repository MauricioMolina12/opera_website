"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from "@/components/ui/icons";
import type { HeroContent, Service } from "@/types/content";

interface HeroProps {
  content: HeroContent;
  slides: Service[];
}

/**
 * Renders the title, emphasizing the `highlight` substring if present.
 */
function HeroTitle({ title, highlight }: { title: string; highlight?: string }) {
  if (!highlight || !title.includes(highlight)) {
    return <>{title}</>;
  }
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="text-brand-200">{highlight}</span>
      {after}
    </>
  );
}

export function Hero({ content, slides }: HeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (activeIndex >= slides.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, slides.length]);

  // Auto-advance the carousel; pauses when `paused` is true
  useEffect(() => {
    if (slides.length <= 1 || paused) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 9000);
    return () => clearInterval(id);
  }, [activeIndex, paused, slides.length]);

  const goNext = () => setActiveIndex((c) => (c + 1) % slides.length);
  const goPrev = () => setActiveIndex((c) => (c - 1 + slides.length) % slides.length);
  const togglePause = () => setPaused((p) => !p);

  const activeSlide = slides[activeIndex];

  const trackOffset = -activeIndex * 100;

  return (
    <Container as="section" size="wide" className="max-sm:px-0! lg:pt-8 min-h-full">
      <div className="relative flex h-full min-h-[90svh] items-center overflow-hidden rounded-none sm:min-h-[80svh] md:min-h-[70svh] lg:min-h-[65svh] xl:min-h-[70svh] sm:rounded-3xl">
        {/* Sliding background track */}
        <div
          aria-hidden
          className="absolute inset-0 flex will-change-transform transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(${trackOffset}%)` }}
        >
          {slides.map((slide, index) => (
              <div key={slide.slug} className="relative h-full w-full shrink-0">
                <Image
                  src={slide.image.src}
                  alt={slide.image.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover"
                />
              </div>
            ))}
        </div>
        {/* Readability overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/55"
        />

        <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-12 text-white sm:gap-8 sm:px-10 sm:py-14 md:px-12 md:py-16 lg:px-16">
          <div className="w-full text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
              Nuestros servicios
            </p>
            <h1 className="mt-2 text-xl font-semibold leading-tight tracking-tight text-balance sm:mt-3 sm:text-2xl md:text-3xl lg:text-4xl">
              <HeroTitle title={content.title} highlight={content.highlight} />
            </h1>
          </div>

          <div className="grid w-full gap-5 md:gap-6 md:grid-cols-[1fr_auto] lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div className="rounded-2xl border border-white/15 bg-black/50 px-5 py-5 shadow-2xl backdrop-blur-sm sm:px-6 sm:py-6">
              <div key={activeSlide.slug} className="animate-fade-up">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-200 sm:text-xs">
                  {activeSlide.title}
                </p>
                <p className="mt-2 text-sm font-semibold leading-snug sm:mt-3 sm:text-base md:text-lg">
                  {activeSlide.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href={content.primaryCta.href} size="lg" variant="primary">
                  {content.primaryCta.label}
                  <ArrowRightIcon className="size-4" />
                </Button>
                {content.secondaryCta && (
                  <Button href={`/solutions/${activeSlide.slug}`} size="lg" variant="white">
                    {content.secondaryCta.label}
                    <ArrowRightIcon className="size-4" />
                  </Button>
                )}
              </div>
            </div>

            <div className="relative flex items-end justify-end md:justify-end">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-r from-black/10 via-black/0 to-black/20" />
              <div className="relative flex w-full max-w-full flex-col items-end gap-2 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/85 backdrop-blur-sm sm:max-w-[16rem] sm:p-5">
                <div className="text-right">
                  <p className="text-xs uppercase tracking-[0.32em] text-white/60">Explora</p>
                  <p key={activeIndex} className="mt-2 text-sm text-white/75 animate-fade-up">
                    Servicio {activeIndex + 1} de {slides.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom controls: progress dots + arrows + play/pause */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-2 px-3 pb-3 sm:px-6 sm:pb-6">
          {/* Progress dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ver ${slide.title}`}
                aria-current={index === activeIndex || undefined}
                className="transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
              >
                {index === activeIndex ? (
                  <span className="block h-1.5 w-8 rounded-full bg-white sm:w-14" />
                ) : (
                  <span className="block size-2.5 rounded-full border border-white/70 bg-white/10 sm:size-3" />
                )}
              </button>
            ))}
          </div>

          {/* Arrows + play/pause */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Anterior servicio"
              className="cursor-pointer grid size-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:size-9"
            >
              <ChevronLeftIcon className="size-4 sm:size-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Siguiente servicio"
              className="cursor-pointer grid size-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:size-9"
            >
              <ChevronRightIcon className="size-4 sm:size-5" />
            </button>
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? "Reanudar auto-avance" : "Pausar auto-avance"}
              className="cursor-pointer grid size-8 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/25 sm:size-9"
            >
              {paused ? (
                <PlayIcon className="size-4 sm:size-5" />
              ) : (
                <PauseIcon className="size-4 sm:size-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
