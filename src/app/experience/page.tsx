import type { Metadata } from "next";
import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Samuel Dias's professional experience in Business Intelligence and Data Analytics at Verzani & Sandrini.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Experience
      </p>

      {experience.map((entry) => (
        <div key={entry.company} className="mt-3">
          <h1 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            {entry.role}
          </h1>
          <p className="mt-2 text-base text-text-muted">
            {entry.company} — {entry.period}
          </p>

          <div className="mt-14 flex flex-col gap-14">
            {entry.blocks.map((block) => (
              <TimelineItem key={block.heading} {...block} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
