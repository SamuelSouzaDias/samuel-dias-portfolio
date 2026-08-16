"use client";

import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

const sectionKeys = [
  "overview",
  "businessProblem",
  "objective",
  "solution",
  "businessImpact",
] as const;

export default function ProjectDetailContent({
  project,
}: {
  project: Project;
}) {
  const { language } = useLanguage();
  const t = getContent(language);
  const translated = t.projectTranslations[project.slug];

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <Link href="/projects" className="text-link text-sm font-medium">
        {t.projectDetail.allProjects}
      </Link>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.categories.map((category) => (
          <span
            key={category}
            className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs font-medium text-text-muted"
          >
            {category}
          </span>
        ))}
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {project.title}
      </h1>

      <div className="mt-10 overflow-hidden rounded-xl">
        <ProjectCover slug={project.slug} size="banner" />
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {sectionKeys.map((key) => (
          <section key={key}>
            <h2 className="text-lg font-semibold text-gold">
              {t.projectDetail[key]}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {translated[key]}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-lg font-semibold text-gold">
            {t.projectDetail.technologies}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-sm text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
