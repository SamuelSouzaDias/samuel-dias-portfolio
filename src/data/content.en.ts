import { projects } from "./projects";
import { experience } from "./experience";
import { skillCategoryIcons } from "./skills";
import { techStack } from "./site";
import { courses, education } from "./courses";
import type { ProjectTranslation, SiteContent } from "./content.types";

const projectTranslations: Record<string, ProjectTranslation> =
  Object.fromEntries(
    projects.map((project) => [
      project.slug,
      {
        overview: project.overview,
        businessProblem: project.businessProblem,
        objective: project.objective,
        solution: project.solution,
        businessImpact: project.businessImpact,
      },
    ])
  );

const skillCategoryLabels: Record<string, string> = Object.fromEntries(
  Object.keys(skillCategoryIcons).map((category) => [category, category])
);

export const content: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    courses: "Courses",
    certifications: "Certifications",
    contact: "Contact",
    downloadResume: "Download Resume",
  },
  hero: {
    title: "Data & Analytics Engineer",
    titleSub: "— with 4+ years of BI foundation",
    body: "I build the layer between raw data and business decisions — and I care more about whether a number can be trusted than about how a dashboard looks.",
    ctaPrimary: "Explore My Work",
    ctaSecondary: "Download Resume",
  },
  techStack: [...techStack],
  impactMetrics: {
    heading: "Impact Metrics",
    labels: {
      yearsInData: "Years in Data & BI",
      businessImpact: "Business impact identified (payroll-integrity initiative)",
      growth: "Growth in monthly active platform users",
    },
  },
  home: {
    featuredProjects: "Featured Projects",
    viewAllProjects: "View all projects →",
  },
  projectCard: {
    viewCaseStudy: "View case study →",
  },
  projectsPage: {
    eyebrow: "Projects",
    title: "Case Studies",
    intro: "Seven projects spanning BI, Analytics Engineering, Data Engineering, and Data Governance — generalized to protect internal company details.",
  },
  projectDetail: {
    allProjects: "← All projects",
    overview: "Overview",
    businessProblem: "Business Problem",
    objective: "Objective",
    solution: "Solution",
    businessImpact: "Business Impact",
    technologies: "Technologies",
  },
  projectTranslations,
  about: {
    eyebrow: "About",
    name: "Samuel Dias",
    intro: "I'm a data professional who started on the ground floor — literally learning SQL and Python on my own time — and worked my way into a data team by building something good enough to get noticed. That instinct hasn't changed: I still care more about whether a number can be trusted than about how a dashboard looks.",
    whatIDo: {
      heading: "What I Do",
      body: 'I build the layer between raw data and business decisions — from Databricks/PySpark pipelines to the executive dashboards people actually use to make calls. My strongest work tends to start with a question nobody had quite asked yet: not "what\'s the number," but "can we trust the number, and why does it keep changing."',
    },
    howIWork: {
      heading: "How I Work",
      body: "I default to ownership end-to-end — ingestion, modeling, governance, and the final report — rather than handing off pieces along the way. I use a PR-based Git workflow even for BI work, because I think analytics deserves the same rigor as software. And I'd rather flag a metric I don't trust yet than ship a clean-looking number I can't defend.",
    },
    whatImLearning: {
      heading: "What I'm Learning",
      body: "Right now: dbt and Airflow, to formalize the orchestration and testing discipline I've been applying informally for years — plus enough French to widen where I can work. Long-term, I'm moving deliberately from BI toward Analytics Engineering and Data Engineering, without losing the business fluency that BI forced me to build first.",
    },
  },
  experiencePage: {
    eyebrow: "Experience",
  },
  experience: experience.map((entry) => ({
    role: entry.role,
    period: entry.period,
    blocks: entry.blocks.map((block) => ({
      heading: block.heading,
      bullets: [...block.bullets],
    })),
  })),
  skillsPage: {
    eyebrow: "Skills",
    title: "What I work with",
    categories: skillCategoryLabels,
  },
  certifications: {
    eyebrow: "Certifications",
    title: "Coming soon",
    body: "No formal certifications completed yet. This section will be updated as certifications are completed — check back soon.",
  },
  courses: {
    eyebrow: "Courses & Education",
    title: "Continuous Learning",
    education: {
      heading: "Education",
      degree: education.degree,
      institution: education.institution,
      year: education.year,
    },
    coursesHeading: "Courses",
    coursesIntro: "Ongoing, self-directed coursework to support the transition toward Analytics Engineering and Data Engineering.",
    courseList: courses.map((course) => ({
      title: course.title,
      description: course.description,
    })),
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's Connect",
    email: "Email",
    linkedin: "LinkedIn",
    github: "GitHub",
    downloadResume: "Download Resume",
    shorterResumePrefix: "Prefer a shorter resume?",
    shorterResumeLink: "Download the one-page version",
  },
  footer: {
    role: "Data & Analytics Engineer",
    copyrightSuffix: "All rights reserved.",
  },
};
