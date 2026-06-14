import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OctaBitLogics Portfolio",
  description: "OctaBitLogics Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body style={{ margin: 0, padding: 0, overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}