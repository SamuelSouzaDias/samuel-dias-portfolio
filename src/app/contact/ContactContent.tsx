"use client";

import { site } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function ContactContent() {
  const { language } = useLanguage();
  const t = getContent(language);

  const links = [
    { key: "email", label: t.contact.email, href: `mailto:${site.email}` },
    { key: "linkedin", label: t.contact.linkedin, href: site.linkedin },
    { key: "github", label: t.contact.github, href: site.github },
    {
      key: "resume",
      label: t.contact.downloadResume,
      href: site.resumeComplete[language],
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        {t.contact.eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {t.contact.title}
      </h1>

      <div className="mt-10 flex flex-wrap gap-4">
        {links.map((link) => (
          <a
            key={link.key}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={
              link.key === "email"
                ? "rounded-md bg-gold px-6 py-3 text-sm font-semibold text-bg transition-[filter,box-shadow] duration-200 ease-out hover:shadow-[0_0_24px_4px_rgba(176,141,43,0.3)] hover:brightness-110 motion-reduce:transition-none"
                : "rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-[color,border-color,filter,box-shadow] duration-200 ease-out hover:border-gold hover:text-gold hover:shadow-[0_0_20px_3px_rgba(176,141,43,0.28)] hover:brightness-110 motion-reduce:transition-none"
            }
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="mt-10 text-sm text-text-muted">
        {t.contact.shorterResumePrefix}{" "}
        <a href={site.resumeShort[language]} className="text-link font-medium">
          {t.contact.shorterResumeLink}
        </a>
        .
      </p>
    </div>
  );
}
