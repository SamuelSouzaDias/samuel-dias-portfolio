export const site = {
  name: "Samuel Dias",
  role: "Data & Analytics Engineer",
  tagline: "with 4+ years of BI foundation",
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

export type ImpactMetric = {
  target: number | null;
  prefix?: string;
  suffix?: string;
  display?: string;
  label: string;
};

export const impactMetrics: ImpactMetric[] = [
  { target: 4, suffix: "+", label: "Years in Data & BI" },
  {
    target: null,
    display: "Six-figure",
    label: "Business impact identified (payroll-integrity initiative)",
  },
  { target: 79, prefix: "~", suffix: "%", label: "Growth in monthly active platform users" },
];
