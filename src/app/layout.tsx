import type { Metadata, Viewport } from "next";
import { Orbitron, Geist_Mono, Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Futuristic font for headings
const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Technical font for code/data
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// New design primary display font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// New design body font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://octabitlogics.com"),
  title: {
    default: "OctaBitLogics | AI Automation, SaaS & Custom Software Development",
    template: "%s | OctaBitLogics",
  },
  description: "OctaBitLogics is a premier Software Development agency specializing in AI-driven automation, high-performance SaaS platforms, and enterprise cloud solutions. Scale your business with futuristic IT infrastructure.",
  keywords: [
    "Software Development Agency Pakistan",
    "AI Automation Services",
    "SaaS Development",
    "Custom Web Applications",
    "Enterprise Solutions",
    "OctaBitLogics Portfolio",
    "Modern Tech Solutions",
    "Digital Transformation"
  ],
  authors: [{ name: "OctaBitLogics Team", url: "https://octabitlogics.com" }],
  creator: "OctaBitLogics",
  publisher: "OctaBitLogics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "OctaBitLogics | Leading AI & SaaS Development Agency",
    description: "Transforming ambitious ideas into futuristic digital realities. Experts in AI, SaaS, and Cloud Infrastructure.",
    url: "https://octabitlogics.com",
    siteName: "OctaBitLogics",
    images: [
      {
        url: "/octabit final.png",
        width: 1200,
        height: 630,
        alt: "OctaBitLogics - Pioneering the Digital Frontier",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "OctaBitLogics | AI & SaaS Solutions",
    description: "Professional, futuristic IT solutions for global businesses. AI, SaaS, and custom software.",
    images: ["/octabit final.png"],
    creator: "@octabitlogics",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OctaBitLogics",
    url: "https://octabitlogics.com",
    logo: "https://octabitlogics.com/octabit final.png",
    description: "OctaBitLogics is a premier Software Development agency specializing in AI-driven automation and SaaS platforms.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK"
    },
    serviceType: ["Software Development", "AI Automation", "UI/UX Design"],
    sameAs: [
      "https://linkedin.com/company/octabitlogics",
      "https://twitter.com/octabitlogics"
    ]
  };

  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${geistMono.variable} ${manrope.variable} ${inter.variable} h-full antialiased`}
      prefix="og: http://ogp.me/ns#"
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#faf9fd] selection:bg-[#a2f796] selection:text-[#002046]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}