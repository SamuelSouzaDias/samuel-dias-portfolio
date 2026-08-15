import type { Metadata } from "next";
import { certifications } from "@/data/certifications";

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

      <div className="mt-10 rounded-xl border border-border bg-bg-elevated p-8">
        <p className="text-base leading-relaxed text-text-muted">
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
