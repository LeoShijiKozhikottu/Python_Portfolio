import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://caltracker-fit.vercel.app"),
  title: "ADVANCED PYTHON PROGRAMMING PORTFOLIO — Leo Shiji (23MIC0082)",
  description:
    "Advanced Python Programming (CS13007) academic portfolio and project writeup by Leo Shiji (23MIC0082). Featuring CalTracker: AI-Powered Calorie Tracking Web App with Gemini Vision, Green View Index Pandas Data Analysis, IoT Impairment Detection, and LeetCode algorithmic problem solving.",
  keywords: [
    "Leo Shiji",
    "23MIC0082",
    "CS13007",
    "Advanced Python Programming",
    "CalTracker",
    "Gemini Vision",
    "Vercel",
    "Pandas",
    "Green View Index",
    "IoT",
    "ESP32",
    "LeetCode",
    "VIT Vellore",
  ],
  authors: [{ name: "Leo Shiji", url: "https://medium.com/@leoshiji" }],
  openGraph: {
    title: "ADVANCED PYTHON PROGRAMMING PORTFOLIO — Leo Shiji (23MIC0082)",
    description:
      "Course portfolio and technical project writeup for CS13007: CalTracker with Gemini Vision, Pandas GVI dataset, IoT eating disorder classifier, and LeetCode solutions.",
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1080,
        height: 1350,
        alt: "Leo Shiji (23MIC0082) — Advanced Python Programming Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased selection:bg-python-blue/30 selection:text-ivory-50 cyber-grid-overlay">
        {children}
      </body>
    </html>
  );
}
