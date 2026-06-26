import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with OctaBitLogics — start a project, request a quote, or schedule a discovery call with our engineering team. Response within 24 hours.",
  alternates: { canonical: "https://octabitlogics.com/contact" },
  openGraph: {
    title: "Contact | OctaBitLogics",
    description:
      "Start a project or request a quote. Our team responds within 24 hours.",
    url: "https://octabitlogics.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
