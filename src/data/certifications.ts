export type Certification = {
  name: string;
  status: "planned" | "in-progress" | "completed";
};

export const certifications: Certification[] = [
  {
    name: "Microsoft PL-300 (Power BI Data Analyst Associate)",
    status: "planned",
  },
];
