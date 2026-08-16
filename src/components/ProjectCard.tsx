import Link from "next/link";
import type { Project } from "@/data/projects";
import ProjectCover from "./ProjectCover";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-bg-elevated transition-[border-color,box-shadow,translate] duration-200 ease-out hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_0_0_1px_rgba(176,141,43,0.35),0_16px_36px_-12px_rgba(176,141,43,0.35)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <ProjectCover slug={project.slug} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-muted"
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="line-clamp-2 text-lg font-semibold leading-snug text-text group-hover:text-gold">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-text-muted">
          {project.overview}
        </p>

        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-2 text-xs text-text-muted">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <span className="text-sm font-medium text-gold group-hover:underline group-hover:[text-shadow:0_0_12px_rgba(176,141,43,0.55)]">
          View case study →
        </span>
      </div>
    </Link>
  );
}
