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
            className={
              link.label === "Email"
                ? "rounded-md bg-gold px-6 py-3 text-sm font-semibold text-bg transition-[filter,box-shadow] duration-200 ease-out hover:shadow-[0_0_24px_4px_rgba(176,141,43,0.3)] hover:brightness-110 motion-reduce:transition-none"
                : "rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-[color,border-color,filter,box-shadow] duration-200 ease-out hover:border-gold hover:text-gold hover:shadow-[0_0_20px_3px_rgba(176,141,43,0.28)] hover:brightness-110 motion-reduce:transition-none"
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-muted">
        Prefer a shorter resume?{" "}
        <a
          href={site.resumeShort}
          className="text-link font-medium"
        >
          Download the one-page version
        </a>
        .
      </p>
    </div>
  );
}
