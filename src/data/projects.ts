export type Project = {
  slug: string;
  title: string;
  categories: string[];
  technologies: string[];
  overview: string;
  businessProblem: string;
  objective: string;
  solution: string;
  businessImpact: string;
  hasPreview: boolean;
};

export const projects: Project[] = [
  {
    slug: "core-analytics-platform-migration",
    title: "Core Analytics Platform Migration",
    categories: ["Analytics Engineering", "BI"],
    technologies: ["Power BI", "DAX", "Power Query", "Tabular Editor"],
    overview:
      "A ground-up migration of a company's central analytics tool from a single unstructured file into a governed, multi-domain BI application.",
    businessProblem:
      "The company's central analytics tool was a single, unstructured multi-page file with no real governance or scalability.",
    objective:
      "Replace an unscalable, ungoverned reporting file with a structured application that could support ongoing growth in users and report domains.",
    solution:
      "Led the migration into a structured, multi-domain Power BI application with organized reports, ongoing DAX governance, and access control.",
    businessImpact:
      "Grew monthly active users by roughly 79% over the tracked period, reaching a broad, sustained user base.",
    hasPreview: false,
  },
  {
    slug: "payroll-integrity-analytics",
    title: "Payroll Integrity Analytics (\"Net Savings\" Initiative)",
    categories: ["Data Analytics", "Data Engineering"],
    technologies: ["PySpark", "Databricks"],
    overview:
      "An end-to-end analytics initiative that quantified, for the first time, how much of an internal cost-saving measure was actually sticking.",
    businessProblem:
      "The company was deducting payroll for improperly-approved absences, but a large share of those deductions were later reversed — nobody was measuring how much of the \"savings\" actually stuck.",
    objective:
      "Build a reliable, repeatable way to measure the true net effect of payroll deductions, and identify why so many were being reversed.",
    solution:
      "Built a consolidated PySpark pipeline joining multiple internal data sources to calculate, for the first time, a \"Net Savings\" metric (Initial Savings − Reversals). Defined the identification methodology, an effectiveness funnel, and a root-cause analysis of the reversals.",
    businessImpact:
      "Found that roughly three-quarters of an identified six-figure payroll deduction was being reversed the following month, with a confirmed net retention rate of 23.6%. Delivered a root-cause analysis and a 30/60/90-day action plan to leadership. A follow-up extension found that flagged employees had a meaningfully elevated termination rate, turning the tool into an early risk signal as well as a cost-recovery one.",
    hasPreview: false,
  },
  {
    slug: "client-risk-dashboard",
    title: "Client Risk Dashboard",
    categories: ["BI", "Analytics Engineering"],
    technologies: ["Power BI", "DAX", "Dimensional Modeling"],
    overview:
      "A recurring executive-facing dashboard combining churn signals and deal-pipeline activity into a single view of client-retention risk.",
    businessProblem:
      "Leadership needed a recurring, structured view of client retention risk, combining churn signals and deal-pipeline activity.",
    objective:
      "Give executive leadership a single, trustworthy view of retention risk to inform monthly strategy discussions.",
    solution:
      "Built the dashboard from the ground up — fact/dimension tables through the final report — incorporating churn analysis and deal-pipeline data.",
    businessImpact:
      "Used monthly in executive leadership discussions on client-retention risk — a small, senior, recurring audience, which is stronger evidence of impact than a high raw user count.",
    hasPreview: false,
  },
  {
    slug: "field-visit-tracking-system",
    title: "Field-Visit Tracking System",
    categories: ["Analytics Engineering", "Automation"],
    technologies: ["Power BI", "Dimensional Modeling", "Automated Email Distribution"],
    overview:
      "A self-service tracking system for field managers, paired with automated, hierarchy-aware email distribution of visit agendas.",
    businessProblem:
      "Field managers had no self-service way to track their team's visit schedule and completion rate.",
    objective:
      "Give field managers direct visibility into their team's visit schedule and completion rate without manual reporting.",
    solution:
      "Built the underlying fact/dimension data model and a self-service view for managers, plus an automated system that distributes the visit agenda by email, escalated by hierarchy.",
    businessImpact:
      "Drove monthly active usage of the underlying report to its highest point since launch, directly tied to the automated distribution rollout.",
    hasPreview: false,
  },
  {
    slug: "internal-bi-portfolio-analytics-panel",
    title: "Internal BI Portfolio Analytics Panel",
    categories: ["Analytics Engineering", "Data Engineering"],
    technologies: ["Databricks (bronze layer)", "Power BI", "DAX"],
    overview:
      "A self-referential analytics tool the data team uses to understand adoption and engagement across its own dashboard portfolio.",
    businessProblem:
      "The data team had no structured way to track adoption and engagement of its own dashboard portfolio.",
    objective:
      "Give the data team the same rigor of measurement, for its own reports, that it applies to the rest of the business.",
    solution:
      "Built the full stack — fact/dimension tables from the bronze layer, DAX measures, data model, and final visual design — as an internal tool for the data team.",
    businessImpact:
      "Supports ongoing decisions on which reports to sunset, maintain, or invest further in — evidence of a data-product-owner mindset, not just delivery work.",
    hasPreview: false,
  },
  {
    slug: "asset-tracking-dashboard",
    title: "Asset-Tracking Dashboard",
    categories: ["BI", "Operations"],
    technologies: ["Power BI", "Map-Based Visualization"],
    overview:
      "A map-based operational dashboard that closed a concrete traceability gap for equipment deployed across client sites.",
    businessProblem:
      "Time-clock terminals deployed at client sites were being lost or misplaced due to lack of traceability.",
    objective:
      "Give operations a clear, location-based view of every terminal and who is responsible for it.",
    solution:
      "Took over and refined an initial ETL draft, then built a map-based visualization dashboard showing each terminal's last known location and responsible manager, and shipped it to production.",
    businessImpact:
      "Solved a concrete operational problem with a direct, production-deployed fix — a smaller-scope project, but a clean example of identifying and closing a real gap.",
    hasPreview: false,
  },
  {
    slug: "data-democratization-governance-contribution",
    title: "Data Democratization & Governance Contribution",
    categories: ["Data Governance"],
    technologies: ["Power BI", "Documentation / Metadata Standards"],
    overview:
      "A contribution to a company-wide initiative opening governed, self-service access to previously restricted BI data.",
    businessProblem:
      "Analysts outside the data team had no direct access to BI data, creating a bottleneck for cross-functional analysis.",
    objective:
      "Make previously restricted data safely accessible to cross-functional analysts without compromising governance.",
    solution:
      "Contributed to a company initiative granting governed, self-service access to previously restricted data, working on the documentation and metadata layer required to make that access safe and usable.",
    businessImpact:
      "Supports broader self-service analysis across departments without compromising governance — contributor role, not lead.",
    hasPreview: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
