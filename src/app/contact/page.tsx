import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Samuel Dias via email, LinkedIn, or GitHub.",
};

export default function ContactPage() {
  return <ContactContent />;
}
