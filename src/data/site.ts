export const site = {
  name: "Samuel Dias",
  role: "Data & Analytics Engineer",
  tagline: "with 4+ years of BI foundation",
  email: "samuel.dias.career@outlook.com",
  linkedin: "https://www.linkedin.com/in/samuelsouzadias",
  github: "https://github.com/SamuelSouzaDias",
  resumeComplete: {
    en: "/resume/samuel-dias-resume-complete.pdf",
    pt: "/resume/samuel-dias-resume-complete-pt.pdf",
  },
  resumeShort: {
    en: "/resume/samuel-dias-resume-short.pdf",
    pt: "/resume/samuel-dias-resume-short-pt.pdf",
  },
} as const;

export const navLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "experience", href: "/experience" },
  { key: "projects", href: "/projects" },
  { key: "skills", href: "/skills" },
  { key: "courses", href: "/courses" },
  { key: "certifications", href: "/certifications" },
  { key: "contact", href: "/contact" },
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

export type ImpactMetric = {
  key: "yearsInData" | "businessImpact" | "growth";
  target: number | null;
  prefix?: string;
  suffix?: string;
  display?: string;
};

export const impactMetrics: ImpactMetric[] = [
  { key: "yearsInData", target: 4, suffix: "+" },
  { key: "businessImpact", target: null, display: "Six-figure" },
  { key: "growth", target: 79, prefix: "~", suffix: "%" },
];
