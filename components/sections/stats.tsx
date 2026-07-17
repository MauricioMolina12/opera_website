"use client";

import { useEffect, useRef, useState } from "react";

import type { Stat } from "@/types/content";

interface StatsProps {
  items: Stat[];
}

/** Parse a stat value string into its numeric and non-numeric parts.
 *  e.g. "99,6%" → { prefix: "", number: 99.6, suffix: "%" }
 *       "+250" → { prefix: "+", number: 250, suffix: "" } */
function parseValue(raw: string) {
  const match = raw.match(/^([^\d.,]*)([\d.,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: "" };
  const number = parseFloat(match[2].replace(/\./g, "").replace(",", ".")) || 0;
  return { prefix: match[1], number, suffix: match[3] };
}

/** Animate a single number from 0 → target with comma/decimal formatting. */
function AnimatedValue({ raw }: { raw: string }) {
  const { prefix, number: target, suffix } = parseValue(raw);
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasStarted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;

        const duration = 2000; // ms
        const steps = 60; // ~60fps
        const increment = target / steps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          const next = Math.min(increment * step, target);
          setCurrent(next);
          if (step >= steps) clearInterval(timer);
        }, duration / steps);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display = Number.isInteger(target)
    ? Math.round(current).toString()
    : current.toFixed(1).replace(".", ",");

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

/**
 * Headline statistics row with animated counters that start when the section
 * scrolls into view.
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
              <AnimatedValue raw={stat.value} />
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