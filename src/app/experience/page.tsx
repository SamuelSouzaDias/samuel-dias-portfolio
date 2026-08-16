import type { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Samuel Dias's professional experience in Business Intelligence and Data Analytics at Verzani & Sandrini.",
};

export default function ExperiencePage() {
  return <ExperienceContent />;
}
