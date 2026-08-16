import type { Language } from "@/context/LanguageContext";
import { content as en } from "./content.en";
import { content as pt } from "./content.pt";

const dictionaries = { en, pt };

export function getContent(language: Language) {
  return dictionaries[language];
}
