"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Category, Project } from "@/data/projects";

const CATEGORIES: Category[] = [
 "All",
 "Architecture",
 "Interior",
 "Commercial",
];

const PortfolioComp = () => {
 const [activeCategory, setActiveCategory] = useState<Category>("All");

 const filteredProjects =
  activeCategory === "All"
   ? PROJECTS
   : PROJECTS.filter((project) => project.category === activeCategory);

 return (
  <section className="bg-stone-50 py-20 md:py-28 font-sans min-h-screen">
   <div className="container mx-auto px-4">
    {/* Header Section */}
    <div className="text-center mb-16 max-w-3xl mx-auto">
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-secondary font-medium tracking-widest uppercase mb-3 text-sm">
      Our Masterpieces
     </motion.p>
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6">
      Selected Works
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-gray-600 text-lg leading-relaxed">
      Explore a curated selection of our finest architectural and interior
      design projects, where innovation meets timeless elegance.
     </motion.p>
    </div>

    {/* Filter Tabs */}
    <div className="flex flex-wrap justify-center gap-4 mb-12">
     {CATEGORIES.map((cat) => (
      <button
       key={cat}
       onClick={() => setActiveCategory(cat)}
       className={`px-6 py-2 rounded-full cursor-pointer text-sm font-semibold transition-all duration-300 border ${
        activeCategory === cat
         ? "bg-heading text-white border-heading"
         : "bg-white text-gray-600 border-gray-200 hover:border-heading hover:text-heading"
       }`}>
       {cat}
      </button>
     ))}
    </div>

    {/* Projects Grid */}
    <motion.div
     layout
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
     <AnimatePresence mode="popLayout">
      {filteredProjects.map((project) => (
       <ProjectCard key={project.id} project={project} />
      ))}
     </AnimatePresence>
    </motion.div>
   </div>
  </section>
 );
};

// --- Project Card Component ---
const ProjectCard = ({ project }: { project: Project }) => {
 return (
  <motion.div
   layout
   initial={{ opacity: 0, scale: 0.9 }}
   animate={{ opacity: 1, scale: 1 }}
   exit={{ opacity: 0, scale: 0.9 }}
   transition={{ duration: 0.3 }}
   className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
   <Link href={`/portfolio/${project.id}`}>
    {/* Image Container */}
    <div className="relative h-80 w-full overflow-hidden">
     <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-cover transition-transform duration-700 group-hover:scale-110"
     />
     {/* Overlay Gradient */}
     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

     {/* Category Badge */}
     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1  rounded-full text-xs font-bold text-heading uppercase tracking-wider">
      {project.category}
     </div>
    </div>

    {/* Content Overlay (Always visible at bottom, moves up on hover) */}
    <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
     <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
      {project.title}
     </h3>
     <p className="text-gray-200 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
      {project.description}
     </p>

     <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 text-primary">
      <span>View Project</span>
      <ArrowUpRight size={16} />
     </div>
    </div>
   </Link>
  </motion.div>
 );
};

export default PortfolioComp;
