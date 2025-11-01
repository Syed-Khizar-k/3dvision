import Counter from "@/components/Home/Counter";
import { HeroSection } from "@/components/Home/Hero";
import { Navbar } from "@/components/Home/Navbar";
import Services from "@/components/Home/Services";

import Image from "next/image";

export default function Home() {
 return (
  <div className="min-h-screen antialiased">
   {/* 1. Fixed Navigation Bar (z-index 50 ensures it stays on top of the hero) */}
   <Navbar />

   {/* 2. Full-Screen Hero Section */}
   <HeroSection />

   {/* This is a placeholder for content that would appear below the full-screen hero.
        Scroll down to see it.
      */}
   <div>
    <Services />
    <Counter />
   </div>
  </div>
 );
}
