import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yun Deng — Economics Portfolio",
  description:
    "MS Economics student at Northeastern University specializing in causal inference, machine learning, and applied econometrics.",
  openGraph: {
    title: "Yun Deng — Economics Portfolio",
    description:
      "MS Economics student at Northeastern University specializing in causal inference, machine learning, and applied econometrics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
