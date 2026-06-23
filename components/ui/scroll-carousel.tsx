"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { CarouselButton } from "@/components/ui/carousel-button";
import { SectionHeading } from "@/components/ui/section-heading";

interface ScrollCarouselProps {
  /** The cards to scroll through. Each should set its own fixed width. */
  children: ReactNode;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Optional element rendered on the right of the heading (e.g. a link). */
  action?: ReactNode;
}

/**
 * Horizontally scrollable, snap-aligned carousel with a heading and accessible
 * prev/next controls. Falls back to native touch/trackpad scrolling. The
 * caller supplies the cards as `children`; this owns the scroll mechanics so
 * every carousel on the site behaves identically.
 */
export function ScrollCarousel({
  children,
  eyebrow,
  title,
  subtitle,
  action,
}: ScrollCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [updateArrows]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // Scroll by roughly one card width (card + gap).
    const amount = Math.min(el.clientWidth * 0.8, 340);
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <div>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        action={action}
      />

      <div
        ref={scrollerRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-4 flex items-center justify-end gap-3">
        <CarouselButton
          direction="prev"
          disabled={!canScrollLeft}
          onClick={() => scrollByCards(-1)}
        />
        <CarouselButton
          direction="next"
          disabled={!canScrollRight}
          onClick={() => scrollByCards(1)}
        />
      </div>
    </div>
  );
}
