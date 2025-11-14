import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Home/Footer";
import { Navbar } from "@/components/Home/Navbar";
import Reviews from "@/components/Home/Reviews";
import React from "react";

const page = () => {
 return (
  <div className="min-h-screen antialiased">
   {/* 1. Fixed Navigation Bar (z-index 50 ensures it stays on top of the hero) */}
   <Navbar />

   {/* 2. Full-Screen Hero Section */}
   {/* <HeroSection /> */}

   <div>
    <Reviews />
    <ContactUs />
    <Footer />
   </div>
  </div>
 );
};

export default page;
