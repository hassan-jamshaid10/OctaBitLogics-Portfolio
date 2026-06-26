import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about OctaBitLogics — our mission, engineering philosophy, global presence, and the team building AI-first software solutions for ambitious businesses worldwide.",
  alternates: { canonical: "https://octabitlogics.com/company" },
  openGraph: {
    title: "Company | OctaBitLogics",
    description:
      "Learn about OctaBitLogics — our mission, engineering philosophy, and global presence across Pakistan, USA, Europe, and Asia.",
    url: "https://octabitlogics.com/company",
  },
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
