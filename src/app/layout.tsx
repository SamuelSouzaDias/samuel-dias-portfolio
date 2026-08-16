import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const siteUrl = "https://samuel-dias-portfolio.vercel.app";
const title = "Samuel Dias | Data & Analytics Engineer";
const description =
  "Portfolio of Samuel Dias, a data professional transitioning from BI into Analytics Engineering and Data Engineering. Power BI, SQL, Python, PySpark, Databricks.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Samuel Dias",
  },
  description,
  keywords: [
    "Samuel Dias",
    "Data Analyst",
    "Data Analytics",
    "Power BI",
    "SQL",
    "Python",
    "PySpark",
    "Business Intelligence",
    "Data Engineering",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Samuel Dias",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-bg text-text">
        <LanguageProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
