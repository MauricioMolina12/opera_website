"use client";

import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { SolutionsPageContent } from "@/types/content";

interface SolutionsSectorsProps {
  content: SolutionsPageContent["sectors"];
}


export function SolutionsSectors({ content }: SolutionsSectorsProps) {
  const [featured, ...secondary] = content.items;

  return (
    <div>
      <SectionHeading
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3 md:grid-rows-3">
        {/* Featured card — takes the left column, spans full height on desktop */}
        <div className="group relative col-span-1 row-span-3 overflow-hidden rounded-2xl md:col-span-2">
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gradient overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
          />

          {/* Top-right corner arrow link */}
          <Link
            href={featured.cta.href}
            className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-700"
            aria-label={featured.title}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>

          {/* Text content */}
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-white sm:p-8">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              {featured.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/80 sm:text-base">
              {featured.description}
            </p>
            <Link
              href={featured.cta.href}
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-600"
            >
              {featured.cta.label}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Secondary cards — grid on the right column */}
        {secondary.map((sector, index) => (
          <div
            key={sector.title}
            className={cn(
              "group relative overflow-hidden rounded-2xl",
              // The last card (Instituciones) spans full width on desktop
              index === secondary.length - 1 && secondary.length === 4
                ? "md:col-span-2"
                : "col-span-1",
              // Mobile: fixed aspect ratio; desktop: fill the grid cell naturally
              "aspect-[4/3] md:aspect-auto md:min-h-[9rem]",
            )}
          >
            <Image
              src={sector.image.src}
              alt={sector.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
            />

            {/* Top-right corner arrow link */}
            <Link
              href={sector.cta.href}
              className="absolute right-3 top-3 z-10 grid size-8 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-brand-700"
              aria-label={sector.title}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-3.5"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </Link>

            {/* Text content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white">
              <h3 className="text-base font-semibold sm:text-lg">
                {sector.title}
              </h3>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                {sector.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}