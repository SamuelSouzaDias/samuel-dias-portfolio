import Link from "next/link";
import Hero from "@/components/Hero";
import MetricCounter from "@/components/MetricCounter";
import ProjectCard from "@/components/ProjectCard";
import { impactMetrics, techStack } from "@/data/site";
import { projects } from "@/data/projects";

const featuredSlugs = [
  "payroll-integrity-analytics",
  "core-analytics-platform-migration",
  "client-risk-dashboard",
];

export default function Home() {
  const featuredProjects = projects.filter((project) =>
    featuredSlugs.includes(project.slug)
  );

  return (
    <>
      <Hero />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {techStack.map((tech) => (
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
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold text-text">Impact Metrics</h2>
          <div className="mt-8 flex flex-col divide-y divide-gold/20 sm:flex-row sm:divide-x sm:divide-y-0">
            {impactMetrics.map((metric) => (
              <MetricCounter
                key={metric.label}
                target={metric.target}
                prefix={metric.prefix}
                suffix={metric.suffix}
                display={metric.display}
                label={metric.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-text">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm font-medium text-blue hover:underline"
            >
              View all projects →
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
