"use client";

import { ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type MetricCounterProps = {
  target: number | null;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

const COUNT_DURATION_MS = 800;

export default function MetricCounter({
  target,
  prefix = "",
  suffix = "",
  display,
  label,
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null) return;
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (reduceMotion) {
          setCount(target);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / COUNT_DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="flex flex-1 flex-col gap-2 py-6 sm:px-8 sm:py-0 sm:first:pl-0 sm:last:pr-0"
    >
      <ShieldCheck
        strokeWidth={1.5}
        aria-hidden="true"
        className="h-5 w-5 text-gold"
      />
      <span className="text-3xl font-bold tracking-tight text-gold tabular-nums sm:text-4xl">
        {display ?? `${prefix}${count}${suffix}`}
      </span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  );
}
