import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  /** Use light text for dark backgrounds (e.g. footer, hero overlay). */
  tone?: "dark" | "light";
  className?: string;
  href?: string;
}

export function Logo({
  tone = "dark",
  className,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label="Opera — Inicio"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Image
        src="/img/logo.png"
        alt="Opera"
        width={120}
        height={40}
        className={cn(
          "h-8 w-auto",
          tone === "light" && "brightness-0 invert",
        )}
        priority
      />
      <span className="text-brand-700 font-bold">Opera</span>
    </Link>
  );
}
