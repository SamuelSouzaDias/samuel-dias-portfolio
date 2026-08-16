"use client";

import TimelineItem from "@/components/TimelineItem";
import { experience } from "@/data/experience";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function ExperienceContent() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {t.experiencePage.eyebrow}
      </p>

      {experience.map((entry, index) => {
        const translatedEntry = t.experience[index];
        return (
          <div key={entry.company} className="mt-3">
            <div className="w-12 border-t-4 border-gold" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              {translatedEntry.role}
            </h1>
            <p className="mt-2 text-base text-text-muted">
              {entry.company} — {translatedEntry.period}
            </p>

            <div className="mt-14 flex flex-col gap-14">
              {translatedEntry.blocks.map((block) => (
                <TimelineItem key={block.heading} {...block} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
