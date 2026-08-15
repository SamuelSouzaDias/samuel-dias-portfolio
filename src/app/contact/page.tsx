import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Samuel Dias via email, LinkedIn, or GitHub.",
};

const links = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
  { label: "Download Resume", href: site.resumeComplete },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        Contact
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Let&apos;s Connect
      </h1>

      <div className="mt-10 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-gold hover:text-gold"
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-muted">
        Prefer a shorter resume?{" "}
        <a
          href={site.resumeShort}
          className="font-medium text-blue hover:underline"
        >
          Download the one-page version
        </a>
        .
      </p>
    </div>
  );
}
