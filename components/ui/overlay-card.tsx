"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRightIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/types/content";

/** Bottom pill action — a link, a button (onClick), or static text. */
interface CardAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface OverlayCardProps {
  image: ImageRef;
  title: string;
  description: string;
  /** Whole-card link + corner-arrow target. */
  href: string;
  /** Optional pill action shown at the bottom of the card. */
  action?: CardAction;
  className?: string;
  /** Image `sizes` hint for responsive optimization. */
  sizes?: string;
  linkArrow?: boolean
}

function ActionPill({ action }: { action: CardAction }) {
  const className =
    "relative z-10 flex w-fit items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-brand-600";
  const content = (
    <>
      {action.label}
      <ChevronRightIcon className="size-4" />
    </>
  );

  if (action.onClick) {
    return (
      <button
        type="button"
        onClick={(e) => (e.stopPropagation(), action.onClick)}
        className={cn(className, "cursor-pointer")}
      >
        {content}
      </button>
    );
  }
  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {content}
      </Link>
    );
  }
  return <span className={className}>{content}</span>;
}

/**
 * Tall image card with a bottom gradient, title, description, an optional pill
 * action and a corner-arrow link. The whole card links to `href`; the pill can
 * carry a separate action (e.g. a WhatsApp deep link). Shared by service and
 * sector carousels.
 */
export function OverlayCard({
  image,
  title,
  description,
  href,
  action,
  className,
  sizes = "(max-width: 640px) 18rem, 20rem",
  linkArrow = true
}: OverlayCardProps) {
  return (
    <article
      onClick={(e) => (e.stopPropagation(), action?.onClick?.())}      className={cn(
        "group relative aspect-[3/4] overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Bottom gradient for text legibility */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent"
      />

      {/* Whole-card link + corner arrow */}
      {linkArrow && (
        <Link href={href} onClick={(e) => (e.stopPropagation(), action?.onClick?.())} className="absolute inset-0" aria-label={title}>
          <span
            aria-hidden
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-brand-700"
          >
            <ArrowUpRightIcon className="size-4" />
          </span>
        </Link>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-5 text-white">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1.5 text-sm text-white/80">{description}</p>
        </div>
        {action && <ActionPill action={action} />}
      </div>
    </article>
  );
}
