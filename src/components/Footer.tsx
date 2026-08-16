"use client";

import Link from "next/link";
import { navLinks, site } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { getContent } from "@/data/content";

export default function Footer() {
  const { language } = useLanguage();
  const t = getContent(language);

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12">
        <div className="flex flex-col gap-2">
          <span className="font-semibold tracking-tight text-text">
            Samuel Dias
          </span>
          <span className="text-sm text-text-muted">{t.footer.role}</span>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-muted transition-colors hover:text-text"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-gold"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-gold"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-text-muted transition-colors hover:text-gold"
            >
              {t.contact.email}
            </a>
          </li>
        </ul>

        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Samuel Dias. {t.footer.copyrightSuffix}
        </p>
      </div>
    </footer>
  );
}
