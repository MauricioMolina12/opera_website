import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDownIcon } from "@/components/ui/icons";
import type { FaqItem, SectionIntro } from "@/types/content";

interface FaqProps {
  intro: SectionIntro;
  items: FaqItem[];
}

/**
 * "Preguntas frecuentes": an accessible accordion built on native
 * `<details>`/`<summary>` (works without JavaScript, keyboard-friendly).
 * Laid out in two columns on large screens.
 */
export function Faq({ intro, items }: FaqProps) {
  return (
    <div>
      <SectionHeading
        eyebrow={intro.eyebrow}
        title={intro.title}
        subtitle={intro.subtitle}
      />

      <div className="mt-10 grid gap-x-8 gap-y-3 md:grid-cols-2">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-ink-100 bg-white px-5 transition-colors open:border-brand-200 open:bg-brand-50/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDownIcon className="size-5 shrink-0 text-brand-600 transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <p className="pb-5 pr-8 text-sm leading-relaxed text-ink-500">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
