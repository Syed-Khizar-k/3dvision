import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Watsaap from "@/components/ui/Watsaap";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono",
 subsets: ["latin"],
});

export const metadata: Metadata = {
 metadataBase: new URL("https://3dvisionedge.com"),

 title:
  "3D Vision Edge – Best 3D Architectural Visualization & Rendering Studio in Pakistan",

 description:
  "3D Vision Edge provides high-end 3D architectural visualization, interior & exterior rendering, walkthrough animations, and real-estate CGI services. Trusted by architects, builders, and developers across Lahore and Pakistan for ultra-realistic digital design experiences.",

 keywords: [
  "3D vision edge",
  "3d vision edge lahore",
  "3d vision edge pakistan",
  "vision edge ",
  "3d architectural visualization",
  "#1 3d visiualzers in pakistan",
  "3D visualization Lahore",
  "3d rendering services Pakistan",
  "architectural rendering Pakistan",
  "3D exterior design",
  "interior 3D visualization",
  "CGI real estate Pakistan",
  "3D animation services Lahore",
  "3D walkthrough",
  "3D floor plans",
  "3d model render studio",
  "render farm Pakistan",
  "property visualization",
  "architectural CGI services",
 ],

 openGraph: {
  title:
   "3D Vision Edge – Pakistan’s Leading 3D Architectural Visualization Studio",
  description:
   "We transform architectural concepts into photo-realistic 3D visuals, CGI renders, animations, and walkthroughs. Serving architects, real estate developers, and interior designers.",
  url: "https://3dvisionedge.com",
  siteName: "3D Vision Edge",
  locale: "en_US",
  type: "website",
  images: [
   {
    url: "https://3dvisionedge.com/logo.jpg",
    width: 1200,
    height: 630,
    alt: "3D Vision Edge – Architectural Visualization Studio",
   },
  ],
 },

 twitter: {
  card: "summary_large_image",
  title:
   "3D Vision Edge – Premium 3D Visualization & Rendering Services in Lahore",
  description:
   "We deliver ultra-realistic architectural rendering, interior/exterior CGI, and 3D animations for real estate & construction projects.",
  images: ["https://3dvision.vercel.app/og-image.jpg"],
 },

 alternates: {
  canonical: "https://3dvisionedge.com",
 },

 robots: {
  index: true,
  follow: true,
  nocache: false,
  googleBot: {
   index: true,
   follow: true,
  },
 },

 category: "Architecture, 3D Visualization, CGI Services",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <Watsaap />
   <SmoothScroll />
   <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white!`}>
    <div id="smooth-wrapper">
     <div id="smooth-content"> {children}</div>
    </div>
   </body>
  </html>
 );
}
