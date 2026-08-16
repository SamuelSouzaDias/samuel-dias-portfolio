import {
  BarChart3,
  Cloud,
  Code2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skillCategoryIcons: Record<string, LucideIcon> = {
  "Analytics & BI": BarChart3,
  Programming: Code2,
  "Data Engineering & Cloud": Cloud,
  "Data Governance & Quality": ShieldCheck,
};

export const skills: SkillCategory[] = [
  {
    category: "Analytics & BI",
    items: [
      "Power BI (Advanced DAX, Power Query, Tabular Editor)",
      "Dimensional Modeling (Star Schema)",
      "KPI Development",
      "Executive Dashboards",
      "Dashboard UX",
    ],
  },
  {
    category: "Programming",
    items: ["Python (Pandas)", "SQL (SQL Server, Spark SQL)"],
  },
  {
    category: "Data Engineering & Cloud",
    items: [
      "Databricks",
      "PySpark",
      "Azure Data Factory (ADF)",
      "ETL/ELT Pipeline Design",
      "Git / Azure DevOps (PR-based workflow)",
    ],
  },
  {
    category: "Data Governance & Quality",
    items: [
      "Row-Level Security (RLS)",
      "Access Governance",
      "Data Validation",
      "Data-Quality Troubleshooting",
      "Documentation Standards",
      "Metadata for Self-Service Analytics",
    ],
  },
];
