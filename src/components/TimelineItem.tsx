import type { ExperienceBlock } from "@/data/experience";

export default function TimelineItem({ heading, bullets }: ExperienceBlock) {
  return (
    <div className="relative border-l border-border pl-8">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
      <h3 className="text-lg font-semibold text-text">{heading}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-relaxed text-text-muted"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
