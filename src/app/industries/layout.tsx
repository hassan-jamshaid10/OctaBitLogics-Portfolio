import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "OctaBitLogics delivers intelligent software solutions across fintech, healthcare, logistics, e-commerce, SaaS, and more — serving clients in 10+ countries.",
  alternates: { canonical: "https://octabitlogics.com/industries" },
  openGraph: {
    title: "Industries | OctaBitLogics",
    description:
      "We partner with leading organisations in fintech, healthcare, logistics, e-commerce, and SaaS to build systems that last.",
    url: "https://octabitlogics.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
