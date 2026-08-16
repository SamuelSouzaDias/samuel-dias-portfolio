"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function AboutContent() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {t.about.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {t.about.name}
      </h1>

      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-text-muted">
            {t.about.intro}
          </p>
        </div>
        <div className="mx-auto w-full max-w-[220px] shrink-0 lg:mx-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <Image
              src="/images/samuel-photo.png"
              alt="Samuel Dias"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-12">
        <section>
          <div className="w-12 border-t-4 border-gold" />
          <h2 className="mt-4 text-xl font-semibold text-text">
            {t.about.whatIDo.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {t.about.whatIDo.body}
          </p>
        </section>

        <section>
          <div className="w-12 border-t-4 border-gold" />
          <h2 className="mt-4 text-xl font-semibold text-text">
            {t.about.howIWork.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {t.about.howIWork.body}
          </p>
        </section>

        <section>
          <div className="w-12 border-t-4 border-gold" />
          <h2 className="mt-4 text-xl font-semibold text-text">
            {t.about.whatImLearning.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {t.about.whatImLearning.body}
          </p>
        </section>
      </div>
    </div>
  );
}
