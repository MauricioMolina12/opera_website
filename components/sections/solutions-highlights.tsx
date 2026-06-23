"use client";

import Image from "next/image";
import { useState } from "react";

import { CarouselButton } from "@/components/ui/carousel-button";
import type { SolutionHighlight } from "@/types/content";

interface SolutionsHighlightsProps {
  items: SolutionHighlight[];
}

/**
 * Rotating "solution highlight" panel: an eyebrow, title and a 2×2 grid of
 * numbered benefit cards on the left, a tall image on the right, with prev/next
 * controls pinned to the top-right. Cycles through `items`.
 */
export function SolutionsHighlights({ items }: SolutionsHighlightsProps) {
  const [index, setIndex] = useState(0);
  const active = items[index];
  const move = (direction: 1 | -1) =>
    setIndex((current) => (current + direction + items.length) % items.length);

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

      <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lg">

        <Image
          src={active.image.src}
          alt={active.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="relative">

        {items.length > 1 && (
          <div className="absolute -top-14 left-0 hidden items-center gap-2 lg:flex">
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

        <div>
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {active.eyebrow}
            </p>
            {items.length > 1 && (
              <div className="flex items-center gap-2 lg:hidden">
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

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-ink-900 text-balance sm:text-4xl">
            {active.title}
          </h2>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {active.benefits.map((benefit, i) => (
              <li
                key={benefit}
                className="rounded-xl border border-ink-100 bg-white p-5"
              >
                <span className="grid size-7 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  {benefit}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
