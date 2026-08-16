import type { Metadata } from "next";
import { skillCategoryIcons, skills } from "@/data/skills";
import { coverGradient } from "@/data/projectCovers";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across Analytics & BI, Programming, Data Engineering & Cloud, and Data Governance & Quality.",
};

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Skills
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        What I work with
      </h1>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {skills.map((group) => {
          const Icon = skillCategoryIcons[group.category];
          return (
            <div
              key={group.category}
              className="overflow-hidden rounded-xl border border-border bg-bg-elevated"
            >
              <div
                className="flex items-center gap-3 border-t-4 border-t-gold px-6 py-5"
                style={{ background: coverGradient }}
              >
                {Icon && (
                  <Icon
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="h-8 w-8 shrink-0 text-gold opacity-25"
                  />
                )}
                <h2 className="text-lg font-semibold text-gold">
                  {group.category}
                </h2>
              </div>
              <ul className="flex flex-col gap-2 p-6">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
