"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types/content";

interface ParallaxImageProps {
  image: ImageRef;
  /** Applied to the clipping wrapper (usually `absolute inset-0`). */
  className?: string;
  sizes?: string;
  priority?: boolean;
  /**
   * Maximum vertical drift in pixels across the full scroll pass. The inner
   * layer is oversized by ~15% so the image never reveals an empty edge.
   */
  strength?: number;
}

/**
 * A `next/image` `fill` background that drifts vertically as the user scrolls,
 * adding subtle depth (parallax). The image sits inside an oversized, clipped
 * layer so the drift never exposes a gap. Motion is disabled for users who
 * prefer reduced motion.
 */
export function ParallaxImage({
  image,
  className,
  sizes = "(max-width: 1440px) 100vw, 1440px",
  priority = false,
  strength = 60,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // -1 (below the fold) → 1 (above the fold) as the element crosses center.
      const progress =
        (rect.top + rect.height / 2 - viewportH / 2) /
        (viewportH / 2 + rect.height / 2);
      setOffset(-progress * strength);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} aria-hidden className={cn("overflow-hidden", className)}>
      <div
        className="absolute inset-x-0 -inset-y-[15%] will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
