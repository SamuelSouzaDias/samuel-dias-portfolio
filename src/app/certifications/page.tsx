import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { certifications } from "@/data/certifications";
import { coverGradient } from "@/data/projectCovers";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Samuel Dias's certification roadmap, starting with the Microsoft PL-300 Power BI Data Analyst Associate.",
};

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Certifications
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Coming soon
      </h1>

      <div
        className="relative mt-10 overflow-hidden rounded-xl border border-border border-t-4 border-t-gold p-8"
        style={{ background: coverGradient }}
      >
        <GraduationCap
          strokeWidth={1.5}
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 text-gold opacity-10"
        />
        <p className="relative text-base leading-relaxed text-text-muted">
          No formal certifications completed yet — currently preparing for
          the{" "}
          <span className="font-medium text-text">
            {certifications[0]?.name}
          </span>{" "}
          as the first target. Check back soon.
        </p>
      </div>
    </div>
  );
}
