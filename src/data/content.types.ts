export type ProjectTranslation = {
  overview: string;
  businessProblem: string;
  objective: string;
  solution: string;
  businessImpact: string;
};

export type ExperienceBlockTranslation = {
  heading: string;
  bullets: string[];
};

export type ExperienceEntryTranslation = {
  role: string;
  period: string;
  blocks: ExperienceBlockTranslation[];
};

export type CourseTranslation = {
  title: string;
  description?: string;
};

export type SiteContent = {
  nav: {
    home: string;
    about: string;
    experience: string;
    projects: string;
    skills: string;
    courses: string;
    certifications: string;
    contact: string;
    downloadResume: string;
  };
  hero: {
    title: string;
    titleSub: string;
    body: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  techStack: string[];
  impactMetrics: {
    heading: string;
    labels: {
      yearsInData: string;
      businessImpact: string;
      growth: string;
    };
  };
  home: {
    featuredProjects: string;
    viewAllProjects: string;
  };
  projectCard: {
    viewCaseStudy: string;
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  projectDetail: {
    allProjects: string;
    overview: string;
    businessProblem: string;
    objective: string;
    solution: string;
    businessImpact: string;
    technologies: string;
  };
  projectTranslations: Record<string, ProjectTranslation>;
  about: {
    eyebrow: string;
    name: string;
    intro: string;
    whatIDo: { heading: string; body: string };
    howIWork: { heading: string; body: string };
    whatImLearning: { heading: string; body: string };
  };
  experiencePage: {
    eyebrow: string;
  };
  experience: ExperienceEntryTranslation[];
  skillsPage: {
    eyebrow: string;
    title: string;
    categories: Record<string, string>;
  };
  certifications: {
    eyebrow: string;
    title: string;
    body: string;
  };
  courses: {
    eyebrow: string;
    title: string;
    education: {
      heading: string;
      degree: string;
      institution: string;
      year: string;
    };
    coursesHeading: string;
    coursesIntro: string;
    courseList: CourseTranslation[];
  };
  contact: {
    eyebrow: string;
    title: string;
    email: string;
    linkedin: string;
    github: string;
    downloadResume: string;
    shorterResumePrefix: string;
    shorterResumeLink: string;
  };
  footer: {
    role: string;
    copyrightSuffix: string;
  };
};
