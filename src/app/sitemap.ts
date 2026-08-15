import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://samuel-dias-portfolio.vercel.app";

const staticRoutes = [
  "",
  "/about",
  "/experience",
  "/projects",
  "/skills",
  "/certifications",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries];
}
