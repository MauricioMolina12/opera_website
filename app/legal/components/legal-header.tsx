import type { ReactNode } from "react";

interface LegalHeaderProps {
  title: string;
  description: ReactNode;
  lastUpdated: string;
  badge?: string;
}

export function LegalHeader({
  title,
  description,
  lastUpdated,
  badge = "Información legal",
}: LegalHeaderProps) {
  return (
    <header className="border-b border-neutral-200 pb-10">
      <span className="inline-flex items-center rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700">
        {badge}
      </span>

      <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-ink-900">
        {title}
      </h1>

      <div className="mt-5 max-w-3xl text-lg leading-8 text-ink-600">
        {description}
      </div>

      <div className="mt-8 flex items-center gap-3 text-sm text-ink-500">
        <span>Última actualización</span>

        <span className="h-1 w-1 rounded-full bg-neutral-300" />

        <time dateTime="2026-06-29">
          {lastUpdated}
        </time>
      </div>
    </header>
  );
}