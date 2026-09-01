import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import CookieBanner from "../components/CookieBanner";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const BASE_URL = "https://octabitlogics.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#002046",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "OctaBitLogics",
    template: "%s | OctaBitLogics",
  },

  description:
    "OctaBitLogics builds precision-engineered AI solutions, enterprise web apps, mobile platforms, and cloud infrastructure for ambitious businesses across North America, Europe, and Asia.",

  keywords: [
    "OctaBitLogics",
    "AI software development",
    "machine learning solutions",
    "enterprise web development",
    "mobile app development",
    "cloud DevOps",
    "Next.js development",
    "React development",
    "software engineering company",
    "Pakistan software company",
    "digital transformation",
    "custom software",
    "SaaS development",
    "AI automation",
  ],

  authors: [{ name: "OctaBitLogics", url: BASE_URL }],
  creator: "OctaBitLogics",
  publisher: "OctaBitLogics",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "OctaBitLogics",
    title: "OctaBitLogics",
    description:
      "Precision-engineered AI solutions, enterprise apps, and cloud infrastructure. Built to scale for ambitious businesses globally.",
    images: [
      {
        url: "/octabit final.png",
        width: 1200,
        height: 630,
        alt: "OctaBitLogics",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@octabitlogics",
    creator: "@octabitlogics",
    title: "OctaBitLogics",
    description:
      "Precision-engineered AI solutions, enterprise apps, and cloud infrastructure. Built to scale for ambitious businesses globally.",
    images: ["/octabit final.png"],
  },

  icons: {
    icon: [
      { url: "/sitelogo-transparent.png", type: "image/png" },
    ],
    apple: [
      { url: "/sitelogo-transparent.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/sitelogo-transparent.png",
  },

  manifest: "/site.webmanifest",

  alternates: {
    canonical: BASE_URL,
  },

  category: "technology",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OctaBitLogics",
  url: BASE_URL,
  logo: `${BASE_URL}/octabit%20final.png`,
  image: `${BASE_URL}/octabit%20final.png`,
  description:
    "OctaBitLogics builds precision-engineered AI solutions, enterprise web apps, mobile platforms, and cloud infrastructure for ambitious businesses worldwide.",
  email: "info@octabitlogics.com",
  telephone: "+92-321-535-3105",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://linkedin.com/company/octabitlogics",
    "https://twitter.com/octabitlogics",
    "https://github.com/octabitlogics",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "DevOps",
    "UI/UX Design",
    "SaaS Development",
  ],
  areaServed: ["US", "PK", "GB", "SA", "AE", "CA", "DE", "PT", "IN", "SG"],
  serviceType: [
    "AI & Automation",
    "Custom Software Development",
    "Cloud & DevOps",
    "Mobile App Development",
    "UI/UX Design",
    "Web Development",
  ],
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={font.variable} style={{ overflowX: "hidden" }}>
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
//         />
//       </head>
//       <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
//         {children}
//         <CookieBanner />
//       </body>
//     </html>
//   );
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable} style={{ overflowX: "hidden" }}>
      <head>
        <meta
          name="facebook-domain-verification"
          content="8kq13zdnqhd0j53p1cy0euulbox9ml"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>

      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
