import type { AboutPageContent } from "@/types/content";

interface AboutValuesProps {
  content: AboutPageContent["values"];
}

/**
 * Core values: an eyebrow, a two-column intro (headline + paragraph), and a
 * responsive row of numbered brand cards.
 */
export function AboutValues({ content }: AboutValuesProps) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
        {content.eyebrow}
      </p>

      <div className="mt-6 grid items-start gap-8 md:grid-cols-2 md:gap-16">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight text-ink-900 text-balance sm:text-3xl">
          {content.title}
        </h2>
        <p className="text-lg leading-relaxed text-ink-500 text-pretty">
          {content.intro}
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((item) => (
          <li
            key={item.number + item.title}
            className="flex flex-col rounded-2xl bg-brand-600 p-7 text-white shadow-sm"
          >
            <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-brand-100">
              {item.description}
            </p>
            <span
              aria-hidden
              className="mt-8 text-4xl font-bold tracking-tight text-white/35"
            >
              {item.number}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
