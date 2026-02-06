"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VRCardViewer, { VRScene } from "./VRCardViewer";
import Link from "next/link";
import { Eye, Box, Navigation, CheckCircle } from "lucide-react";
import Footer from "@/components/Home/Footer";
import Reviews from "@/components/Home/Reviews";
import { LoopingImages } from "./LoopingImages";

const VR_SCENES: VRScene[] = [
 {
  id: "Bed Room",
  name: "Bed Room",
  panorama: "/images/vr/vr1.jpg",
  description: "Luxury living room with contemporary design and city views",
 },
 {
  id: "Bed Room",
  name: "Bed Room",
  panorama: "/images/vr/vr2.jpg",
  description: "Elegant bedroom featuring premium finishes and comfort",
 },
 {
  id: "Bed Room",
  name: "Bed Room",
  panorama: "/images/vr/vr3.jpg",
  description: "Elegant bedroom featuring premium finishes and comfort",
 },
 {
  id: "Bed Room",
  name: "Bed Room",
  panorama: "/images/vr/vr4.jpg",
  description: "Elegant bedroom featuring premium finishes and comfort",
 },
];

const phoneNumber = "923011463337";
const message = "Hello! I'm interested in your Virtual Reality tours.";
const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const VirtualRealityComp = () => {
 return (
  <div className="bg-stone-50 min-h-screen font-sans relative">
   {/* --- Hero Section --- */}
   <section className="relative md:h-[100vh] h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
     <Image
      src="/images/vr/vr1.jpg"
      alt="Virtual Reality Tours Hero"
      fill
      className="object-cover"
      priority
     />
     <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4 text-primary">
      Immersive Experience
     </motion.p>
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Virtual Reality Tours
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
      Step inside stunning 360° environments and explore photorealistic interior
      designs from the comfort of your device.
     </motion.p>
    </div>
    <div className="absolute -bottom-1 overflow-hidden left-0 w-full h-64 md:h-72 bg-gradient-to-t from-white to-transparent z-[10] pointer-events-none" />
   </section>

   {/* --- Features Section --- */}
   <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
       Experience Design in 360°
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
       Navigate through immersive virtual environments and experience spaces as
       if you were truly there.
      </p>
     </div>

     {/* Looping Images Animation */}
     <LoopingImages />
    </div>
   </section>

   {/* --- VR Tours Grid Section --- */}
   <section className="py-20 md:py-28  mx-auto px-4">
    <div className="text-center mb-16">
     <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
      Explore Our Virtual Tours
     </h2>
     <p className="text-gray-600 max-w-2xl mx-auto">
      Drag to look around • Scroll to zoom • Click fullscreen for immersive
      experience
     </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
     {VR_SCENES.map((scene, index) => (
      <motion.div
       key={scene.id}
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.15 }}
       className="group">
       <VRCardViewer scene={scene} />
      </motion.div>
     ))}
    </div>
   </section>

   {/* --- Why Choose Us Section --- */}
   <section className="py-20 container mx-auto px-4">
    <div className="bg-heading rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
     {/* Decorative Circle */}
     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
     <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full -ml-32 -mb-32 blur-3xl" />

     <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
       <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why We Are The Best Choice
       </h2>
       <ul className="space-y-4">
        {[
         "Unmatched Attention to Detail",
         "Hyper-Realistic 3D Renders",
         "Timely Delivery & Professionalism",
         "Customized Design Solutions",
        ].map((item, i) => (
         <li key={i} className="flex items-center gap-3">
          <CheckCircle className="text-primary" size={24} />
          <span className="text-lg text-gray-200">{item}</span>
         </li>
        ))}
       </ul>
      </div>
      <div className="md:w-1/2 text-center md:text-right">
       <p className="text-xl md:text-2xl font-light italic text-gray-300 mb-8">
        "We don't just design spaces; we create immersive experiences that
        inspire and endure."
       </p>
       <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-heading px-8 py-4 cursor-pointer rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center">
        Start Your Project <CheckCircle className="ml-2" size={20} />
       </Link>
      </div>
     </div>
    </div>
   </section>

   {/* Reviews Section */}
   <Reviews />

   {/* Footer */}
   <Footer />
  </div>
 );
};

export default VirtualRealityComp;
