import type { Metadata, Viewport } from "next";
import { Orbitron, Geist_Mono } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#02040a", // Matches your background
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OctaBitLogics | Pioneering the Digital Frontier",
  description: "Futuristic IT solutions including SaaS development, AI automation, and Cloud-hosted services. Transform your digital future with OctaBitLogics.",
  keywords: ["SaaS", "AI Automation", "Cloud Services", "Web Development", "OctaBitLogics", "Futuristic Tech"],
  authors: [{ name: "OctaBitLogics Team" }],
  
  // OpenGraph for LinkedIn/Facebook
  openGraph: {
    title: "OctaBitLogics | Coming Soon",
    description: "Architecting the next generation of digital infrastructure. AI, Cloud, and SaaS solutions.",
    url: "https://octabitlogics.com",
    siteName: "OctaBitLogics",
    images: [
      {
        url: "/og-image.jpg", // Add a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "OctaBitLogics Future Deploying",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "OctaBitLogics | Future Deploying",
    description: "Cutting-edge IT solutions and AI automation.",
    images: ["/og-image.jpg"],
  },

  // Robots/Crawler settings
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#02040a] selection:bg-[#00fff0] selection:text-[#02040a]">
        {children}
      </body>
    </html>
  );
}