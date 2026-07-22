import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Canavaro Daud — Senior Software Engineer",
  description:
    "Premium personal portfolio of Canavaro Daud. Senior Software Engineer crafting high-performance digital experiences with React, Next.js, TypeScript, and modern web technologies.",
  metadataBase: new URL("https://portfolio.dev"),
  keywords: ["software engineer", "portfolio", "React", "Next.js", "TypeScript", "full-stack"],
  authors: [{ name: "Canavaro Daud" }],
  openGraph: {
    title: "Canavaro Daud — Senior Software Engineer",
    description:
      "Premium personal portfolio of Canavaro Daud. Senior Software Engineer crafting high-performance digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Canavaro Daud — Senior Software Engineer",
    description: "Premium personal portfolio of Canavaro Daud.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#111111] font-sans antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="min-h-screen w-full bg-[#111111] antialiased flex flex-col justify-between">
          {children}
        </div>
      </body>
    </html>
  );
}
