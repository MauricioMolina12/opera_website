import {
  CheckIcon,
  CloseIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { ComparisonContent } from "@/types/content";

interface ComparisonProps {
  content: ComparisonContent;
}

/** Title with the `highlight` substring emphasized in the brand color. */
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

/** Shared column proportions so every row lines up across the table. */
const COLS = "grid grid-cols-[1.4fr_1fr_1.2fr]";

/**
 * "Cómo nos comparamos": a comparison table contrasting traditional providers
 * with Opera. The Opera column is visually highlighted and each capability is
 * marked as missing (others) or included (Opera).
 */
export function Comparison({ content }: ComparisonProps) {
  const { rows } = content;

  return (
    <div>
      <SectionHeading
        eyebrow={content.eyebrow}
        title={<Highlighted text={content.title} highlight={content.highlight} />}
        subtitle={content.subtitle}
      />

      <div className="mt-12 overflow-x-auto">
        <div className="min-w-[36rem]">
          {/* Column headers */}
          <div className={cn(COLS, "items-stretch")}>
            <div className="px-5 py-4" />
            <div className="px-5 py-4 text-center text-sm font-semibold text-ink-400">
              {content.othersLabel}
            </div>
            <div className="rounded-t-2xl bg-brand-600 px-5 py-4 text-center text-sm font-semibold text-white">
              {content.operaLabel}
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => {
            const isLast = i === rows.length - 1;
            return (
              <div key={row.feature} className={cn(COLS, "items-center")}>
                <div className="border-t border-ink-100 px-5 py-4 text-sm font-medium text-ink-900">
                  {row.feature}
                </div>

                <div className="border-t border-ink-100 px-5 py-4">
                  <span className="flex items-center justify-center gap-2 text-center text-sm text-ink-400">
                    <CloseIcon className="size-4 shrink-0 text-ink-300" />
                    {row.others}
                  </span>
                </div>

                <div
                  className={cn(
                    "flex justify-center border-t border-white bg-brand-50 px-5 py-4",
                    isLast && "rounded-b-2xl",
                  )}
                >
                  {row.operaConditional ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-center text-sm font-semibold text-ink-700 ring-1 ring-ink-200">
                      <ShieldCheckIcon className="size-4 shrink-0 text-brand-600" />
                      {row.opera}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-center text-sm font-semibold text-brand-700">
                      <CheckIcon className="size-4 shrink-0 text-brand-600" />
                      {row.opera}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
