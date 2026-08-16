import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Samuel Dias — a data professional moving from Business Intelligence into Analytics Engineering and Data Engineering.",
};

export default function AboutPage() {
  return <AboutContent />;
}
