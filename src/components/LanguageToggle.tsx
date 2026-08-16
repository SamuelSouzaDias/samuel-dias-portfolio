"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle({
  className = "",
}: {
  className?: string;
}) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`flex items-center gap-1 text-sm font-semibold ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`rounded px-1.5 py-1 transition-[color,text-shadow] duration-200 ease-out hover:text-gold hover:[text-shadow:0_0_10px_rgba(176,141,43,0.5)] motion-reduce:transition-none ${
          language === "en" ? "text-gold" : "text-text-muted"
        }`}
      >
        EN
      </button>
      <span className="text-border" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        aria-pressed={language === "pt"}
        className={`rounded px-1.5 py-1 transition-[color,text-shadow] duration-200 ease-out hover:text-gold hover:[text-shadow:0_0_10px_rgba(176,141,43,0.5)] motion-reduce:transition-none ${
          language === "pt" ? "text-gold" : "text-text-muted"
        }`}
      >
        PT
      </button>
    </div>
  );
}
