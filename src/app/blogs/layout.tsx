import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "OctaBitLogics engineering blog — in-depth articles on AI, machine learning, cloud architecture, React, Next.js, DevOps, and digital transformation.",
  alternates: { canonical: "https://octabitlogics.com/blogs" },
  openGraph: {
    title: "Blogs | OctaBitLogics",
    description:
      "In-depth engineering articles on AI, cloud architecture, React, Next.js, DevOps, and digital transformation from the OctaBitLogics team.",
    url: "https://octabitlogics.com/blogs",
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
