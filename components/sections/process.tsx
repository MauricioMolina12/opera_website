import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { ProcessStep, SectionIntro } from "@/types/content";

interface ProcessProps {
  intro: SectionIntro;
  steps: ProcessStep[];
}

/**
 * "Así transformamos cada espacio": an intro column beside a numbered vertical
 * timeline describing the service process.
 */
export function Process({ intro, steps }: ProcessProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      {/* Intro */}
      <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 text-balance sm:text-4xl">
          {intro.title}
        </h2>
        {intro.subtitle && (
          <p className="mt-4 text-lg leading-relaxed text-ink-500 text-pretty">
            {intro.subtitle}
          </p>
        )}
        {intro.cta && (
          <Button className="mt-6" onClick={intro.event}>
            {intro.cta.label}
            <ArrowRightIcon className="size-4" />
          </Button>
        )}
      </div>

      {/* Timeline */}
      <ol className="relative lg:col-span-8">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.number} className="relative flex gap-5 sm:gap-6">
              {/* Marker + connecting line */}
              <div className="flex flex-col items-center">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700 ring-1 ring-brand-100">
                  {step.number}
                </span>
                {!isLast && (
                  <span aria-hidden className="mt-1 w-px flex-1 bg-ink-200" />
                )}
              </div>

              <div className={isLast ? "pb-0" : "pb-10"}>
                <h3 className="text-lg font-semibold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink-500 text-pretty">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
