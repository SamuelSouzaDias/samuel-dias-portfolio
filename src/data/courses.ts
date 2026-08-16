export type Course = {
  title: string;
  description?: string;
};

export const education = {
  degree: "Technology Degree in Data Science",
  institution: "Universidade Cruzeiro do Sul — São Paulo, Brazil",
  year: "2024",
};

// Placeholder titles based on Samuel's résumé description of this
// coursework, not verified exact course names from the platform.
// Update to match exactly if precise titles are provided.
export const courses: Course[] = [
  {
    title: "Power BI End-to-End",
    description: "DAX, Power Query, data modeling, service administration",
  },
  { title: "Microsoft Fabric Fundamentals" },
  { title: "Python for Data", description: "APIs, Pandas" },
  { title: "Data Storytelling & Dashboard Design" },
  { title: "Applied Statistics for Analysis" },
];
