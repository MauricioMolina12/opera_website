"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { CarouselButton } from "@/components/ui/carousel-button";
import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { SolutionHighlight } from "@/types/content";

interface SolutionsHighlightsProps {
  items: SolutionHighlight[];
  /** Auto-advance interval in ms. Set to 0 to disable. */
  interval?: number;
}

/**
 * Rotating "solution highlight" panel. Auto-advances through `items` (pausing
 * on hover/focus), crossfades the artwork and animates the copy on each change.
 * An eyebrow, title and a grid of check-listed benefits sit beside a tall image
 * with a progress rail and prev/next controls.
 */
export function SolutionsHighlights({
  items,
  interval = 6000,
}: SolutionsHighlightsProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = items[index];

  const move = useCallback(
    (direction: 1 | -1) =>
      setIndex((current) => (current + direction + items.length) % items.length),
    [items.length],
  );

  const goTo = (next: number) => setIndex(next);

  useEffect(() => {
    if (interval <= 0 || items.length <= 1 || paused) return;
    const id = setInterval(() => move(1), interval);
    return () => clearInterval(id);
  }, [index, paused, interval, items.length, move]);

  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  return (
    <div
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-3xl bg-ink-100 shadow-lg ring-1 ring-black/5">
        {items.map((item, i) => (
          <Image
            key={item.image.src}
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={cn(
              "object-cover transition-[opacity,transform] duration-700 ease-out",
              i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          />
        ))}

        {/* Eyebrow badge */}
        <div className="absolute left-4 top-4">
          <span
            key={active.eyebrow}
            className="animate-fade-up inline-flex rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm backdrop-blur-sm"
          >
            {active.eyebrow}
          </span>
        </div>

        {/* Progress rail */}
        {items.length > 1 && (
          <div className="absolute inset-x-4 bottom-4 flex gap-2">
            {items.map((item, i) => (
              <button
                key={item.image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver ${item.eyebrow}`}
                aria-current={i === index || undefined}
                className="group h-1.5 flex-1 overflow-hidden rounded-full bg-white/40"
              >
                <span
                  className={cn(
                    "block h-full rounded-full bg-white transition-[width] ease-linear",
                    i === index ? "w-full" : "w-0 group-hover:w-full",
                  )}
                  style={
                    i === index && !paused && interval > 0
                      ? { transitionDuration: `${interval}ms` }
                      : { transitionDuration: "300ms" }
                  }
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Copy */}
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Soluciones destacadas
          </p>
          {items.length > 1 && (
            <div className="flex items-center gap-2">
              <CarouselButton
                direction="prev"
                variant="outline"
                onClick={() => move(-1)}
              />
              <CarouselButton
                direction="next"
                variant="outline"
                onClick={() => move(1)}
              />
            </div>
          )}
        </div>

        <div key={active.eyebrow} className="animate-fade-up">
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink-900 text-balance sm:text-4xl">
            {active.title}
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {active.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-3 rounded-xl bg-white p-6"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <CheckIcon className="size-3.5" />
                </span>
                <p className="text-sm leading-relaxed text-ink-600">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
