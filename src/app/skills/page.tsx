import type { Metadata } from "next";
import SkillsContent from "./SkillsContent";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills across Analytics & BI, Programming, Data Engineering & Cloud, and Data Governance & Quality.",
};

export default function SkillsPage() {
  return <SkillsContent />;
}
