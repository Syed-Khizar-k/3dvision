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
  "Home | 3D Vision Edge - Top Interior Design & Architecture Firm Lahore",
 description:
  "Transform your space with 3D Vision Edge. We offer top-tier interior design, architectural planning, and 3D visualization services in Lahore, Pakistan. Affordable, transparent, and premium quality.",

 alternates: {
  canonical: "https://3dvisionedge.com",
 },

 openGraph: {
  title: "3D Vision Edge | Best Interior Design & Architecture in Lahore",
  description:
   "Expert interior designers and architects in Lahore delivering luxury home renovation, commercial design, and 3D visualization services.",
  url: "https://3dvisionedge.com",
  siteName: "3D Vision Edge",
  images: [
   {
    url: "/logo.jpg",
    width: 1200,
    height: 630,
    alt: "3D Vision Edge Interior Design Portfolio",
   },
  ],
  locale: "en_US",
  type: "website",
 },
};

export default function Home() {
 return (
  <div className="min-h-screen antialiased">
   {/* 1. Fixed Navigation Bar (z-index 50 ensures it stays on top of the hero) */}

   {/* 2. Full-Screen Hero Section */}
   <HeroSection />
   <div>
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
