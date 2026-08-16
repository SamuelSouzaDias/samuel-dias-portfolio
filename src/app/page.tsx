"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import MetricCounter from "@/components/MetricCounter";
import ProjectCard from "@/components/ProjectCard";
import { impactMetrics } from "@/data/site";
import { projects } from "@/data/projects";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

const featuredSlugs = [
  "payroll-integrity-analytics",
  "core-analytics-platform-migration",
  "client-risk-dashboard",
];

export default function Home() {
  const { language } = useLanguage();
  const t = getContent(language);
  const featuredProjects = projects.filter((project) =>
    featuredSlugs.includes(project.slug)
  );

  return (
    <>
      <Hero />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {t.techStack.map((tech) => (
              <li
                key={tech}
                className="text-sm font-medium tracking-wide text-text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-text-muted">
            {t.impactMetrics.heading}
          </h2>
          <div className="mt-5 flex flex-col divide-y divide-gold/20 sm:flex-row sm:divide-x sm:divide-y-0">
            {impactMetrics.map((metric) => (
              <MetricCounter
                key={metric.key}
                target={metric.target}
                prefix={metric.prefix}
                suffix={metric.suffix}
                display={metric.display}
                label={t.impactMetrics.labels[metric.key]}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-text">
              {t.home.featuredProjects}
            </h2>
            <Link href="/projects" className="text-link text-sm font-medium">
              {t.home.viewAllProjects}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
