import AboutComp from "@/components/about/AboutComp";
import ContactUs from "@/components/Home/ContactUs";
import Footer from "@/components/Home/Footer";

import Reviews from "@/components/Home/Reviews";
import React from "react";

const page = () => {
 return (
  <div className="min-h-screen antialiased">
   {/* 1. Fixed Navigation Bar (z-index 50 ensures it stays on top of the hero) */}

   <AboutComp />
   <div>
    <Reviews />
    <ContactUs />
    <Footer />
   </div>
  </div>
 );
};

export default page;
