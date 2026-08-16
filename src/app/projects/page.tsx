import type { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies from Samuel Dias's work in BI, Analytics Engineering, and Data Engineering.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
