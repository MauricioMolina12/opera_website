import type { ReactNode } from "react";

interface LegalSectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export function LegalSection({
  id,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-neutral-200 pb-12 last:border-none last:pb-0"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-ink-900">
        {title}
      </h2>

      <div className="prose prose-neutral mt-6 max-w-none leading-8 prose-p:text-ink-600 prose-li:text-ink-600 prose-strong:text-ink-900">
        {children}
      </div>
    </section>
  );
}