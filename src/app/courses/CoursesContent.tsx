"use client";

import { BookOpen, GraduationCap } from "lucide-react";
import { coverGradient } from "@/data/projectCovers";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function CoursesContent() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {t.courses.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {t.courses.title}
      </h1>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-bg-elevated">
        <div
          className="flex items-center gap-3 border-t-4 border-t-gold px-6 py-5"
          style={{ background: coverGradient }}
        >
          <GraduationCap
            strokeWidth={1.5}
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-gold opacity-25"
          />
          <h2 className="text-lg font-semibold text-gold">
            {t.courses.education.heading}
          </h2>
        </div>
        <div className="flex flex-col gap-1 p-6">
          <p className="font-medium text-text">{t.courses.education.degree}</p>
          <p className="text-sm text-text-muted">
            {t.courses.education.institution}
          </p>
          <p className="text-sm text-text-muted">{t.courses.education.year}</p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-border bg-bg-elevated">
        <div
          className="flex items-center gap-3 border-t-4 border-t-gold px-6 py-5"
          style={{ background: coverGradient }}
        >
          <BookOpen
            strokeWidth={1.5}
            aria-hidden="true"
            className="h-8 w-8 shrink-0 text-gold opacity-25"
          />
          <h2 className="text-lg font-semibold text-gold">
            {t.courses.coursesHeading}
          </h2>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-text-muted">
            {t.courses.coursesIntro}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {t.courses.courseList.map((course) => (
              <li key={course.title} className="text-sm">
                <span className="font-medium text-text">{course.title}</span>
                {course.description && (
                  <span className="text-text-muted"> — {course.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
