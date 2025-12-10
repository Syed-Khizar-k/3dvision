import type { Metadata } from "next";
import Counter from "@/components/Home/Counter";
import Footer from "@/components/Home/Footer";
import { HeroSection } from "@/components/Home/Hero";

import Reviews from "@/components/Home/Reviews";
import Services from "@/components/Home/Services";
import WhyChoose from "@/components/Home/WhyChoose";
import ContactUs from "@/components/Home/ContactUs";
import Intro from "@/components/Home/Intro";
export const metadata: Metadata = {
 title:
  "Top Interior Design & Architechture company in Lahore | 3D Vision Edge",
 description:
  "3D Vision Edge offers premium interior design, architecture, and construction services in Lahore. We deliver high-quality, transparent, and affordable solutions.",

 // --- Canonical URL & Robots ---
 metadataBase: new URL("https://3dvisionedge.com"),
 alternates: {
  canonical: "/",
 },
 robots: {
  index: true,
  follow: true,
  googleBot: {
   index: true,
   follow: true,
   "max-video-preview": -1,
   "max-image-preview": "large",
   "max-snippet": -1,
  },
 },

 // --- Open Graph (for Social Sharing - Facebook, LinkedIn) ---
 openGraph: {
  title: "3D Vision Edge | Interior Design, Architecture & Construction",
  description:
   "Transforming spaces with high-quality, transparent, and affordable design and construction services in Lahore.",
  url: "https://3dvisionedge.com",
  siteName: "3D Vision Edge",
  images: [
   {
    url: "https://3dvisionedge.com/images/social-preview.jpg", // You must create this image
    width: 1200,
    height: 630,
    alt: "A stunning interior design project by 3D Vision Edge",
   },
  ],
  locale: "en_US",
  type: "website",
 },

 // --- Other Tags ---
 keywords: [
  "Interior Design Lahore",
  "Interior Designers Lahore",
  "Architechture company Lahore",
  "Architecture Design Pakistan",
  "3D Vision Edge",
  "3d vision edge ",
  "vision edge",
  "Interior Decoration Lahore",
  "Home Renovation Lahore",
  "Commercial Interior Design",
  "Furniture Design Lahore",
 ],
 authors: [{ name: "3D Vision Edge" }],
};

export default function Home() {
 return (
  <div className="min-h-screen antialiased">
   {/* 1. Fixed Navigation Bar (z-index 50 ensures it stays on top of the hero) */}

   {/* 2. Full-Screen Hero Section */}
   <HeroSection />

   <div className="relative z-10 -mt-2">
    <Intro />
    <Services />
    <Counter />
    <WhyChoose />
    <Reviews />
    <ContactUs />
    <Footer />
   </div>
  </div>
 );
}
