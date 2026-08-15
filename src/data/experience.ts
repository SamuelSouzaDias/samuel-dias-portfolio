export type ExperienceBlock = {
  heading: string;
  bullets: string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  blocks: ExperienceBlock[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Business Intelligence / Data Analyst",
    company: "Verzani & Sandrini",
    period: "February 2022 — Present",
    blocks: [
      {
        heading: "Core Analytics Platform",
        bullets: [
          "Led the migration of the company's core analytics tool from a single-report file into a structured, multi-domain Power BI application, growing monthly active users by roughly 79% and reaching a broad, sustained user base, while owning ongoing maintenance, DAX governance, and access control.",
          "Built an internal analytics tool for the data team to track adoption and engagement across the company's own BI portfolio, supporting decisions on which reports to sunset, maintain, or invest in.",
          "Own end-to-end user access governance for the company's Power BI application, configuring Row-Level Security (RLS), audience segmentation, and hierarchical visibility permissions.",
        ],
      },
      {
        heading: "Analytics Projects & Business Impact",
        bullets: [
          "Designed and led a payroll-integrity analytics initiative in PySpark/Databricks, uncovering that roughly three-quarters of an identified six-figure payroll deduction was being reversed the following month — surfacing a previously invisible \"Net Savings\" metric with a 23.6% retention rate, and presenting root-cause analysis and a 30/60/90-day action plan to leadership.",
          "Built a Client Risk dashboard from the ground up, incorporating churn analysis and deal-pipeline data; used monthly in executive leadership discussions on client-retention risk.",
          "Designed and built a self-service field-visit tracking system, including automated hierarchical reporting, driving monthly active usage to its highest point since launch.",
          "Built an asset-tracking dashboard with map-based visualization to address lost or misplaced equipment across client sites, taking the solution through to production.",
        ],
      },
      {
        heading: "Governance & Enablement",
        bullets: [
          "Contributed to a data-democratization initiative granting cross-functional analysts direct, governed access to previously restricted BI data.",
          "Partnered with a teammate to document DAX measures and fact tables directly in Databricks, improving discoverability for new data consumers.",
          "Authored the company's internal onboarding course for the new Power BI application from scratch.",
          "Query and transform data from enterprise-scale source tables (100M+ records) using period-based filtering, working downstream of ingestion to build fact/dimension models.",
        ],
      },
    ],
  },
];
