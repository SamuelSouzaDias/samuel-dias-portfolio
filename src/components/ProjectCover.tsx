import { largeProjectCoverIcons, projectCoverIcons } from "@/data/projectCovers";

const iconSizes = {
  card: { base: "h-16 w-16", large: "h-[4.5rem] w-[4.5rem]" },
  banner: { base: "h-28 w-28", large: "h-32 w-32" },
};

export default function ProjectCover({
  slug,
  size = "card",
}: {
  slug: string;
  size?: "card" | "banner";
}) {
  const Icon = projectCoverIcons[slug];
  const sizeClass = largeProjectCoverIcons.has(slug)
    ? iconSizes[size].large
    : iconSizes[size].base;

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center border-t-4 border-gold ${
        size === "banner" ? "h-[280px] sm:h-[320px]" : "h-40"
      }`}
      style={{
        background: "linear-gradient(135deg, #0B1E3D 0%, #3C3014 100%)",
      }}
    >
      {Icon && (
        <Icon strokeWidth={1.5} className={`text-gold opacity-25 ${sizeClass}`} />
      )}
    </div>
  );
}
