import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Watsaap from "@/components/ui/Watsaap";
import { Navbar } from "@/components/Home/Navbar";

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

 title: {
  default: "3D Vision Edge | Best 3D Visualization & Interior Design Studio",
  template: "%s | 3D Vision Edge", // Proper templating for inner pages
 },

 description:
  "Premier 3D Architectural Visualization & Interior Design Studio in Lahore, Pakistan. We specialize in photorealistic 3D rendering, animation, VR walkthroughs, and architectural planning for real estate developers and architects.",

 keywords: [
  // Brand
  "3D Vision Edge",
  "3DVisionEdge",
  "Vision Edge",

  // Core Services
  "3D Architectural Visualization",
  "3D Rendering Services",
  "Interior Design Lahore",
  "Architectural Animation",
  "3D Floor Plans",
  "3D Modeling Company",
  "Real Estate CGI",

  // Location Based
  "Best Architects in Lahore",
  "Interior Designers DHA Lahore",
  "3D Visualizer Pakistan",
  "Construction Services Lahore",

  // Niche / Long-tail
  "Photorealistic exterior rendering",
  "3D walkthrough animation services",
  "Commercial interior design firm",
  "House map design 3D",
  "Virtual Reality Architecture",
  "4K Architectural Renders",
 ],

 openGraph: {
  title: "3D Vision Edge | Transforming Blueprints into Reality",
  description:
   "Leading 3D visualization studio offering high-end interior design, architectural rendering, and walkthrough animations. Elevate your real estate projects with 3D Vision Edge.",
  url: "https://3dvisionedge.com",
  siteName: "3D Vision Edge",
  locale: "en_US",
  type: "website",
  images: [
   {
    url: "/images/og-image.jpg", // Ensure this exists or fallback to logo
    width: 1200,
    height: 630,
    alt: "3D Vision Edge - Premium Architectural Visualization",
   },
  ],
 },

 twitter: {
  card: "summary_large_image",
  title: "3D Vision Edge | Premium 3D Visualization Services",
  description:
   "Expert 3D rendering and interior design services in Pakistan. Bringing architectural visions to life.",
  images: ["/images/og-image.jpg"],
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
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },

 category: "Design",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 // JSON-LD Structured Data for Local Business
 const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "3D Vision Edge",
  image: "https://3dvisionedge.com/logo.jpg",
  url: "https://3dvisionedge.com",
  telephone: "+923011463337",
  priceRange: "$$",
  address: {
   "@type": "PostalAddress",
   streetAddress: "DHA Phase 6",
   addressLocality: "Lahore",
   addressRegion: "Punjab",
   postalCode: "54000",
   addressCountry: "PK",
  },
  geo: {
   "@type": "GeoCoordinates",
   latitude: 31.48, // Approximate for DHA Phase 6
   longitude: 74.45,
  },
  openingHoursSpecification: {
   "@type": "OpeningHoursSpecification",
   dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
   ],
   opens: "09:00",
   closes: "21:00",
  },
  sameAs: [
   "https://www.facebook.com/3dvisionedge",
   "https://www.instagram.com/3dvisionedge",
  ],
 };

 return (
  <html lang="en">
   <head>
    <script
     type="application/ld+json"
     dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
   </head>
   <body
    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white!`}>
    <div className="relative">
     <Watsaap />
     <SmoothScroll />
     <Navbar />
     {children}
    </div>
   </body>
  </html>
 );
}
