import type { Metadata } from "next";
import CoursesContent from "./CoursesContent";

export const metadata: Metadata = {
  title: "Courses & Education",
  description:
    "Samuel Dias's formal education and ongoing, self-directed coursework in Analytics Engineering and Data Engineering.",
};

export default function CoursesPage() {
  return <CoursesContent />;
}
