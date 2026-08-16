"use client";

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function ProjectsContent() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {t.projectsPage.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {t.projectsPage.title}
      </h1>
      <p className="mt-4 max-w-2xl text-base text-text-muted">
        {t.projectsPage.intro}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
