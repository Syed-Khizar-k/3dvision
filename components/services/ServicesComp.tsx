"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
 PencilRuler,
 Armchair,
 MonitorPlay,
 Trees,
 ClipboardList,
 Hammer,
 ArrowRight,
} from "lucide-react";

// --- Data ---
const SERVICES = [
 {
  icon: <PencilRuler size={32} />,
  title: "Architectural Design",
  description:
   "From concept to blueprints, we craft structures that blend functionality with aesthetic brilliance. Our approach prioritizes sustainability and innovation.",
 },
 {
  icon: <Armchair size={32} />,
  title: "Interior Design",
  description:
   "Transforming spaces into personalized sanctuaries. We curate furniture, lighting, and textures to create harmonious interiors that reflect your style.",
 },
 {
  icon: <MonitorPlay size={32} />,
  title: "3D Visualization",
  description:
   "Experience your project before it's built. Our hyper-realistic 3D renders and walkthroughs provide a clear vision of the final result.",
 },
 {
  icon: <Trees size={32} />,
  title: "Landscape Architecture",
  description:
   "Connecting nature with architecture. We design outdoor spaces that enhance the beauty and value of your property.",
 },
 {
  icon: <ClipboardList size={32} />,
  title: "Project Management",
  description:
   "Seamless execution from start to finish. We oversee timelines, budgets, and quality control to ensure your project is delivered on time.",
 },
 {
  icon: <Hammer size={32} />,
  title: "Renovation & Remodeling",
  description:
   "Breathe new life into existing structures. We modernize and optimize spaces while preserving their unique character.",
 },
];

const GALLERY_IMAGES = [
 "/images/experience.webp",
 "/images/contact.webp",
 "/images/why.jpg",
 "/images/experience.webp",
 "/images/contact.webp",
 "/images/why.jpg",
 "/images/experience.webp",
 "/images/contact.webp",
 "/images/why.jpg",
 "/images/experience.webp",
];

const ServicesComp = () => {
 return (
  <div className="bg-stone-50 min-h-screen font-sans">
   {/* --- Hero Section --- */}
   <section className="relative md:h-[100vh] h-[65vh] flex items-center justify-center overflow-hidden">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
     <Image
      src="/images/experience.webp"
      alt="Services Hero"
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
      Our Expertise
     </motion.p>
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
      Comprehensive Design Solutions
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
      We bring your vision to life through a holistic approach to design,
      construction, and management.
     </motion.p>
    </div>
   </section>

   {/* --- Services List Section --- */}
   <section className="py-20! md:py-28! container mx-auto px-4!">
    <div className="text-center mb-16">
     <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
      What We Offer
     </h2>
     <p className="text-gray-600 max-w-2xl mx-auto">
      Tailored services designed to meet the unique needs of every client, from
      private residences to large-scale commercial projects.
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     {SERVICES.map((service, index) => (
      <motion.div
       key={index}
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ delay: index * 0.1 }}
       className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
       <div className="w-14 h-14 bg-stone-100 rounded-xl flex items-center justify-center text-heading mb-6 group-hover:bg-heading group-hover:text-white transition-colors duration-300">
        {service.icon}
       </div>
       <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
        {service.title}
       </h3>
       <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
       </p>
       <div className="flex items-center text-sm font-semibold text-primary group-hover:translate-x-2 transition-transform cursor-pointer">
        <span>Learn More</span>
        <ArrowRight size={16} className="ml-2" />
       </div>
      </motion.div>
     ))}
    </div>
   </section>

   {/* --- Gallery Section --- */}
   <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
     <div className="flex flex-col md:flex-row justify-between items-end mb-12">
      <div className="max-w-xl">
       <p className="text-secondary font-medium tracking-widest uppercase mb-2 text-sm">
        Portfolio
       </p>
       <h2 className="text-3xl md:text-4xl font-bold text-heading">
        Visual Excellence
       </h2>
      </div>
      <div className="hidden md:block">
       <p className="text-gray-500 text-sm">
        A glimpse into our world of design.
       </p>
      </div>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
      {GALLERY_IMAGES.map((src, index) => (
       <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className={`relative rounded-xl overflow-hidden group cursor-pointer ${
         index === 0 || index === 5
          ? "md:col-span-2 md:row-span-2"
          : index === 2 || index === 7
          ? "md:row-span-2"
          : ""
        }`}>
        <Image
         src={src}
         alt={`Gallery Image ${index + 1}`}
         fill
         className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
       </motion.div>
      ))}
     </div>
    </div>
   </section>

   {/* --- CTA Section --- */}
   <section className="py-20 bg-heading text-white text-center">
    <div className="container mx-auto px-4">
     <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Transform Your Space?
     </h2>
     <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
      Let's collaborate to create something extraordinary. Contact us today for
      a consultation.
     </p>
     <button className="bg-white text-heading px-8 py-4 cursor-pointer rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      Get in Touch
     </button>
    </div>
   </section>
  </div>
 );
};

export default ServicesComp;
