import type { Stat } from "@/types/content";

interface StatsProps {
  items: Stat[];
}

/**
 * Headline statistics row (e.g. "100% Excelencia"). Renders a responsive grid
 * of large figures with a label and supporting sentence.
 */
export function Stats({ items }: StatsProps) {
  return (
    <dl className="grid gap-10 sm:grid-cols-3 sm:gap-8">
      {items.map((stat) => (
        <div key={stat.label} className="border-t-2 border-brand-600 pt-5">
          <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">
            {stat.label}
          </dt>
          <dd>
            <p className="mt-2 text-5xl font-bold tracking-tight text-brand-600">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              {stat.description}
            </p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
