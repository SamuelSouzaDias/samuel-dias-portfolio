import type { Metadata } from "next";
import CertificationsContent from "./CertificationsContent";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Samuel Dias's certifications — coming soon.",
};

export default function CertificationsPage() {
  return <CertificationsContent />;
}
