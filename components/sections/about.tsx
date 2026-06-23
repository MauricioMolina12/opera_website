import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { AboutContent } from "@/types/content";

interface AboutProps {
  content: AboutContent;
}

/**
 * "Quiénes somos" intro: a large two-column statement — headline on the left,
 * supporting copy and a CTA on the right.
 */
export function About({ content }: AboutProps) {
  return (
    <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-ink-900 text-balance sm:text-4xl">
        {content.title}
      </h2>
      <div>
        <p className="text-lg leading-relaxed text-ink-500 text-pretty">
          {content.body}
        </p>
        {content.cta && (
          <Button
            href={content.cta.href}
            variant="outline"
            className="mt-6"
          >
            {content.cta.label}
            <ArrowRightIcon className="size-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
