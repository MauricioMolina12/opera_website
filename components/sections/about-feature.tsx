import Image from "next/image";

import { CheckIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { FeatureBlock } from "@/types/content";

interface AboutFeatureProps {
  content: FeatureBlock;
  /** When true, the image sits on the right (copy on the left). */
  reverse?: boolean;
}

/**
 * Two-column feature block used for "Nuestra misión" / "Nuestra visión":
 * a framed image beside a title, body paragraphs and a checklist. Set
 * `reverse` to swap the image to the opposite side.
 */
export function AboutFeature({ content, reverse = false }: AboutFeatureProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg",
          reverse && "lg:order-last",
        )}
      >
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div>
        {content.eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {content.eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 text-balance sm:text-4xl">
          {content.title}
        </h2>
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-500 text-pretty">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-7 space-y-3">
          {content.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3">
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                <CheckIcon className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-base text-ink-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
