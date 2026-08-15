import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 transition-colors hover:border-gold/50"
    >
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

      <h3 className="text-lg font-semibold text-text group-hover:text-gold">
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

      <span className="text-sm font-medium text-blue group-hover:underline">
        View case study →
      </span>
    </Link>
  );
}
