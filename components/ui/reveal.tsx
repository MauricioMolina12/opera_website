"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

/** True when the user has asked the OS to minimize motion. */
function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger the entrance by this many milliseconds. */
  delay?: number;
  /** Render as a different element (defaults to "div"). */
  as?: ElementType;
}

/**
 * Scroll-reveal wrapper: fades and lifts its children into place the first time
 * they enter the viewport. Gives every section a smooth, consistent entrance
 * without a heavy animation dependency. Respects `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out will-change-transform motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
        className,
      )}
    >
      {children}
    </Component>
  );
}
