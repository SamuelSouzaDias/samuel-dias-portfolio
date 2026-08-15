import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCover from "@/components/ProjectCover";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.overview,
  };
}

const sections = [
  { key: "overview", label: "Overview" },
  { key: "businessProblem", label: "Business Problem" },
  { key: "objective", label: "Objective" },
  { key: "solution", label: "Solution" },
  { key: "businessImpact", label: "Business Impact" },
] as const;

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <Link
        href="/projects"
        className="text-sm font-medium text-blue hover:underline"
      >
        ← All projects
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
        {sections.map((section) => (
          <section key={section.key}>
            <h2 className="text-lg font-semibold text-gold">
              {section.label}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              {project[section.key]}
            </p>
          </section>
        ))}

        <section>
          <h2 className="text-lg font-semibold text-gold">Technologies</h2>
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
