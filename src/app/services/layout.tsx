import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "OctaBitLogics offers AI & automation, custom software development, mobile apps, cloud & DevOps, and UI/UX design services for enterprises and startups globally.",
  alternates: { canonical: "https://octabitlogics.com/services" },
  openGraph: {
    title: "Services | OctaBitLogics",
    description:
      "AI & automation, custom software, mobile apps, cloud & DevOps, and UI/UX design — end-to-end engineering services for global businesses.",
    url: "https://octabitlogics.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
