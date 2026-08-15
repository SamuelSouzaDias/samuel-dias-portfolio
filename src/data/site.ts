export const site = {
  name: "Samuel Dias",
  role: "Data & Analytics Engineer",
  tagline: "in transition, with 4+ years of BI foundation",
  email: "samuelsouzadias@outlook.com",
  linkedin: "https://www.linkedin.com/in/samuelsouzadias",
  github: "https://github.com/SamuelSouzaDias",
  resumeComplete: "/resume/samuel-dias-resume-complete.pdf",
  resumeShort: "/resume/samuel-dias-resume-short.pdf",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

export const techStack = [
  "Power BI",
  "SQL",
  "Python",
  "PySpark",
  "Databricks",
  "Azure Data Factory",
  "DAX",
  "Data Modeling",
] as const;

export const impactMetrics = [
  { value: "4+", label: "Years in Data & BI" },
  { value: "Six-figure", label: "Business impact identified (payroll-integrity initiative)" },
  { value: "~79%", label: "Growth in monthly active platform users" },
] as const;
