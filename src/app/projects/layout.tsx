import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore OctaBitLogics' portfolio — AI-powered platforms, enterprise web apps, mobile solutions, and real-world case studies shipped for global clients.",
  alternates: { canonical: "https://octabitlogics.com/projects" },
  openGraph: {
    title: "Projects | OctaBitLogics",
    description:
      "From AI-powered platforms to enterprise-grade web apps — see the real work OctaBitLogics has shipped for global clients across industries.",
    url: "https://octabitlogics.com/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
